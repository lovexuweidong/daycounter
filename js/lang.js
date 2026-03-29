// ============================================
// DayCounter.pro - Language System (Simplified)
// 只处理：语言切换 + IP 自动检测
// ============================================

const translations = {
    en: {
        nav_countdown: 'Countdown',
        nav_my_events: 'My Events',
        nav_calculator: 'Calculator',
        hero_title_1: 'Track Your ',
        hero_title_2: 'Special Days',
        hero_desc: 'Count down to birthdays, anniversaries, and special moments. Simple, beautiful, free.',
        hero_btn_countdown: 'Start Countdown',
        hero_btn_saved: 'My Saved Events',
        countdown_title: '⏰ Countdown To Special Day',
        event_type_label: 'Event Type',
        countdown_event_label: 'Event Name',
        countdown_event_placeholder: 'e.g. My Birthday, Christmas...',
        countdown_date_label: 'Target Date',
        enable_reminder: '🔔 Enable Calendar Reminder',
        countdown_btn: 'Calculate & Save',
        calculate_only: 'Calculate Only',
        countdown_result_label: 'Days until',
        export_calendar: '📱 Export to Calendar',
        copy_share_link: '🔗 Copy Share Link',
        days_since_title: '📅 How Long Since...?',
        days_since_event_label: 'Event Name',
        days_since_event_placeholder: 'e.g. Started Dating...',
        days_since_date_label: 'Start Date',
        days_since_btn: 'Calculate & Save',
        days_since_result_label: 'Days since',
        tree_hole_label: '🌳 Add Tree Hole Note (Optional)',
        tree_hole_placeholder: 'Write your thoughts...',
        mood_label: 'How are you feeling?',
        my_events: '💾 My Saved Events',
        export_all: '📅 Export All',
        no_events: 'No saved events yet.',
        no_events_hint: 'Create a countdown above!',
        event_delete: 'Delete',
        event_export: '📱 Export',
        calculator_title: '🔢 Date Calculator',
        tab_diff: 'Date Difference',
        tab_age: 'Age Calculator',
        tab_add: 'Add/Subtract Days',
        diff_date1: 'First Date',
        diff_date2: 'Second Date',
        diff_btn: 'Calculate Difference',
        age_birth: 'Date of Birth',
        age_btn: 'Calculate Age',
        add_start: 'Start Date',
        add_days: 'Days to Add/Subtract',
        add_days_placeholder: 'e.g. 100 or -50',
        add_btn: 'Calculate New Date',
        features_title: 'Why Use DayCounter.pro?',
        feature1_title: 'Simple & Fast',
        feature1_desc: 'No sign-up required. Just pick a date and see results.',
        feature2_title: 'Calendar Export',
        feature2_desc: 'Export to Google Calendar, Apple Calendar, or Outlook.',
        feature3_title: '100% Private',
        feature3_desc: 'Your dates stay on your device.',
        feature4_title: 'Works Offline',
        feature4_desc: 'Add to home screen and use without internet.',
        footer_privacy: 'Privacy Policy',
        footer_terms: 'Terms of Service',
        footer_about: 'About',
        footer_faq: 'FAQ',
        footer_copyright: '© 2026 DayCounter.pro',
        cookie_text: '🍪 We use cookies to enhance your experience.',
        cookie_accept: 'Accept',
        error_select_date: 'Please select a date',
        error_enter_name: 'Please enter event name',
        error_both_dates: 'Please select both dates',
        error_birth_date: 'Please enter your birth date',
        toast_saved: '✅ Event saved!',
        toast_copied: '📋 Link copied!',
        toast_exported: '📅 Calendar exported!',
        toast_deleted: '🗑️ Event deleted'
    },
    
    zh: {
        nav_countdown: '倒计时',
        nav_my_events: '我的事件',
        nav_calculator: '计算器',
        hero_title_1: '追踪你的',
        hero_title_2: '特别日子',
        hero_desc: '倒数生日、纪念日和特别时刻。简单、美观、免费。',
        hero_btn_countdown: '开始倒计时',
        hero_btn_saved: '我的事件',
        countdown_title: '⏰ 倒数特别日子',
        event_type_label: '事件类型',
        countdown_event_label: '事件名称',
        countdown_event_placeholder: '例如：我的生日、圣诞节...',
        countdown_date_label: '目标日期',
        enable_reminder: '🔔 开启日历提醒',
        countdown_btn: '计算并保存',
        calculate_only: '仅计算',
        countdown_result_label: '距离还有',
        export_calendar: '📱 导出到日历',
        copy_share_link: '🔗 复制链接',
        days_since_title: '📅 已经多久了...?',
        days_since_event_label: '事件名称',
        days_since_event_placeholder: '例如：开始恋爱...',
        days_since_date_label: '开始日期',
        days_since_btn: '计算并保存',
        days_since_result_label: '已经过去',
        tree_hole_label: '🌳 添加树洞备注（可选）',
        tree_hole_placeholder: '写下你的想法...',
        mood_label: '你现在心情如何？',
        my_events: '💾 我的事件',
        export_all: '📅 全部导出',
        no_events: '还没有保存的事件',
        no_events_hint: '在上方创建倒计时！',
        event_delete: '删除',
        event_export: '📱 导出',
        calculator_title: '🔢 日期计算器',
        tab_diff: '日期差',
        tab_age: '年龄计算',
        tab_add: '日期加减',
        diff_date1: '第一个日期',
        diff_date2: '第二个日期',
        diff_btn: '计算差值',
        age_birth: '出生日期',
        age_btn: '计算年龄',
        add_start: '开始日期',
        add_days: '天数（加/减）',
        add_days_placeholder: '例如：100 或 -50',
        add_btn: '计算新日期',
        features_title: '为什么选择 DayCounter.pro？',
        feature1_title: '简单快速',
        feature1_desc: '无需注册。选择日期即可查看结果。',
        feature2_title: '日历导出',
        feature2_desc: '导出到 Google Calendar、Apple Calendar 或 Outlook。',
        feature3_title: '100% 隐私',
        feature3_desc: '你的日期只保存在你的设备上。',
        feature4_title: '离线可用',
        feature4_desc: '添加到主屏幕，无网也能用。',
        footer_privacy: '隐私政策',
        footer_terms: '服务条款',
        footer_about: '关于我们',
        footer_faq: '常见问题',
        footer_copyright: '© 2026 DayCounter.pro',
        cookie_text: '🍪 我们使用 Cookie 来提升体验。',
        cookie_accept: '接受',
        error_select_date: '请选择日期',
        error_enter_name: '请输入事件名称',
        error_both_dates: '请选择两个日期',
        error_birth_date: '请输入出生日期',
        toast_saved: '✅ 事件已保存！',
        toast_copied: '📋 链接已复制！',
        toast_exported: '📅 日历已导出！',
        toast_deleted: '🗑️ 事件已删除'
    },
    
    es: {
        nav_countdown: 'Cuenta Atrás',
        nav_my_events: 'Mis Eventos',
        nav_calculator: 'Calculadora',
        hero_title_1: 'Rastrea Tus ',
        hero_title_2: 'Días Especiales',
        hero_desc: 'Cuenta atrás para cumpleaños y momentos especiales. Simple, gratis.',
        hero_btn_countdown: 'Iniciar Cuenta Atrás',
        hero_btn_saved: 'Mis Eventos',
        countdown_title: '⏰ Cuenta Atrás Para Tu Día Especial',
        event_type_label: 'Tipo de Evento',
        countdown_event_label: 'Nombre del Evento',
        countdown_event_placeholder: 'ej. Mi Cumpleaños, Navidad...',
        countdown_date_label: 'Fecha Objetivo',
        enable_reminder: '🔔 Activar Recordatorio',
        countdown_btn: 'Calcular y Guardar',
        calculate_only: 'Solo Calcular',
        countdown_result_label: 'Días hasta',
        export_calendar: '📱 Exportar al Calendario',
        copy_share_link: '🔗 Copiar Enlace',
        days_since_title: '📅 ¿Cuánto Tiempo Desde...?',
        days_since_event_label: 'Nombre del Evento',
        days_since_event_placeholder: 'ej. Empezamos a Novios...',
        days_since_date_label: 'Fecha de Inicio',
        days_since_btn: 'Calcular y Guardar',
        days_since_result_label: 'Días desde',
        tree_hole_label: '🌳 Agregar Nota (Opcional)',
        tree_hole_placeholder: 'Escribe tus pensamientos...',
        mood_label: '¿Cómo te sientes?',
        my_events: '💾 Mis Eventos',
        export_all: '📅 Exportar Todo',
        no_events: 'No hay eventos guardados.',
        no_events_hint: '¡Crea un contador arriba!',
        event_delete: 'Eliminar',
        event_export: '📱 Exportar',
        calculator_title: '🔢 Calculadora de Fechas',
        tab_diff: 'Diferencia de Fechas',
        tab_age: 'Calculadora de Edad',
        tab_add: 'Sumar/Restar Días',
        diff_date1: 'Primera Fecha',
        diff_date2: 'Segunda Fecha',
        diff_btn: 'Calcular Diferencia',
        age_birth: 'Fecha de Nacimiento',
        age_btn: 'Calcular Edad',
        add_start: 'Fecha de Inicio',
        add_days: 'Días a Sumar/Restar',
        add_days_placeholder: 'ej. 100 o -50',
        add_btn: 'Calcular Nueva Fecha',
        features_title: '¿Por Qué Usar DayCounter.pro?',
        feature1_title: 'Simple y Rápido',
        feature1_desc: 'Sin registro. Selecciona una fecha y ve resultados.',
        feature2_title: 'Exportar al Calendario',
        feature2_desc: 'Exporta a Google Calendar, Apple Calendar u Outlook.',
        feature3_title: '100% Privado',
        feature3_desc: 'Tus fechas se guardan en tu dispositivo.',
        feature4_title: 'Funciona Sin Internet',
        feature4_desc: 'Añade a pantalla de inicio y usa sin conexión.',
        footer_privacy: 'Política de Privacidad',
        footer_terms: 'Términos de Servicio',
        footer_about: 'Acerca de',
        footer_faq: 'Preguntas Frecuentes',
        footer_copyright: '© 2026 DayCounter.pro',
        cookie_text: '🍪 Usamos cookies para mejorar tu experiencia.',
        cookie_accept: 'Aceptar',
        error_select_date: 'Por favor selecciona una fecha',
        error_enter_name: 'Por favor ingresa el nombre',
        error_both_dates: 'Por favor selecciona ambas fechas',
        error_birth_date: 'Por favor ingresa tu fecha de nacimiento',
        toast_saved: '✅ ¡Evento guardado!',
        toast_copied: '📋 ¡Enlace copiado!',
        toast_exported: '📅 ¡Calendario exportado!',
        toast_deleted: '🗑️ Evento eliminado'
    },
    
    ja: {
        nav_countdown: 'カウントダウン',
        nav_my_events: 'マイイベント',
        nav_calculator: '計算機',
        hero_title_1: '特別な日を',
        hero_title_2: '追跡しよう',
        hero_desc: '誕生日や記念日のカウントダウン。シンプル、美しい、免费。',
        hero_btn_countdown: 'カウントダウン開始',
        hero_btn_saved: 'マイイベント',
        countdown_title: '⏰ 特別な日へのカウントダウン',
        event_type_label: 'イベント種類',
        countdown_event_label: 'イベント名',
        countdown_event_placeholder: '例：誕生日、クリスマス...',
        countdown_date_label: '目標日',
        enable_reminder: '🔔 リマインダー設定',
        countdown_btn: '計算して保存',
        calculate_only: '計算のみ',
        countdown_result_label: '後',
        export_calendar: '📱 カレンダーにエクスポート',
        copy_share_link: '🔗 リンクをコピー',
        days_since_title: '📅 どれくらい経った...?',
        days_since_event_label: 'イベント名',
        days_since_event_placeholder: '例：付き合い始めた...',
        days_since_date_label: '開始日',
        days_since_btn: '計算して保存',
        days_since_result_label: '経過',
        tree_hole_label: '🌳 木の洞メモ（任意）',
        tree_hole_placeholder: '思いやメモを書いてください...',
        mood_label: '今の気持ちは？',
        my_events: '💾 マイイベント',
        export_all: '📅 全てエクスポート',
        no_events: '保存されたイベントはありません',
        no_events_hint: '上でカウントダウンを作成しましょう！',
        event_delete: '削除',
        event_export: '📱 エクスポート',
        calculator_title: '🔢 日付計算機',
        tab_diff: '日付の差',
        tab_age: '年齢計算',
        tab_add: '日付の加算/減算',
        diff_date1: '最初の日付',
        diff_date2: '2番目の日付',
        diff_btn: '差を計算',
        age_birth: '生年月日',
        age_btn: '年齢を計算',
        add_start: '開始日',
        add_days: '加算/減算する日数',
        add_days_placeholder: '例：100 または -50',
        add_btn: '新しい日付を計算',
        features_title: 'なぜDayCounter.proを使う？',
        feature1_title: 'シンプルで速い',
        feature1_desc: '登録不要。日付を選ぶだけで結果が表示されます。',
        feature2_title: 'カレンダーエクスポート',
        feature2_desc: 'Google、Apple、Outlookにエクスポート。',
        feature3_title: '100% プライベート',
        feature3_desc: 'あなたの日付はデバイスに保存されます。',
        feature4_title: 'オフライン対応',
        feature4_desc: 'ホーム画面に追加すれば、無くすなくても使えます。',
        footer_privacy: 'プライバシーポリシー',
        footer_terms: '利用規約',
        footer_about: '概要',
        footer_faq: 'よくある質問',
        footer_copyright: '© 2026 DayCounter.pro',
        cookie_text: '🍪 Cookieを使用して体験を向上させます。',
        cookie_accept: '承諾',
        error_select_date: '日付を選択してください',
        error_enter_name: 'イベント名を入力してください',
        error_both_dates: '両方の日付を選択してください',
        error_birth_date: '生年月日を入力してください',
        toast_saved: '✅ イベントを保存しました！',
        toast_copied: '📋 リンクをコピーしました！',
        toast_exported: '📅 カレンダーにエクスポートしました！',
        toast_deleted: '🗑️ イベントを削除しました'
    }
};

