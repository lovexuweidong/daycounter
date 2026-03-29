// ============================================
// DayCounter.pro - Data Management System
// 日期 + 树洞 + 广告 + 离线 + 日历联动
// ============================================

class DayCounterEvent {
    constructor(data) {
        this.id = data.id || Date.now();
        this.type = data.type; // 'countdown' | 'daysSince'
        this.name = data.name;
        this.date = data.date;
        this.eventType = data.eventType; // 'birthday', 'anniversary', etc.
        this.mood = data.mood || null; // 😊😢😰😤🤩😌🤔🥰
        this.treeHole = data.treeHole || ''; // 树洞内容
        this.reminder = data.reminder || 7; // 提前几天提醒
        this.createdAt = data.createdAt || new Date().toISOString();
        this.updatedAt = data.updatedAt || new Date().toISOString();
    }
}

// ============ Storage Manager ============
class StorageManager {
    constructor() {
        this.storageKey = 'daycounter_events_v2';
        this.events = this.load();
    }
    
    load() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Storage load error:', e);
            return [];
        }
    }
    
    save() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.events));
            return true;
        } catch (e) {
            console.error('Storage save error:', e);
            return false;
        }
    }
    
    add(event) {
        this.events.unshift(event);
        this.save();
        return event;
    }
    
    update(id, data) {
        const idx = this.events.findIndex(e => e.id === id);
        if (idx >= 0) {
            this.events[idx] = { ...this.events[idx], ...data, updatedAt: new Date().toISOString() };
            this.save();
            return this.events[idx];
        }
        return null;
    }
    
    delete(id) {
        this.events = this.events.filter(e => e.id !== id);
        this.save();
    }
    
    getAll() {
        return this.events;
    }
    
    getById(id) {
        return this.events.find(e => e.id === id);
    }
    
    // Export as JSON
    exportJSON() {
        const json = JSON.stringify(this.events, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `daycounter-backup-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }
    
    // Import from JSON
    importJSON(jsonString) {
        try {
            const imported = JSON.parse(jsonString);
            if (Array.isArray(imported)) {
                this.events = [...imported, ...this.events];
                this.save();
                return { success: true, count: imported.length };
            }
        } catch (e) {
            return { success: false, error: e.message };
        }
    }
}

// ============ ICS Calendar Export ============
class ICSExporter {
    static generateICS(event) {
        const now = new Date();
        const uid = `${event.id}@daycounter.pro`;
        const dtstart = event.date.replace(/-/g, '');
        
        let description = `${event.name}\n`;
        if (event.treeHole) {
            description += `\n🌳 Note:\n${event.treeHole}`;
        }
        description += `\n\nTracked with DayCounter.pro`;
        
        const reminderDays = event.reminder || 7;
        
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
SUMMARY:${event.name}
DESCRIPTION:${description}
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
    
    static download(event) {
        const ics = this.generateICS(event);
        const blob = new Blob([ics], { type: 'text/calendar' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${event.name.replace(/\s+/g, '_')}.ics`;
        a.click();
        URL.revokeObjectURL(url);
    }
    
    static downloadAll(events) {
        let ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//DayCounter.pro//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:DayCounter Events
X-WR-TIMEZONE:UTC
`;
        
        events.forEach(event => {
            const now = new Date();
            const uid = `${event.id}@daycounter.pro`;
            const dtstart = event.date.replace(/-/g, '');
            
            let description = `${event.name}`;
            if (event.treeHole) {
                description += `\n\n🌳 Note:\n${event.treeHole}`;
            }
            
            ics += `BEGIN:VEVENT
UID:${uid}
DTSTAMP:${now.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART;VALUE=DATE:${dtstart}
SUMMARY:${event.name}
DESCRIPTION:${description}
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
        a.download = `daycounter-all-${new Date().toISOString().split('T')[0]}.ics`;
        a.click();
        URL.revokeObjectURL(url);
    }
}

// ============ PWA Install ============
class PWAManager {
    static async init() {
        if ('serviceWorker' in navigator) {
            try {
                await navigator.serviceWorker.register('/sw.js');
                console.log('✅ Service Worker registered');
            } catch (e) {
                console.log('SW registration failed:', e);
            }
        }
        
        // Install prompt
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            const btn = document.createElement('button');
            btn.innerHTML = '📱 Add to Home Screen';
            btn.style.cssText = `
                position: fixed;
                bottom: 100px;
                right: 20px;
                background: linear-gradient(135deg, #6366f1, #ec4899);
                color: white;
                padding: 12px 20px;
                border: none;
                border-radius: 50px;
                font-weight: 600;
                cursor: pointer;
                z-index: 9999;
                box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
            `;
            
            btn.addEventListener('click', () => {
                e.prompt();
                e.userChoice.then(result => {
                    if (result.outcome === 'accepted') {
                        showToast(t('toast_install_pwa'));
                    }
                    btn.remove();
                });
            });
            
            document.body.appendChild(btn);
        });
    }
}

// ============ Utilities ============
function showToast(message) {
    const toast = document.getElementById('toast') || createToast();
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3000);
}

function createToast() {
    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #6366f1;
        color: white;
        padding: 12px 24px;
        border-radius: 50px;
        z-index: 9999;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    `;
    document.body.appendChild(toast);
    return toast;
}

function calculateDays(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diff = Math.floor((d2 - d1) / (1000 * 60 * 60 * 24));
    return diff;
}

function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// ============ Global Instances ============
const storage = new StorageManager();
const icsExporter = ICSExporter;
const pwaManager = PWAManager;

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    await initLanguage();
    await pwaManager.init();
});

// Expose
window.storage = storage;
window.icsExporter = icsExporter;
window.DayCounterEvent = DayCounterEvent;
window.showToast = showToast;
window.calculateDays = calculateDays;
window.formatDate = formatDate;
