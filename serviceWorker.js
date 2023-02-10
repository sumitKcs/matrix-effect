const CACHE_NAME = "matrix-cache-v1";
const urlsToCache = [
  "/matrix-effect/",
  "/matrix-effect/index.html",
  "/matrix-effect/assets/js/app.js",
  "/matrix-effect/assets/js/effect.js",
  "/matrix-effect/assets/js/symbol.js",
  "/matrix-effect/assets/css/style.css",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }

      return fetch(event.request).then(function (response) {
        if (
          !response ||
          response.status !== 200 ||
          response.type !== "basic" ||
          !(event.request.url.indexOf("http") === 0)
        ) {
          return response;
        }

        var responseToCache = response.clone();

        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});
