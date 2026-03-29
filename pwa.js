// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered:', registration.scope);
      })
      .catch(error => {
        console.log('SW registration failed:', error);
      });
  });
}

// Install PWA prompt handling
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  
  // Create floating button
  const btn = document.createElement('button');
  btn.innerHTML = '📱 Add to Home Screen';
  btn.style.cssText = 'position:fixed;bottom:100px;right:20px;background:linear-gradient(135deg,#6366f1,#ec4899);color:white;padding:12px 20px;border:none;border-radius:50px;font-weight:600;cursor:pointer;z-index:9999;box-shadow:0 4px 15px rgba(99,102,241,0.4);';
  
  btn.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted A2HS');
      }
      btn.remove();
      deferredPrompt = null;
    });
  });
  
  document.body.appendChild(btn);
});
