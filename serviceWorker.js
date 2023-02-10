const CACHE_NAME = "Matrix-cache-v1";
const urlsToCache = [
  "/canvas-animation-effects/",
  "/canvas-animation-effects/index.html",
  "/canvas-animation-effects/aseets/js/app.js",
  "/canvas-animation-effects/aseets/js/effect.js",
  "/canvas-animation-effects/aseets/js/symbol.js",
  "/canvas-animation-effects/aseets/css/sytyle.css",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("cache opened");
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