// ============ 核心函数 ============

let currentLang = 'en';

// 获取翻译
function t(key) {
    return translations[currentLang]?.[key] || translations['en'][key] || key;
}

// 应用翻译 - 核心函数
function applyTranslations(lang) {
    if (!translations[lang]) lang = 'en';
    
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // 更新选择器
    const selector = document.getElementById('langSelector');
    if (selector) selector.value = lang;
    
    // 更新所有带 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = translations[lang][key];
        if (text) el.textContent = text;
    });
    
    // 更新占位符
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const text = translations[lang][key];
        if (text) el.placeholder = text;
    });
    
    console.log('🌍 Language changed to:', lang, '-', translations[lang].hero_title_2);
}

// 语言切换 - 给 select 的 onchange 用
function changeLanguage(lang) {
    applyTranslations(lang);
}

// 通过 IP 检测语言
async function detectLanguageByIP() {
    // 1. 先检查 localStorage
    const saved = localStorage.getItem('preferredLanguage');
    if (saved && translations[saved]) {
        console.log('📱 Using saved language:', saved);
        return saved;
    }
    
    // 2. 尝试 IP 检测
    try {
        const response = await fetch('https://ipapi.co/json/', { 
            timeout: 3000,
            headers: { 'Accept': 'application/json' }
        });
        
        if (response.ok) {
            const data = await response.json();
            const country = data.country_code || data.country;
            console.log('🌍 Detected country:', country);
            
            const countryToLang = {
                // 亚洲
                'CN': 'zh', 'TW': 'zh', 'HK': 'zh', 'MO': 'zh',
                'SG': 'zh', 'MY': 'zh', 'PH': 'zh',
                'JP': 'ja', 'KR': 'ja',
                // 欧洲
                'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es',
                'CL': 'es', 'PE': 'es', 'VE': 'es', 'EC': 'es',
                'BO': 'es', 'PY': 'es', 'UY': 'es', 'GT': 'es',
                'CU': 'es', 'DO': 'es', 'PA': 'es', 'CR': 'es',
                'NI': 'es', 'HN': 'es', 'SV': 'es', 'PR': 'es',
                // 其他 → 英文
            };
            
            const lang = countryToLang[country];
            if (lang) {
                console.log('🌍 IP detected language:', lang);
                return lang;
            }
        }
    } catch (error) {
        console.log('⚠️ IP detection failed:', error.message);
    }
    
    // 3. 浏览器语言
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) {
        console.log('🌍 Using browser language:', browserLang);
        return browserLang;
    }
    
    // 4. 默认英文
    console.log('🌍 Using default language: en');
    return 'en';
}

// 初始化语言
async function initLanguage() {
    const lang = await detectLanguageByIP();
    applyTranslations(lang);
}

// ============ 暴露到全局 ============
window.t = t;
window.applyTranslations = applyTranslations;
window.changeLanguage = changeLanguage;
window.initLanguage = initLanguage;
window.detectLanguageByIP = detectLanguageByIP;
