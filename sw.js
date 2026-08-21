const CACHE = "agrostar-logistics-v3";
// roadmap.html deliberately excluded from install-time precache — it's ~6.5MB and a single
// failed/slow fetch here used to fail the WHOLE service-worker install (blocking "Install app"
// eligibility). It still gets cached automatically the first time it's actually opened.
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c =>
      Promise.all(FILES.map(f => c.add(f).catch(err => console.error("precache failed:", f, err))))
    )
  );
  self.skipWaiting();
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  // Network-first: always tries the latest version first, falls back to cache only when offline.
  e.respondWith(
    fetch(e.request).then(resp => {
      const copy = resp.clone();
      caches.open(CACHE).then(c => { try { c.put(e.request, copy); } catch (_) {} });
      return resp;
    }).catch(() => caches.match(e.request).then(r => r || caches.match("index.html")))
  );
});
