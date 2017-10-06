// 1.0.8/ version 0.0.100

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('site-assets').then(cache => 
      {
        return cache.addAll([
          '/',
          '/style.css',
          '/scripts/index.js',
          '/scripts/comlink.js',
          '/scripts/messagechanneladapter.js'
        ])
      })
  )
});

self.addEventListener('fetch', e => {
  if(e.request.method === 'GET') { // we post to a server and we don't want to cache that... although we might want to do a friendly message
    e.respondWith(
      caches.match(e.request).then(response => {
        return response || fetch(e.request);
      })
    );
  }
});