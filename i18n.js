// Multi-language Support System
const translations = {
    en: {
        // Header
        brand: 'DayCounter.pro',
        nav_countdown: 'Countdown',
        nav_days_since: 'Days Since',
        nav_calculator: 'Calculator',
        nav_my_events: 'My Events',
        nav_privacy: 'Privacy',
        
        // Hero
        hero_title_1: 'Track Your ',
        hero_title_2: 'Special Days',
        hero_desc: 'Count down to birthdays, anniversaries, and special moments. Or count up from memorable dates. Simple, beautiful, free.',
        hero_btn_countdown: 'Start Countdown',
        hero_btn_days_since: 'My Saved Events',
        
        // Countdown Section
        countdown_title: '⏰ Countdown To Your Special Day',
        countdown_event_label: 'Event Name',
        countdown_event_placeholder: 'e.g. My Birthday, Wedding Day...',
        countdown_date_label: 'Target Date',
        countdown_btn: 'Calculate & Save',
        countdown_result_label: 'Days until your event',
        event_type_label: 'Event Type',
        enable_reminder: '🔔 Enable Calendar Reminder',
        calculate_only: 'Calculate Only',
        export_calendar: '📱 Export to Calendar',
        copy_share_link: '🔗 Copy Share Link',
        
        // Days Since Section
        days_since_title: '📅 How Long Since...?',
        days_since_event_label: 'Event Name',
        days_since_event_placeholder: 'e.g. Started Dating, Quit Smoking...',
        days_since_date_label: 'Start Date',
        days_since_btn: 'Calculate & Save',
        days_since_result_label: 'Days since',
        
        // Saved Events
        my_events: '💾 My Saved Events',
        export_all_calendar: '📅 Export All to Calendar',
        no_events: 'No saved events yet.',
        no_events_hint: 'Create a countdown or days since event above!',
        
        // Calculator Section
        calculator_title: '🔢 Date Calculator',
        tab_diff: 'Date Difference',
        tab_age: 'Age Calculator',
        tab_add: 'Add/Subtract Days',
        
        // Date Diff
        diff_date1_label: 'First Date',
        diff_date2_label: 'Second Date',
        diff_btn: 'Calculate Difference',
        diff_result_prefix: 'days',
        diff_details_prefix: '≈',
        
        // Age Calculator
        age_birth_label: 'Date of Birth',
        age_btn: 'Calculate Age',
        age_result_prefix: 'years',
        age_total_prefix: 'Total:',
        age_total_suffix: 'days lived',
        
        // Add Days
        add_start_label: 'Start Date',
        add_days_label: 'Days to Add/Subtract',
        add_days_placeholder: 'e.g. 100 or -50',
        add_btn: 'Calculate New Date',
        add_days_after: 'days after',
        add_days_before: 'days before',
        
        // Features
        features_title: 'Why Use DayCounter.pro?',
        feature1_title: 'Simple & Fast',
        feature1_desc: 'No sign-up required. Just pick a date and see results instantly.',
        feature2_title: 'Calendar Export',
        feature2_desc: 'Export events to Google Calendar, Apple Calendar, or Outlook with reminders.',
        feature3_title: '100% Private',
        feature3_desc: 'Your dates stay on your device. We don\'t store anything.',
        
        // Footer
        footer_privacy: 'Privacy Policy',
        footer_terms: 'Terms of Service',
        footer_about: 'About',
        footer_copyright: '© 2026 DayCounter.pro. All rights reserved.',
        
        // Cookie Banner
        cookie_text: '🍪 We use cookies to enhance your experience. By continuing, you agree to our ',
        cookie_link: 'Privacy Policy',
        cookie_accept: 'Accept',
        cookie_decline: 'Decline',
        
        // Errors
        error_select_date: 'Please select a date',
        error_both_dates: 'Please select both dates',
        error_birth_date: 'Please enter your birth date',
        error_valid_input: 'Please enter a valid date and number of days'
    },
    
    zh: {
        // Header
        brand: 'DayCounter.pro',
        nav_countdown: '倒计时',
        nav_days_since: '正数日',
        nav_calculator: '计算器',
        nav_privacy: '隐私政策',
        
        // Hero
        hero_title_1: '追踪你的',
        hero_title_2: '特别日子',
        hero_desc: '倒数生日、纪念日和特别时刻，或正数纪念日。简单、美观、免费。',
        hero_btn_countdown: '开始倒计时',
        hero_btn_days_since: '正数日计算',
        
        // Countdown Section
        countdown_title: '⏰ 倒数你的特别日子',
        countdown_event_label: '事件名称',
        countdown_event_placeholder: '例如：我的生日、结婚纪念日...',
        countdown_date_label: '目标日期',
        countdown_btn: '计算倒计时',
        countdown_result_label: '距离你的事件还有',
        
        // Days Since Section
        days_since_title: '📅 已经多久了...？',
        days_since_event_label: '事件名称',
        days_since_event_placeholder: '例如：开始恋爱、戒烟...',
        days_since_date_label: '开始日期',
        days_since_btn: '计算天数',
        days_since_result_label: '已经',
        
        // Calculator Section
        calculator_title: '🔢 日期计算器',
        tab_diff: '日期差计算',
        tab_age: '年龄计算器',
        tab_add: '日期加减',
        
        // Date Diff
        diff_date1_label: '第一个日期',
        diff_date2_label: '第二个日期',
        diff_btn: '计算差值',
        diff_result_prefix: '天',
        diff_details_prefix: '约',
        
        // Age Calculator
        age_birth_label: '出生日期',
        age_btn: '计算年龄',
        age_result_prefix: '岁',
        age_total_prefix: '共',
        age_total_suffix: '天',
        
        // Add Days
        add_start_label: '开始日期',
        add_days_label: '天数（加/减）',
        add_days_placeholder: '例如：100 或 -50',
        add_btn: '计算新日期',
        add_days_after: '天之后',
        add_days_before: '天之前',
        
        // Features
        features_title: '为什么选择 DayCounter.pro？',
        feature1_title: '简单快速',
        feature1_desc: '无需注册。选择日期即可立即查看结果。',
        feature2_title: '全平台适配',
        feature2_desc: '手机、平板、电脑完美适配。可添加到主屏幕！',
        feature3_title: '100% 隐私',
        feature3_desc: '你的日期只保存在你的设备上。我们不存储任何数据。',
        
        // Footer
        footer_privacy: '隐私政策',
        footer_terms: '服务条款',
        footer_about: '关于我们',
        footer_copyright: '© 2026 DayCounter.pro 保留所有权利。',
        
        // Cookie Banner
        cookie_text: '🍪 我们使用 Cookie 来提升您的体验。继续使用即表示您同意我们的',
        cookie_link: '隐私政策',
        cookie_accept: '接受',
        cookie_decline: '拒绝',
        
        // Errors
        error_select_date: '请选择日期',
        error_both_dates: '请选择两个日期',
        error_birth_date: '请输入出生日期',
        error_valid_input: '请输入有效的日期和天数'
    },
    
    es: {
        // Header
        brand: 'DayCounter.pro',
        nav_countdown: 'Cuenta Atrás',
        nav_days_since: 'Días Desde',
        nav_calculator: 'Calculadora',
        nav_privacy: 'Privacidad',
        
        // Hero
        hero_title_1: 'Rastrea Tus ',
        hero_title_2: 'Días Especiales',
        hero_desc: 'Cuenta atrás para cumpleaños, aniversarios y momentos especiales. O cuenta desde fechas memorables. Simple, hermoso, gratis.',
        hero_btn_countdown: 'Iniciar Cuenta Atrás',
        hero_btn_days_since: 'Días Desde',
        
        // Countdown Section
        countdown_title: '⏰ Cuenta Atrás Para Tu Día Especial',
        countdown_event_label: 'Nombre del Evento',
        countdown_event_placeholder: 'ej. Mi Cumpleaños, Día de la Boda...',
        countdown_date_label: 'Fecha Objetivo',
        countdown_btn: 'Calcular Cuenta Atrás',
        countdown_result_label: 'Días hasta tu evento',
        
        // Days Since Section
        days_since_title: '📅 ¿Cuánto Tiempo Desde...?',
        days_since_event_label: 'Nombre del Evento',
        days_since_event_placeholder: 'ej. Empezamos a Noviazgo, Dejé de Fumar...',
        days_since_date_label: 'Fecha de Inicio',
        days_since_btn: 'Calcular Días',
        days_since_result_label: 'Días desde',
        
        // Calculator Section
        calculator_title: '🔢 Calculadora de Fechas',
        tab_diff: 'Diferencia de Fechas',
        tab_age: 'Calculadora de Edad',
        tab_add: 'Sumar/Restar Días',
        
        // Date Diff
        diff_date1_label: 'Primera Fecha',
        diff_date2_label: 'Segunda Fecha',
        diff_btn: 'Calcular Diferencia',
        diff_result_prefix: 'días',
        diff_details_prefix: '≈',
        
        // Age Calculator
        age_birth_label: 'Fecha de Nacimiento',
        age_btn: 'Calcular Edad',
        age_result_prefix: 'años',
        age_total_prefix: 'Total:',
        age_total_suffix: 'días vividos',
        
        // Add Days
        add_start_label: 'Fecha de Inicio',
        add_days_label: 'Días a Sumar/Restar',
        add_days_placeholder: 'ej. 100 o -50',
        add_btn: 'Calcular Nueva Fecha',
        add_days_after: 'días después',
        add_days_before: 'días antes',
        
        // Features
        features_title: '¿Por Qué Usar DayCounter.pro?',
        feature1_title: 'Simple y Rápido',
        feature1_desc: 'Sin registro requerido. Solo elige una fecha y ve resultados al instante.',
        feature2_title: 'Funciona en Todas Partes',
        feature2_desc: 'Perfecto en teléfono, tablet o escritorio. ¡Guarda en tu pantalla de inicio!',
        feature3_title: '100% Privado',
        feature3_desc: 'Tus fechas permanecen en tu dispositivo. No almacenamos nada.',
        
        // Footer
        footer_privacy: 'Política de Privacidad',
        footer_terms: 'Términos de Servicio',
        footer_about: 'Acerca de',
        footer_copyright: '© 2026 DayCounter.pro. Todos los derechos reservados.',
        
        // Cookie Banner
        cookie_text: '🍪 Usamos cookies para mejorar tu experiencia. Al continuar, aceptas nuestra ',
        cookie_link: 'Política de Privacidad',
        cookie_accept: 'Aceptar',
        cookie_decline: 'Rechazar',
        
        // Errors
        error_select_date: 'Por favor selecciona una fecha',
        error_both_dates: 'Por favor selecciona ambas fechas',
        error_birth_date: 'Por favor ingresa tu fecha de nacimiento',
        error_valid_input: 'Por favor ingresa una fecha y número de días válidos'
    },
    
    ja: {
        // Header
        brand: 'DayCounter.pro',
        nav_countdown: 'カウントダウン',
        nav_days_since: '経過日数',
        nav_calculator: '計算機',
        nav_privacy: 'プライバシー',
        
        // Hero
        hero_title_1: '大切な日を',
        hero_title_2: 'トラック',
        hero_desc: '誕生日、記念日、特別な瞬間へのカウントダウン。または思い出の日からの経過日数。シンプルで、美しく、無料。',
        hero_btn_countdown: 'カウントダウン開始',
        hero_btn_days_since: '経過日数',
        
        // Countdown Section
        countdown_title: '⏰ 特別な日へのカウントダウン',
        countdown_event_label: 'イベント名',
        countdown_event_placeholder: '例：私の誕生日、結婚式...',
        countdown_date_label: '目標日',
        countdown_btn: 'カウントダウン計算',
        countdown_result_label: 'あなたのイベントまで',
        
        // Days Since Section
        days_since_title: '📅 あれから何日...？',
        days_since_event_label: 'イベント名',
        days_since_event_placeholder: '例：付き合い始めた日、禁煙...',
        days_since_date_label: '開始日',
        days_since_btn: '日数を計算',
        days_since_result_label: 'から',
        
        // Calculator Section
        calculator_title: '🔢 日付計算機',
        tab_diff: '日付の差',
        tab_age: '年齢計算機',
        tab_add: '日数の加減',
        
        // Date Diff
        diff_date1_label: '最初の日付',
        diff_date2_label: '2番目の日付',
        diff_btn: '差を計算',
        diff_result_prefix: '日',
        diff_details_prefix: '約',
        
        // Age Calculator
        age_birth_label: '生年月日',
        age_btn: '年齢を計算',
        age_result_prefix: '歳',
        age_total_prefix: '合計',
        age_total_suffix: '日',
        
        // Add Days
        add_start_label: '開始日',
        add_days_label: '加減する日数',
        add_days_placeholder: '例：100 または -50',
        add_btn: '新しい日付を計算',
        add_days_after: '日後',
        add_days_before: '日前',
        
        // Features
        features_title: 'なぜ DayCounter.pro を選ぶ？',
        feature1_title: 'シンプル＆高速',
        feature1_desc: '登録不要。日付を選ぶだけで即座に結果が表示されます。',
        feature2_title: 'どこでも動作',
        feature2_desc: 'スマホ、タブレット、デスクトップで完璧に動作。ホーム画面に保存！',
        feature3_title: '100% プライベート',
        feature3_desc: 'あなたの日付はデバイスに残ります。一切保存しません。',
        
        // Footer
        footer_privacy: 'プライバシーポリシー',
        footer_terms: '利用規約',
        footer_about: '概要',
        footer_copyright: '© 2026 DayCounter.pro 全著作権所有。',
        
        // Cookie Banner
        cookie_text: '🍪 当サイトは体験向上のためにCookieを使用しています。継続することで、',
        cookie_link: 'プライバシーポリシー',
        cookie_accept: '同意する',
        cookie_decline: '拒否する',
        
        // Errors
        error_select_date: '日付を選択してください',
        error_both_dates: '両方の日付を選択してください',
        error_birth_date: '生年月日を入力してください',
        error_valid_input: '有効な日付と日数を入力してください'
    }
};

