const CACHE_NAME = 'blair-admin-v1';

// Estos archivos se guardarán en el celular para que cargue súper rápido
const urlsToCache = [
  './admin.html',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Devuelve lo que está guardado o hace la petición a internet
        return response || fetch(event.request);
      })
  );
});
