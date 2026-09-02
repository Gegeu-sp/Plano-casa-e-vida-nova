const CACHE_NAME = 'argeu-mayara-shell-v2';
const SHELL_URLS = [
  './',
  './index.html',
  './dashboard.html',
  './manifest.json',
  './assets/capa-argeu-mayara.jpg',
  './assets/icon-192.png',
  './assets/icon-512.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names => Promise.all(
      names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const isPage = event.request.mode === 'navigate' || event.request.destination === 'document';
  if (isPage) {
    // Páginas HTML: busca sempre a versão mais nova na rede primeiro,
    // só cai pro cache se estiver offline — assim atualizações do site
    // chegam na hora, em vez de ficar presas numa cópia antiga.
    event.respondWith(
      fetch(event.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return res;
      }).catch(() => caches.match(event.request))
    );
    return;
  }
  // Demais arquivos (imagens, ícones, manifest): cache primeiro, já que
  // raramente mudam — mais rápido e funciona offline.
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return res;
    }).catch(() => cached))
  );
});