// Language Detection
function detectLanguage() {
    // 1. Check URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && translations[langParam]) {
        return langParam;
    }
    
    // 2. Check localStorage
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        return savedLang;
    }
    
    // 3. Check domain
    const hostname = window.location.hostname;
    if (hostname.includes('.cn') || hostname.includes('.com.cn')) {
        return 'zh';
    }
    if (hostname.includes('.es') || hostname.includes('.mx') || hostname.includes('.ar')) {
        return 'es';
    }
    if (hostname.includes('.jp') || hostname.includes('.co.jp')) {
        return 'ja';
    }
    
    // 4. Check browser language
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0];
    if (translations[langCode]) {
        return langCode;
    }
    
    // 5. Default to English
    return 'en';
}

// Apply Translations
function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });
    
    // Update specific elements
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });
    
    // Save preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Get Translation
function t(key, lang = currentLang) {
    return translations[lang]?.[key] || translations['en'][key] || key;
}

// Current Language
let currentLang = 'en';
let uiLang = 'en';

// Alias for compatibility
const translationsUI = translations;

// Detect language from localStorage, URL, or browser
function detectLanguage() {
    // Check URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('lang')) {
        const lang = urlParams.get('lang');
        if (translations[lang]) return lang;
    }
    
    // Check localStorage
    const saved = localStorage.getItem('preferredLanguage');
    if (saved && translations[saved]) return saved;
    
    // Check browser language
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) return browserLang;
    
    return 'en';
}

// Apply translations to UI - THIS IS THE KEY FUNCTION
function applyTranslations(lang) {
    currentLang = lang;
    uiLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    const t = translations[lang] || translations['en'];
    
    // Update language selector
    const selector = document.getElementById('langSelector');
    if (selector) {
        selector.value = lang;
    }
    
    // Update all text elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.textContent = t[key];
        }
    });
    
    // Update placeholders with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) {
            el.placeholder = t[key];
        }
    });
    
    console.log('Language changed to:', lang);
}

// Expose to global scope for inline onchange handlers
window.changeLanguage = applyTranslations;
window.applyTranslations = applyTranslations;
