// ============ Integrated Entry System ============
// 日期事件 + 树洞内容整合

class IntegratedEntry {
  constructor(data) {
    this.id = data.id || Date.now();
    this.type = data.type; // 'countdown' | 'daysSince'
    this.name = data.name;
    this.date = data.date;
    this.mood = data.mood;
    this.treeHoleContent = data.treeHoleContent || '';
    this.createdAt = data.createdAt || new Date().toISOString();
    this.reminder = data.reminder || null;
  }
}

let integratedEntries = JSON.parse(localStorage.getItem('integrated_entries') || '[]');

// Save integrated entry
function saveIntegratedEntry(entry) {
  const existing = integratedEntries.findIndex(e => e.id === entry.id);
  if (existing >= 0) {
    integratedEntries[existing] = entry;
  } else {
    integratedEntries.unshift(entry);
  }
  localStorage.setItem('integrated_entries', JSON.stringify(integratedEntries));
  return entry;
}

// Get entry with tree hole content
function getEntryWithTreeHole(entryId) {
  return integratedEntries.find(e => e.id === entryId);
}

// Update tree hole content for an entry
function updateTreeHoleContent(entryId, content) {
  const entry = integratedEntries.find(e => e.id === entryId);
  if (entry) {
    entry.treeHoleContent = content;
    localStorage.setItem('integrated_entries', JSON.stringify(integratedEntries));
    return entry;
  }
  return null;
}

// Export entry with tree hole as markdown
function exportEntryAsMarkdown(entry) {
  let markdown = `# ${entry.name}\n\n`;
  markdown += `**Date:** ${new Date(entry.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}\n`;
  markdown += `**Type:** ${entry.type === 'countdown' ? 'Countdown' : 'Days Since'}\n`;
  markdown += `**Mood:** ${entry.mood ? getMoodEmoji(entry.mood) : '💭'}\n`;
  markdown += `**Created:** ${new Date(entry.createdAt).toLocaleString()}\n\n`;
  
  if (entry.treeHoleContent) {
    markdown += `## 🌳 Tree Hole\n\n${entry.treeHoleContent}\n\n`;
  }
  
  markdown += `---\n*Exported from DayCounter.pro*`;
  return markdown;
}

// Get mood emoji
function getMoodEmoji(mood) {
  const emojis = {
    happy: '😊',
    sad: '😢',
    anxious: '😰',
    angry: '😤',
    excited: '🤩',
    peaceful: '😌',
    confused: '🤔',
    love: '🥰'
  };
  return emojis[mood] || '💭';
}

// Export all entries as JSON
function exportAllEntriesAsJSON() {
  const json = JSON.stringify(integratedEntries, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `daycounter-backup-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// Import entries from JSON
function importEntriesFromJSON(jsonString) {
  try {
    const imported = JSON.parse(jsonString);
    if (Array.isArray(imported)) {
      integratedEntries = [...imported, ...integratedEntries];
      localStorage.setItem('integrated_entries', JSON.stringify(integratedEntries));
      return { success: true, count: imported.length };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Sync with phone calendar (generate ICS with tree hole as description)
function generateICSWithTreeHole(entry) {
  const now = new Date();
  const uid = `${entry.id}@daycounter.pro`;
  const dtstart = entry.date.replace(/-/g, '');
  
  let description = `${entry.name}\n`;
  if (entry.treeHoleContent) {
    description += `\nNotes:\n${entry.treeHoleContent}`;
  }
  
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
SUMMARY:${entry.name}
DESCRIPTION:${description}
LOCATION:DayCounter.pro
STATUS:CONFIRMED
SEQUENCE:0
BEGIN:VALARM
TRIGGER:-PT7D
ACTION:DISPLAY
DESCRIPTION:Reminder: ${entry.name}
END:VALARM
END:VEVENT
END:VCALENDAR`;
  
  return ics;
}

// Download ICS with tree hole content
function downloadICSWithTreeHole(entry) {
  const ics = generateICSWithTreeHole(entry);
  const blob = new Blob([ics], { type: 'text/calendar' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${entry.name.replace(/\s+/g, '_')}.ics`;
  a.click();
  URL.revokeObjectURL(url);
}

// Sync to phone notes (generate text format)
function generatePhoneNotesFormat(entry) {
  let notes = `📅 ${entry.name}\n`;
  notes += `Date: ${new Date(entry.date).toLocaleDateString()}\n`;
  notes += `Type: ${entry.type === 'countdown' ? 'Countdown' : 'Days Since'}\n`;
  notes += `Mood: ${getMoodEmoji(entry.mood)}\n`;
  
  if (entry.treeHoleContent) {
    notes += `\n🌳 Notes:\n${entry.treeHoleContent}`;
  }
  
  return notes;
}

// Copy to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('📋 Copied to clipboard');
  });
}
