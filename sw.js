var cacheName = 'pwa-time';
var filesToCache = [
  './',
  'index.html',
  'scripts/app.js',
  'images/time.png',
];

// インストール時にキャッシュに保存
self.addEventListener('install', function(event) {
 event.waitUntil(
   caches.open(cacheName).then(function(cache) {
     return cache.addAll(filesToCache);
   })
 );
});

// ネットワークから取得できなければキャッシュから取得
// https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/?hl=ja#network-falling-back-to-cache
// ネットワークの応答時にキャッシュに保存
// https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/?hl=ja#on-network-response
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request)
    .then(function(response) {
      return caches.open(cacheName).then(function(cache) {
        cache.put(event.request, response.clone());
        return response;
      });
    })
    .catch(function() {
      return caches.match(event.request);
    })
  );
});