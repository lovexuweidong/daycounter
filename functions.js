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
const translationsUI = {
    en: {
        hero_title_1: 'Track Your ',
        hero_title_2: 'Special Days',
        hero_desc: 'Count down to birthdays, anniversaries, and special moments. Simple, beautiful, free.',
        hero_btn_countdown: 'Start Countdown',
        hero_btn_saved: 'My Saved Events',
        countdown_title: 'Countdown To Special Day',
        days_since_title: 'How Long Since...?',
        calculator_title: 'Date Calculator',
        event_name_label: 'Event Name',
        event_name_placeholder: 'e.g. My Birthday, Christmas...',
        target_date_label: 'Target Date',
        days_until: 'Days until',
        days_since_label: 'Days since',
        my_events: 'My Saved Events',
        no_events: 'No saved events yet.',
        no_events_hint: 'Create a countdown or days since event above!',
        btn_save: 'Calculate & Save',
        btn_calc_only: 'Calculate Only',
        why_use: 'Why Use DayCounter.pro?',
        feature1_title: 'Simple & Fast',
        feature1_desc: 'No sign-up required.',
        feature2_title: 'Calendar Export',
        feature2_desc: 'Export to calendars with reminders.',
        feature3_title: '100% Private',
        feature3_desc: 'Your dates stay on your device.',
        footer_privacy: 'Privacy Policy',
        footer_terms: 'Terms of Service',
        footer_about: 'About',
        cookie_accept: 'Accept',
        cookie_decline: 'Decline',
        onboarding_title1: 'Welcome to DayCounter!',
        onboarding_desc1: 'Track your special days and never miss an anniversary again.',
        onboarding_btn1: 'Get Started →',
        onboarding_title2: 'Countdown & Days Since',
        onboarding_desc2: 'Count down or count up from memorable moments.',
        onboarding_btn2: 'Next →',
        onboarding_title3: 'Export to Calendar',
        onboarding_desc3: 'Save events with reminders.',
        onboarding_btn3: "Let's Go! 🚀",
        onboarding_skip: 'Skip',
        help: '❓ Help'
    },
    zh: {
        hero_title_1: '追踪你的',
        hero_title_2: '特别日子',
        hero_desc: '倒数生日、纪念日和特别时刻。简单、美观、免费。',
        hero_btn_countdown: '开始倒计时',
        hero_btn_saved: '我的事件',
        countdown_title: '倒数你的特别日子',
        days_since_title: '已经多久了...?',
        calculator_title: '日期计算器',
        event_name_label: '事件名称',
        event_name_placeholder: '例如：我的生日、圣诞节...',
        target_date_label: '目标日期',
        days_until: '距离还有',
        days_since_label: '已经过去',
        my_events: '我的事件',
        no_events: '还没有保存的事件。',
        no_events_hint: '在上方创建倒计时或正数日事件！',
        btn_save: '计算并保存',
        btn_calc_only: '仅计算',
        why_use: '为什么选择 DayCounter.pro？',
        feature1_title: '简单快速',
        feature1_desc: '无需注册，选择日期即可查看结果。',
        feature2_title: '日历导出',
        feature2_desc: '导出到日历并设置提醒。',
        feature3_title: '100% 隐私',
        feature3_desc: '你的日期只保存在你的设备上。',
        footer_privacy: '隐私政策',
        footer_terms: '服务条款',
        footer_about: '关于我们',
        cookie_accept: '接受',
        cookie_decline: '拒绝',
        onboarding_title1: '欢迎使用 DayCounter！',
        onboarding_desc1: '追踪你的特别日子，不再错过任何纪念日。',
        onboarding_btn1: '开始使用 →',
        onboarding_title2: '倒计时与正数日',
        onboarding_desc2: '倒数或正数纪念性时刻。',
        onboarding_btn2: '下一步 →',
        onboarding_title3: '导出到日历',
        onboarding_desc3: '保存事件并设置提醒。',
        onboarding_btn3: '开始使用！🚀',
        onboarding_skip: '跳过',
        help: '❓ 帮助'
    },
    es: {
        hero_title_1: 'Rastrea Tus ',
        hero_title_2: 'Días Especiales',
        hero_desc: 'Cuenta atrás para cumpleaños y momentos especiales. Simple y gratis.',
        hero_btn_countdown: 'Iniciar Cuenta Atrás',
        hero_btn_saved: 'Mis Eventos',
        countdown_title: 'Cuenta Atrás Para Tu Día Especial',
        days_since_title: '¿Cuánto Tiempo Desde...?',
        calculator_title: 'Calculadora de Fechas',
        event_name_label: 'Nombre del Evento',
        event_name_placeholder: 'ej. Mi Cumpleaños, Navidad...',
        target_date_label: 'Fecha Objetivo',
        days_until: 'Días hasta',
        days_since_label: 'Días desde',
        my_events: 'Mis Eventos',
        no_events: 'Aún no hay eventos guardados.',
        no_events_hint: '¡Crea un evento arriba!',
        btn_save: 'Calcular y Guardar',
        btn_calc_only: 'Solo Calcular',
        why_use: '¿Por Qué Usar DayCounter.pro?',
        feature1_title: 'Simple y Rápido',
        feature1_desc: 'Sin registro requerido.',
        feature2_title: 'Exportar a Calendario',
        feature2_desc: 'Exporta con recordatorios.',
        feature3_title: '100% Privado',
        feature3_desc: 'Tus fechas permanecen en tu dispositivo.',
        footer_privacy: 'Política de Privacidad',
        footer_terms: 'Términos de Servicio',
        footer_about: 'Acerca de',
        cookie_accept: 'Aceptar',
        cookie_decline: 'Rechazar',
        onboarding_title1: '¡Bienvenido a DayCounter!',
        onboarding_desc1: 'Rastrea tus días especiales.',
        onboarding_btn1: 'Comenzar →',
        onboarding_title2: 'Cuenta Atrás y Días Desde',
        onboarding_desc2: 'Cuenta atrás o desde momentos memorables.',
        onboarding_btn2: 'Siguiente →',
        onboarding_title3: 'Exportar a Calendario',
        onboarding_desc3: 'Guarda con recordatorios.',
        onboarding_btn3: '¡Vamos! 🚀',
        onboarding_skip: 'Omitir',
        help: '❓ Ayuda'
    },
    ja: {
        hero_title_1: '大切な日を',
        hero_title_2: 'トラック',
        hero_desc: '誕生日や特別な瞬間へのカウントダウン。シンプルで美しい。',
        hero_btn_countdown: 'カウントダウン開始',
        hero_btn_saved: 'マイイベント',
        countdown_title: '特別な日へのカウントダウン',
        days_since_title: 'あれから何日...?',
        calculator_title: '日付計算機',
        event_name_label: 'イベント名',
        event_name_placeholder: '例：私の誕生日、クリスマス...',
        target_date_label: '目標日',
        days_until: 'あと',
        days_since_label: 'から',
        my_events: 'マイイベント',
        no_events: '保存されたイベントはありません。',
        no_events_hint: '上にイベントを作成してください！',
        btn_save: '計算して保存',
        btn_calc_only: '計算のみ',
        why_use: 'なぜ DayCounter.pro を選ぶ？',
        feature1_title: 'シンプル＆高速',
        feature1_desc: '登録不要。',
        feature2_title: 'カレンダーエクスポート',
        feature2_desc: 'リマインダー付きでエクスポート。',
        feature3_title: '100% プライベート',
        feature3_desc: 'あなたの日付はデバイスに残ります。',
        footer_privacy: 'プライバシーポリシー',
        footer_terms: '利用規約',
        footer_about: '概要',
        cookie_accept: '同意する',
        cookie_decline: '拒否する',
        onboarding_title1: 'DayCounterへようこそ！',
        onboarding_desc1: '大切な日を追跡しましょう。',
        onboarding_btn1: '始める →',
        onboarding_title2: 'カウントダウンと経過日数',
        onboarding_desc2: 'カウントダウンまたは経過日数。',
        onboarding_btn2: '次へ →',
        onboarding_title3: 'カレンダーへのエクスポート',
        onboarding_desc3: 'リマインダー付きで保存。',
        onboarding_btn3: '始めよう！🚀',
        onboarding_skip: 'スキップ',
        help: '❓ ヘルプ'
    }
};

