import { useState, useEffect, useRef } from 'react';

// Base time slots available for booking
const availableTimeSlots = [
  "09:00am", "09:30am", "10:00am", "10:30am", 
  "11:00am", "11:30am", "02:00pm", "02:30pm", 
  "03:00pm", "03:30pm", "04:00pm", "04:30pm"
];

// Curated list of major world timezones matching your interface structure
interface TimezoneOption {
  label: string;      // Display name
  ianaName: string;   // IANA time zone identifier
  region: string | null;
}

const timezoneDatabase: TimezoneOption[] = [
  { label: "Yekaterinburg Time", ianaName: "Asia/Yekaterinburg", region: "ASIA" },
  { label: "Asia/Yerevan", ianaName: "Asia/Yerevan", region: "ASIA" },
  { label: "India Standard Time", ianaName: "Asia/Kolkata", region: "ASIA" },
  { label: "Azores Time", ianaName: "Atlantic/Azores", region: "ATLANTIC" },
  { label: "Cape Verde Time", ianaName: "Atlantic/Cape_Verde", region: "ATLANTIC" },
  { label: "Eastern Standard Time (EST)", ianaName: "America/New_York", region: "AMERICA" },
  { label: "Greenwich Mean Time (GMT)", ianaName: "Europe/London", region: "EUROPE" },
];

