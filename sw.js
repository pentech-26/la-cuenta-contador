// La Cuenta · service worker — modo offline
// Sube VERSION cada vez que publiques cambios para que los móviles se actualicen.
const VERSION = "lacuenta-v19";
const SHELL = [
  "./",
  "index.html",
  "manifest.json",
  "bg.jpg",
  "icon-192.png",
  "icon-512.png",
  "apple-touch-icon.png",
  "splash.jpg",
  "ka-ching.mp3",
  "fonts/kalam-latin-400-normal.woff2",
  "fonts/kalam-latin-700-normal.woff2",
  "fonts/caveat-latin-700-normal.woff2",
  "fonts/permanent-marker-latin-400-normal.woff2"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Páginas: primero red (para recibir actualizaciones), si no hay red, la copia guardada.
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then(r => { const c = r.clone(); caches.open(VERSION).then(x => x.put("index.html", c)); return r; })
        .catch(() => caches.match("index.html"))
    );
    return;
  }

  // Resto de archivos propios: caché primero.
  if (url.origin === location.origin) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
  }
});
