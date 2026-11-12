/* Bang Bang Kitchen service worker: offline-first app shell. Bump VERSION on every release. */
const VERSION = 'bbk-v1.2.0';
// OCR / PDF libraries (~15 MB) are not precached: they are cached on first scan in a separate,
// long-lived cache so app updates do not force a re-download. Bump OCR_CACHE only when vendor/ changes.
const OCR_CACHE = 'bbk-ocr-v1';
const ASSETS = [
  './', './index.html', './styles.css', './app.js', './manifest.webmanifest',
  './icons/icon.svg', './icons/icon-192.png', './icons/icon-512.png',
  './icons/maskable-192.png', './icons/maskable-512.png',
  './icons/apple-touch-icon.png', './icons/favicon-32.png'
];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION && k !== OCR_CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if (new URL(req.url).pathname.includes('/vendor/')) {
    // Cache first for the big OCR assets; fetch once, then serve offline.
    e.respondWith(caches.open(OCR_CACHE).then(async (cache) => {
      const hit = await cache.match(req, { ignoreSearch: true });
      if (hit) return hit;
      const res = await fetch(req);
      if (res && res.ok && res.type === 'basic') cache.put(req, res.clone());
      return res;
    }));
    return;
  }
  // Cache first, then refresh the cache in the background (stale-while-revalidate).
  e.respondWith(
    caches.open(VERSION).then(async (cache) => {
      const key = req.mode === 'navigate' ? './index.html' : req;
      const cached = await cache.match(key, { ignoreSearch: true });
      const network = fetch(req).then((res) => {
        if (res && res.ok && res.type === 'basic') cache.put(key, res.clone());
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