export default function CalendlyBookingView() {
  // Calendar and Time state handlers
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentDateFocus, setCurrentDateFocus] = useState<Date>(new Date(2026, 4, 1)); // May 2026 default

  // Timezone and Selector UI states
  const [currentTimezone, setCurrentTimezone] = useState<TimezoneOption>({
    label: "India Standard Time",
    ianaName: "Asia/Kolkata",
    region: "ASIA"
  });
  const [dropdownTimeLabels, setDropdownTimeLabels] = useState<{ [key: string]: string }>({});
  const [isTimezoneOpen, setIsTimezoneOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [use24Hour, setUse24Hour] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Workflow tracking states
  const [step, setStep] = useState<'datetime' | 'details' | 'success'>('datetime');
  const [formData, setFormData] = useState({ name: '', email: '', note: '' });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Dynamic calculations for individual timezone clock previews
  const calculateClockTime = (ianaName: string, military: boolean): string => {
    try {
      return new Intl.DateTimeFormat('en-US', {
        timeZone: ianaName,
        hour: 'numeric',
        minute: '2-digit',
        hour12: !military
      }).format(new Date()).toLowerCase().replace(' ', '');
    } catch {
      return "--:--";
    }
  };

  // Close dropdown on outside clicks
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsTimezoneOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update clock times systematically across dropdown values
  useEffect(() => {
    const updateAllClocks = () => {
      const times: { [key: string]: string } = {};
      timezoneDatabase.forEach(tz => {
        times[tz.ianaName] = calculateClockTime(tz.ianaName, use24Hour);
      });
      setDropdownTimeLabels(times);
    };

    updateAllClocks();
    const intervalId = setInterval(updateAllClocks, 30000); // Sync every 30 seconds
    return () => clearInterval(intervalId);
  }, [use24Hour]);

  // Autodetect visitor's default world region on component startup
  useEffect(() => {
    try {
      const systemZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const matchedZone = timezoneDatabase.find(tz => tz.ianaName === systemZone);
      if (matchedZone) {
        setCurrentTimezone(matchedZone);
      }
    } catch (e) {
      console.warn("Could not parse default client timezone setup profile.", e);
    }
  }, []);

  // Structural dynamic grid variables
  const year = currentDateFocus.getFullYear();
  const month = currentDateFocus.getMonth();
  const monthHeaderString = currentDateFocus.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
  const rawStartDay = new Date(year, month, 1).getDay(); 
  const startOffset = rawStartDay === 0 ? 6 : rawStartDay - 1;

  const daysInMonthArray = Array.from({ length: totalDaysInMonth }, (_, i) => {
    const dayNum = i + 1;
    const dayOfWeek = new Date(year, month, dayNum).getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    let isAvailable = !isWeekend;
    if (year === 2026 && month === 4 && dayNum < 18) { isAvailable = false; }
    return { day: dayNum, active: isAvailable };
  });

  const handleMonthPrev = () => {
    const minLimit = new Date(2026, 0, 1);
    const targetDate = new Date(year, month - 1, 1);
    if (targetDate >= minLimit) {
      setCurrentDateFocus(targetDate);
      setSelectedDate(null);
      setSelectedTime(null);
    }
  };

  const handleMonthNext = () => {
    const maxLimit = new Date(2028, 0, 1);
    const targetDate = new Date(year, month + 1, 1);
    if (targetDate <= maxLimit) {
      setCurrentDateFocus(targetDate);
      setSelectedDate(null);
      setSelectedTime(null);
    }
  };

  // Submit operations running database check with direct local mail interface fallback
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formattedDate = `${selectedDate} ${monthHeaderString}`;

    try {
      const response = await fetch("https://api.evangelingladin.com/v1/crm/leads/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          additionalNotes: formData.note,
          bookedDate: formattedDate,
          bookedTime: selectedTime,
          bookedAt: new Date().toISOString(),
          status: "Scheduled"
        }),
      });

      if (response.ok) {
        setStep('success');
        return;
      }
      throw new Error("API Connection Interrupted");

    } catch (error) {
      console.warn("CRM database target down. Deploying deep-link email communication protocol...", error);
      const emailTo = "monisha612003@gmail.com";
      const emailSubject = encodeURIComponent(`New CRM Demo Booking: ${formData.name}`);
      const emailBody = encodeURIComponent(
        `Hi Monisha,\n\nA new demo has been requested via your CRM landing page widget!\n\n` +
        `👤 Client Name: ${formData.name}\n` +
        `📧 Email Address: ${formData.email}\n` +
        `📅 Date Selected: ${formattedDate}\n` +
        `🕒 Time Slot Selected: ${selectedTime}\n` +
        `🌍 Client Zone Configuration: ${currentTimezone.label}\n` +
        `📝 Notes: ${formData.note || 'None'}\n\n` +
        `Best regards,\nthebot crm platform`
      );

      window.location.href = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;
      setStep('success');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Filter out timezone items based on context user typing queries
  const filteredTimezones = timezoneDatabase.filter(tz => 
    tz.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (tz.region && tz.region.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="w-full min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 md:p-12 font-sans selection:bg-blue-100">
      
      <div className={`bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 relative
        ${selectedDate && step === 'datetime' ? 'w-full max-w-5xl min-h-[580px]' : 'w-full max-w-3xl min-h-[540px]'}`}>
        
        <div className="absolute top-0 right-0 bg-slate-600 text-white text-[9px] font-bold px-6 py-1.5 rotate-45 translate-x-5 translate-y-2.5 shadow-sm pointer-events-none opacity-90 uppercase tracking-widest z-40">
          Powered by <span className="font-extrabold">Calendly</span>
        </div>

        {/* LEFT SUMMARY BLOCK */}
        <div className="w-full md:w-[42%] p-6 sm:p-8 md:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100 bg-white">
          <div className="space-y-5">
            {step !== 'datetime' && (
              <button type="button" onClick={() => { setStep('datetime'); setSelectedTime(null); }} className="text-slate-400 hover:text-slate-700 font-bold text-xs flex items-center gap-1.5">
                ← Back
              </button>
            )}
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">thebot crm - team</p>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-tight">CRM Requirement</h1>
            
            <div className="space-y-3.5 pt-2">
              <div className="flex items-center gap-3 text-slate-500 font-bold text-sm"><span>🕒</span> 30 min</div>
              <div className="flex items-start gap-3 text-slate-500 text-sm font-semibold">
                <span className="mt-0.5">📹</span> <span>Web conferencing details provided upon confirmation.</span>
              </div>
              {selectedDate && (
                <div className="flex items-center gap-3 text-blue-600 font-bold text-sm pt-4 border-t border-slate-100/80">
                  <span>📅</span> {selectedTime ? `${selectedTime}, ` : ''} {monthHeaderString.split(' ')[0]} {selectedDate}, {monthHeaderString.split(' ')[1]}
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-5 pt-10 md:pt-0 text-xs font-bold text-blue-600">
            <button type="button" className="hover:underline">Cookie settings</button>
            <button type="button" className="hover:underline">Privacy Policy</button>
          </div>
        </div>

        {/* RIGHT WORKFLOW BLOCK */}
        <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center bg-white">
          
          {step === 'datetime' && (
            <div className="w-full flex flex-col lg:flex-row gap-8 items-start justify-center">
              
              <div className="flex-1 w-full">
                <h2 className="text-lg font-bold text-slate-900 mb-6 tracking-tight text-center lg:text-left">Select a Date & Time</h2>

                {/* Month Scroller */}
                <div className="flex items-center justify-center gap-5 mb-6">
                  <button type="button" onClick={handleMonthPrev} disabled={year === 2026 && month === 0} className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${(year === 2026 && month === 0) ? 'text-slate-200 cursor-not-allowed' : 'hover:bg-blue-50 text-blue-600'}`}>◀</button>
                  <span className="text-sm font-bold text-slate-700 min-w-[120px] text-center">{monthHeaderString}</span>
                  <button type="button" onClick={handleMonthNext} disabled={year === 2028 && month === 0} className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${(year === 2028 && month === 0) ? 'text-slate-200 cursor-not-allowed' : 'hover:bg-blue-50 text-blue-600'}`}>▶</button>
                </div>

                {/* Day Markers */}
                <div className="grid grid-cols-7 text-center text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-wider">
                  <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
                </div>

                {/* Day Grid Matrix */}
                <div className="grid grid-cols-7 gap-y-1.5 text-center">
                  {Array.from({ length: startOffset }).map((_, i) => <div key={`offset-${i}`} className="h-9 w-9" />)}
                  {daysInMonthArray.map((item) => (
                    <div key={`day-${item.day}`} className="flex items-center justify-center h-9">
                      {item.active ? (
                        <button type="button" onClick={() => { setSelectedDate(item.day); setSelectedTime(null); }} className={`w-9 h-9 rounded-full text-xs font-bold flex items-center justify-center transition-all ${selectedDate === item.day ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}>{item.day}</button>
                      ) : (
                        <span className="text-xs font-semibold text-slate-400">{item.day}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* TIMEZONE ACCORDION PANEL SELECTOR */}
                <div className="mt-6 pt-5 border-t border-slate-100 relative" ref={dropdownRef}>
                  <p className="text-[11px] font-bold text-slate-900 mb-1">Time zone</p>
                  
                  <button 
                    type="button" 
                    onClick={() => setIsTimezoneOpen(!isTimezoneOpen)}
                    className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 outline-none group"
                  >
                    <span>🌐</span> 
                    <span>{currentTimezone.label} ({dropdownTimeLabels[currentTimezone.ianaName] || '--:--'})</span> 
                    <span className={`text-[8px] text-slate-400 transition-transform duration-200 ${isTimezoneOpen ? 'rotate-180' : ''}`}>▼</span>
                  </button>

                  {/* DROP DOWN BOX PANEL COMPONENT OVERLAY */}
                  {isTimezoneOpen && (
                    <div className="absolute left-0 bottom-full mb-2 w-full max-w-[340px] bg-white border border-slate-200 rounded-lg shadow-2xl z-50 overflow-hidden animate-fadeIn">
                      
                      {/* Search and Format Toolbar */}
                      <div className="p-3 border-b border-slate-100 space-y-2.5 bg-slate-50/60">
                        <div className="relative">
                          <span className="absolute left-2.5 top-2 text-slate-400 text-xs">🔍</span>
                          <input 
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search..."
                            className="w-full pl-7 pr-3 py-1.5 bg-white border border-slate-200 rounded text-xs focus:outline-none focus:border-blue-500 font-medium"
                          />
                        </div>

                        {/* Format Switch */}
                        <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 uppercase tracking-wider px-0.5">
                          <span>Time Format</span>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <span className={!use24Hour ? 'text-blue-600' : ''}>am/pm</span>
                            <div className="relative w-7 h-4 bg-slate-200 rounded-full transition-colors" onClick={() => setUse24Hour(!use24Hour)}>
                              <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-sm transition-all ${use24Hour ? 'left-3.5 bg-blue-600' : 'left-0.5'}`} />
                            </div>
                            <span className={use24Hour ? 'text-blue-600' : ''}>24h</span>
                          </label>
                        </div>
                      </div>

                      {/* Items Matrix */}
                      <div className="max-h-[220px] overflow-y-auto py-1">
                        {filteredTimezones.length === 0 ? (
                          <div className="p-4 text-center text-xs font-bold text-slate-400">No matching zones found</div>
                        ) : (
                          Object.entries(
                            filteredTimezones.reduce((acc, tz) => {
                              const key = tz.region || "GLOBAL";
                              if (!acc[key]) acc[key] = [];
                              acc[key].push(tz);
                              return acc;
                            }, {} as { [key: string]: TimezoneOption[] })
                          ).map(([region, options]) => (
                            <div key={region}>
                              <div className="text-[10px] font-extrabold text-slate-400 bg-slate-50/40 px-3 py-1 uppercase tracking-widest border-y border-slate-100/40">{region}</div>
                              {options.map((tz) => (
                                <button
                                  key={tz.ianaName}
                                  type="button"
                                  onClick={() => {
                                    setCurrentTimezone(tz);
                                    setIsTimezoneOpen(false);
                                  }}
                                  className={`w-full text-left px-4 py-2.5 text-xs flex justify-between items-center transition-colors font-semibold
                                    ${currentTimezone.ianaName === tz.ianaName 
                                      ? 'bg-blue-600 text-white' 
                                      : 'text-slate-700 hover:bg-slate-50'
                                    }`}
                                >
                                  <span>{tz.label}</span>
                                  <span className={`text-[11px] font-mono ${currentTimezone.ianaName === tz.ianaName ? 'text-blue-100' : 'text-slate-500'}`}>
                                    {dropdownTimeLabels[tz.ianaName] || '--:--'}
                                  </span>
                                </button>
                              ))}
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Time Slots Display Panel */}
              {selectedDate && (
                <div className="w-full lg:w-[180px] max-h-[340px] overflow-y-auto px-1 border-t lg:border-t-0 lg:border-l lg:border-slate-100 lg:pl-4 pt-4 lg:pt-0 animate-fadeIn">
                  <p className="text-xs font-bold text-slate-500 mb-3 text-center lg:text-left uppercase tracking-wider">Select Time</p>
                  <div className="space-y-2">
                    {availableTimeSlots.map((time) => (
                      <div key={time} className="flex items-center gap-1.5">
                        <button type="button" onClick={() => setSelectedTime(time)} className={`flex-1 py-2 text-xs font-bold border rounded transition-all text-center ${selectedTime === time ? 'border-slate-700 bg-slate-700 text-white' : 'border-blue-200 text-blue-600 hover:border-blue-600 bg-white'}`}>{time}</button>
                        {selectedTime === time && (
                          <button type="button" onClick={() => setStep('details')} className="px-3 py-2 bg-blue-600 text-white text-xs font-bold rounded hover:bg-blue-700 transition-all shadow-sm">Next</button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* REGISTER CLIENT FORM */}
          {step === 'details' && (
            <form onSubmit={handleFormSubmit} className="w-full max-w-sm mx-auto space-y-4 animate-fadeIn">
              <h2 className="text-base font-bold text-slate-900">Enter Details</h2>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5">Full Name *</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-3 py-2 text-xs border border-slate-200 rounded focus:outline-none focus:border-blue-600" placeholder="Monisha" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5">Email Address *</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-3 py-2 text-xs border border-slate-200 rounded focus:outline-none focus:border-blue-600" placeholder="monisha@thebotagency.com" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5">Additional Notes</label>
                <textarea rows={3} value={formData.note} onChange={(e) => setFormData({ ...formData, note: e.target.value })} className="w-full px-3 py-2 text-xs border border-slate-200 rounded focus:outline-none focus:border-blue-600 resize-none" placeholder="Share any questions..." />
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full py-2.5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 disabled:bg-blue-400 text-xs shadow-md shadow-blue-100">
                {isSubmitting ? "Logging booking to CRM..." : "Confirm Demo Booking"}
              </button>
            </form>
          )}

          {/* CONFIRMATION SCREEN */}
          {step === 'success' && (
            <div className="w-full max-w-sm mx-auto text-center space-y-4 animate-fadeIn">
              <div className="w-11 h-11 bg-green-50 text-green-500 rounded-full flex items-center justify-center text-lg mx-auto font-bold">✓</div>
              <h2 className="text-lg font-extrabold text-slate-900">You are Scheduled!</h2>
              <p className="text-xs text-slate-500">The invitation details have been successfully configured. Check <span className="font-semibold text-slate-800">{formData.email}</span> for coordination.</p>
              <div className="bg-slate-50 p-4 border border-slate-100 rounded text-left text-xs space-y-1.5 text-slate-700">
                <div><strong>Event Name:</strong> CRM Requirement Demo</div>
                <div><strong>Timeline:</strong> {selectedTime}, {monthHeaderString.split(' ')[0]} {selectedDate}, {monthHeaderString.split(' ')[1]}</div>
                <div><strong>Timezone Profile:</strong> {currentTimezone.label}</div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}