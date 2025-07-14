self.addEventListener("install", (event) => {
  console.log("Service Worker установлен");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker активирован");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