let uiLang = localStorage.getItem('preferredLanguage') || 'en';

function changeLanguage(lang) {
    applyTranslations(lang);
}

// This function is now replaced by applyTranslations in i18n.js
function applyUILanguage(lang) {
    applyTranslations(lang);
}

function applyUILanguage(lang) {
    const t = translationsUI[lang] || translationsUI['en'];
    
    // Hero section
    const heroSpan = document.querySelector('h1 .gradient-text');
    if (heroSpan) heroSpan.textContent = t.hero_title_2;
    const heroP = document.querySelector('section > h1 + p');
    if (heroP) heroP.textContent = t.hero_desc;
    
    // Section titles
    document.querySelectorAll('section h2').forEach(h2 => {
        const text = h2.textContent;
        if (text.includes('Countdown') || text.includes('倒数你的')) {
            h2.textContent = '⏰ ' + t.countdown_title;
        } else if (text.includes('How Long') || text.includes('多久')) {
            h2.textContent = '📅 ' + t.days_since_title;
        } else if (text.includes('Calculator') || text.includes('计算器')) {
            h2.textContent = '🔢 ' + t.calculator_title;
        } else if (text.includes('Why Use') || text.includes('为什么')) {
            h2.textContent = t.why_use;
        } else if (text.includes('My Saved') || text.includes('我的')) {
            h2.textContent = '💾 ' + t.my_events;
        }
    });
    
    // Labels and placeholders
    document.querySelectorAll('label').forEach(label => {
        const text = label.textContent;
        if (text.includes('Event Name')) label.textContent = t.event_name_label;
        if (text.includes('Target Date')) label.textContent = t.target_date_label;
    });
    
    document.querySelectorAll('input[type="text"]').forEach(input => {
        if (input.placeholder.includes('Birthday')) input.placeholder = t.event_name_placeholder;
    });
    
    // No events message
    const noEvents = document.querySelector('#noEventsMessage');
    if (noEvents) {
        const ps = noEvents.querySelectorAll('p');
        if (ps[0]) ps[0].textContent = t.no_events;
        if (ps[1]) ps[1].textContent = t.no_events_hint;
    }
    
    // Cookie banner buttons
    const cookieBtns = document.querySelectorAll('#cookieBanner button');
    if (cookieBtns[0]) cookieBtns[0].textContent = t.cookie_accept;
    if (cookieBtns[1]) cookieBtns[1].textContent = t.cookie_decline;
}

document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    setTimeout(() => applyUILanguage(savedLang), 500);
});
