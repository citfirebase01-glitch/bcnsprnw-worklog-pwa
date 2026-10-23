// ==========================================
// sw.js - Service Worker สำหรับรองรับการติดตั้งแอป (PWA Criteria)
// ==========================================

if (typeof self !== 'undefined' && typeof self.addEventListener === 'function') {
  const CACHE_NAME = 'bcnsprnw-pwa-v1';

  // ติดตั้ง Service Worker ทันที
  self.addEventListener('install', (event) => {
    self.skipWaiting();
  });

  // เปิดใช้งานและควบคุมหน้าเว็บทันที
  self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
  });

  // รองรับการดึงข้อมูลตามมาตรฐาน PWA
  self.addEventListener('fetch', (event) => {
    // สำหรับการทำงานปกติ ส่งคำขอไปยังเครือข่าย
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request);
      })
    );
  });
}

