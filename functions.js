// ============ ICS Calendar Export ============
function generateICS(event) {
    const now = new Date();
    const uid = `${event.name}-${event.date}@daycounter.pro`;
    const dtstart = event.date.replace(/-/g, '');
    
    // Calculate reminder date
    const reminderDays = parseInt(document.getElementById('reminderDays')?.value || 7);
    const reminderDate = new Date(event.date);
    reminderDate.setDate(reminderDate.getDate() - reminderDays);
    
    const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//DayCounter.pro//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:DayCounter Events
X-WR-TIMEZONE:UTC
BEGIN:VEVENT
UID:${uid}
DTSTAMP:${now.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART;VALUE=DATE:${dtstart}
SUMMARY:${event.name} ${getEventTypeEmoji(event.type)}
DESCRIPTION:${event.name} - Tracked with DayCounter.pro
LOCATION:DayCounter.pro
STATUS:CONFIRMED
SEQUENCE:0
BEGIN:VALARM
TRIGGER:-PT${reminderDays}D
ACTION:DISPLAY
DESCRIPTION:Reminder: ${event.name}
END:VALARM
END:VEVENT
END:VCALENDAR`;
    
    return ics;
}

function exportToICS(type) {
    let event;
    if (type === 'countdown') {
        if (!currentCountdown) { alert('Please calculate first'); return; }
        event = currentCountdown;
    } else if (type === 'daysSince') {
        if (!currentDaysSince) { alert('Please calculate first'); return; }
        event = currentDaysSince;
    }
    
    const ics = generateICS(event);
    const blob = new Blob([ics], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${event.name.replace(/\s+/g, '_')}.ics`;
    a.click();
    URL.revokeObjectURL(url);
    
    showToast('📅 Calendar file downloaded!');
    
    // Save event
    if (type === 'countdown' || type === 'daysSince') {
        saveEvent(event);
    }
}

function exportAllToICS() {
    if (savedEvents.length === 0) { alert('No saved events'); return; }
    
    let ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//DayCounter.pro//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:DayCounter Events
X-WR-TIMEZONE:UTC
`;
    
    savedEvents.forEach(event => {
        const now = new Date();
        const uid = `${event.name}-${event.date}@daycounter.pro`;
        const dtstart = event.date.replace(/-/g, '');
        
        ics += `BEGIN:VEVENT
UID:${uid}
DTSTAMP:${now.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART;VALUE=DATE:${dtstart}
SUMMARY:${event.name} ${getEventTypeEmoji(event.type)}
DESCRIPTION:${event.name} - Tracked with DayCounter.pro
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
`;
    });
    
    ics += `END:VCALENDAR`;
    
    const blob = new Blob([ics], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'daycounter_events.ics';
    a.click();
    URL.revokeObjectURL(url);
    
    showToast('📅 All events exported!');
}

// ============ Save Events ============
function saveEvent(event) {
    if (!savedEvents.find(e => e.name === event.name && e.date === event.date)) {
        savedEvents.push(event);
        localStorage.setItem('daycounter_events', JSON.stringify(savedEvents));
        loadSavedEvents();
        showToast('💾 Event saved!');
    }
}

function deleteEvent(index) {
    savedEvents.splice(index, 1);
    localStorage.setItem('daycounter_events', JSON.stringify(savedEvents));
    loadSavedEvents();
    showToast('🗑️ Event deleted');
}

function loadSavedEvents() {
    const list = document.getElementById('savedEventsList');
    const noMsg = document.getElementById('noEventsMessage');
    
    if (savedEvents.length === 0) {
        list.innerHTML = '';
        noMsg.classList.remove('hidden');
        return;
    }
    
    noMsg.classList.add('hidden');
    list.innerHTML = savedEvents.map((event, idx) => `
        <div class="saved-event bg-gradient-to-r from-indigo-50 to-pink-50 rounded-xl p-4 mb-3 flex items-center justify-between">
            <div>
                <div class="font-semibold text-gray-800">${getEventTypeEmoji(event.type)} ${event.name}</div>
                <div class="text-sm text-gray-500">${new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
            </div>
            <div class="flex gap-2">
                <button onclick="exportEventToICS(${idx})" class="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm">📱</button>
                <button onclick="deleteEvent(${idx})" class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">🗑️</button>
            </div>
        </div>
    `).join('');
}

function exportEventToICS(idx) {
    const event = savedEvents[idx];
    const ics = generateICS(event);
    const blob = new Blob([ics], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${event.name.replace(/\s+/g, '_')}.ics`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('📅 Event exported!');
}

// ============ Share & Copy ============
function copyShareLink() {
    if (!currentCountdown) return;
    const link = `${window.location.origin}?event=${encodeURIComponent(currentCountdown.name)}&date=${currentCountdown.date}`;
    navigator.clipboard.writeText(link);
    showToast('🔗 Link copied!');
}

function shareDaysSince() {
    if (!currentDaysSince) return;
    const link = `${window.location.origin}?event=${encodeURIComponent(currentDaysSince.name)}&date=${currentDaysSince.date}&type=since`;
    navigator.clipboard.writeText(link);
    showToast('🔗 Link copied!');
}

// ============ Tab Switching ============
function switchTab(tab) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.add('hidden'));
    document.querySelectorAll('[id^="tab-"]').forEach(t => {
        t.classList.remove('tab-active');
        t.classList.add('text-gray-500');
    });
    document.getElementById('panel-' + tab).classList.remove('hidden');
    document.getElementById('tab-' + tab).classList.add('tab-active');
    document.getElementById('tab-' + tab).classList.remove('text-gray-500');
}

// ============ Calculators ============
function calculateDaysSinceOnly() {
    const name = document.getElementById('daysSinceName').value || 'Your Event';
    const date = document.getElementById('daysSinceDate').value;
    if (!date) { alert('Please select a date'); return; }
    
    const start = new Date(date);
    const now = new Date();
    const diff = now - start;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    document.getElementById('daysSinceResult').classList.remove('hidden');
    document.getElementById('daysSinceLabel').textContent = 'Days since ' + name;
    document.getElementById('daysSinceCount').textContent = days >= 0 ? days : 0;
    document.getElementById('daysSinceDateDisplay').textContent = start.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function calculateDiff() {
    const date1 = document.getElementById('date1').value;
    const date2 = document.getElementById('date2').value;
    if (!date1 || !date2) { alert('Please select both dates'); return; }
    
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diff = Math.abs(d2 - d1);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
    
    document.getElementById('diffResult').classList.remove('hidden');
    document.getElementById('diffDays').textContent = `${days.toLocaleString()} days`;
    document.getElementById('diffDetails').textContent = `≈ ${weeks.toLocaleString()} weeks • ${months.toLocaleString()} months • ${years.toLocaleString()} years`;
}

function calculateAge() {
    const birthDate = document.getElementById('birthDate').value;
    if (!birthDate) { alert('Please enter your birth date'); return; }
    
    const birth = new Date(birthDate);
    const now = new Date();
    
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();
    
    if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    
    const totalDays = Math.floor((now - birth) / (1000 * 60 * 60 * 24));
    
    document.getElementById('ageResult').classList.remove('hidden');
    document.getElementById('ageYears').textContent = `${years} years, ${months} months, ${days} days`;
    document.getElementById('ageDetails').textContent = `Total: ${totalDays.toLocaleString()} days lived`;
}

function addDaysToDate() {
    const startDate = document.getElementById('addStartDate').value;
    const daysToAdd = parseInt(document.getElementById('addDays').value);
    
    if (!startDate || isNaN(daysToAdd)) { alert('Please enter valid values'); return; }
    
    const start = new Date(startDate);
    const result = new Date(start);
    result.setDate(result.getDate() + daysToAdd);
    
    document.getElementById('addResult').classList.remove('hidden');
    document.getElementById('newDate').textContent = result.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('newDateDay').textContent = daysToAdd >= 0 
        ? `${daysToAdd} days after ${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`
        : `${Math.abs(daysToAdd)} days before ${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
}

// ============ Language ============
function changeLanguage(lang) {
    currentLang = lang;
    applyTranslations(lang);
    localStorage.setItem('preferredLanguage', lang);
}
