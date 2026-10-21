# 📱 ระบบรายงานการปฏิบัติงานของบุคลากร (PWA Gateway)
### วิทยาลัยพยาบาลบรมราชชนนี สวรรค์ประชารักษ์ นครสวรรค์

[![PWA Ready](https://img.shields.io/badge/PWA-Ready-be123c?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![Platform](https://img.shields.io/badge/Platform-Google%20Apps%20Script-4285F4?style=for-the-badge&logo=google)](https://script.google.com)
[![Host](https://img.shields.io/badge/Hosted%20with-GitHub%20Pages-22c55e?style=for-the-badge&logo=github)](https://pages.github.com/)

เว็บแอปพลิเคชันเกตเวย์แบบ **Progressive Web App (PWA)** สำหรับเชื่อมต่อและเข้าใช้งาน **ระบบบันทึกรายละเอียดการปฏิบัติงานของบุคลากร (รายงาน TOR)** ช่วยให้ผู้ปฏิบัติงานสามารถติดตั้งระบบลงบนหน้าจอมือถือหรือแท็บเล็ตได้เหมือนแอปพลิเคชันทั่วไป ใช้งานสะดวก รวดเร็ว และแสดงผลเต็มหน้าจออย่างไร้รอยต่อ

---

## ✨ จุดเด่นและความสามารถ (Features)

* 🚀 **One-Click Install**: แถบแจ้งเตือนอัจฉริยะ ให้ผู้ใช้งานกดติดตั้งลงเครื่องได้ทันทีเพียงคลิกเดียว
* 📱 **Native App Experience**: แสดงผลแบบ Standalone เต็มหน้าจอ (ซ่อนแถบ URL และเมนูบราวเซอร์) ให้ความรู้สึกเสมือนแอปพลิเคชันจริง
* 🔄 **Real-Time Integration**: เชื่อมต่อโดยตรงกับระบบประมวลผล Google Apps Script และ Google Sheets แบบเรียลไทม์
* 💻 **Cross-Platform**: รองรับการใช้งานทุกแพลตฟอร์ม ทั้งสมาร์ตโฟน Android, iPhone (iOS), แท็บเล็ต iPad และเครื่องคอมพิวเตอร์ (Chrome / Edge)
* 🎨 **Modern & Clean UI**: ออกแบบตามอัตลักษณ์องค์กร สวยงาม ใช้งานง่าย และตอบสนองรวดเร็ว

---

## 📁 โครงสร้างโปรเจกต์ (File Structure)

```text
├── index.html        # หน้าจอหลักของ Gateway พร้อม iframe และปุ่ม One-Click Install
├── manifest.json     # ไฟล์กำหนดค่า PWA (ชื่อแอป, ไอคอน, ธีมสี, โหมดแสดงผล)
├── sw.js             # Service Worker สำหรับลงทะเบียนระบบ PWA ตามมาตรฐานสากล
└── README.md         # เอกสารแนะนำและคู่มือการใช้งานระบบ

📲 วิธีการติดตั้งใช้งาน (Installation Guide)
🤖 สำหรับ Android (Google Chrome)
เปิดลิงก์ระบบผ่าน Google Chrome
เมื่อหน้าเว็บโหลดเสร็จ จะมีแถบข้อความด้านล่างขึ้นว่า "ระบบรายงานการปฏิบัติงาน ติดตั้งใช้งานแบบแอปพลิเคชัน"
แตะปุ่ม "ติดตั้ง" เพื่อเพิ่มไอคอนแอปลงบนหน้าจอหลัก (Home Screen) ทันที
🍏 สำหรับ iPhone / iPad (Safari)
เปิดลิงก์ระบบผ่านเว็บเบราว์เซอร์ Safari
แตะปุ่ม แชร์ (Share) ⎋ (ไอคอนสี่เหลี่ยมที่มีลูกศรชี้ขึ้นที่แถบเมนูด้านล่าง)
เลื่อนลงและเลือกหัวข้อ "เพิ่มไปยังหน้าจอโฮม" (Add to Home Screen)
แตะ "เพิ่ม" (Add) ที่มุมขวาบน
💻 สำหรับคอมพิวเตอร์ (Google Chrome / Microsoft Edge)
เปิดลิงก์ระบบในเบราว์เซอร์
สังเกตที่แถบพิมพ์ URL (ด้านขวาบน) จะมีไอคอน ติดตั้งแอป หรือกดปุ่ม "ติดตั้ง" ที่แถบแจ้งเตือนด้านล่าง
🛠️ เทคโนโลยีที่ใช้ (Tech Stack)
Frontend Gateway: HTML5, CSS3 (Modern Glassmorphism), Vanilla JavaScript
PWA Engine: Web App Manifest, Service Worker API
Backend: Google Apps Script (GAS), Google Workspace
Hosting: GitHub Pages (SSL / HTTPS Secure Gateway)
🏢 พัฒนาโดย ทีมงานเทคโนโลยีและสารสนเทศ (CITCENTRE)
วิทยาลัยพยาบาลบรมราชชนนี สวรรค์ประชารักษ์ นครสวรรค์
เพื่อเพิ่มประสิทธิภาพและความสะดวกรวดเร็วในการรายงานภาระงานของบุคลากรภายในวิทยาลัย
