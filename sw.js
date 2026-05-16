// ─────────────────────────────────────────────────────
//  Learn Hub Service Worker
//  每次更新内容后，将 CACHE_VERSION 改成新版本号
//  例如 'v2'、'v3'，这样用户下次访问会自动拉取新内容
// ─────────────────────────────────────────────────────
const CACHE_VERSION = 'v1';
const CACHE_NAME = `learnhub-${CACHE_VERSION}`;

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/main.css',
  './js/i18n.js',
  './icons/icon.svg',
  './icons/icon-maskable.svg',
  './modules/ml-basics/index.html',
  './modules/hanoi/index.html',
  './modules/japanese-travel/index.html',
];

// ── 安装：预缓存所有页面和资源 ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ── 激活：清除旧版本缓存 ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ── 请求拦截：优先从缓存返回，没有再联网 ──
self.addEventListener('fetch', event => {
  // 只处理 GET 请求
  if (event.request.method !== 'GET') return;
  // 跳过 chrome-extension 等非 http(s) 请求
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      // 未缓存资源联网获取，同时存入缓存备用
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      });
    })
  );
});
