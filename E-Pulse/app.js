// Register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        }).catch(error => {
            console.log('Service Worker registration failed:', error);
        });

    });
}

// logic or script
document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const remindersElement = document.getElementById('reminders');
    const reminderForm = document.getElementById('reminder-form');
    const reminderTimeInput = document.getElementById('reminder-time');
    const reminderTextInput = document.getElementById('reminder-text');
  
    let reminders = [];
  
    function updateTime() {
      const now = new Date();
      timeElement.textContent = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
      dateElement.textContent = now.toLocaleDateString();
    }
  
    function loadReminders() {
      remindersElement.innerHTML = '';
      reminders.forEach(reminder => {
        const reminderElement = document.createElement('div');
        reminderElement.className = 'reminder';
        reminderElement.innerHTML = `<img src="path/to/icon.png" alt="Reminder Icon"> ${reminder.time} ~ ${reminder.text}`;
        remindersElement.appendChild(reminderElement);
      });
    }
  
    function addReminder(event) {
      event.preventDefault();
      const time = reminderTimeInput.value;
      const text = reminderTextInput.value;
      reminders.push({ time, text });
      loadReminders();
      reminderForm.reset();
    }
  
    updateTime();
    setInterval(updateTime, 1000);
    reminderForm.addEventListener('submit', addReminder);
  });