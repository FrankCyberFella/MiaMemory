importScripts('family-photos-manifest.js');

const CACHE_NAME = 'memory-match-v16';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './family-photos-manifest.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  ...(typeof FAMILY_PHOTO_FILES !== 'undefined' ? FAMILY_PHOTO_FILES.map(f => './family-photos/' + f) : [])
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names =>
      Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
