# พอร์ตโฟลิโอส่วนตัว

เว็บไซต์พอร์ตโฟลิโอแบบง่าย ใช้ HTML/CSS/JavaScript ธรรมดา ไม่ต้องติดตั้งอะไรเพิ่ม
พร้อมนำขึ้น GitHub Pages ได้ทันที

## โครงสร้างไฟล์

```
portfolio/
├── index.html          หน้าแรก (แนะนำตัว)
├── about.html           หน้าเกี่ยวกับฉัน (ประวัติ, timeline)
├── certificates.html    หน้าใบเกียรติบัตร
├── contact.html         หน้าติดต่อ
├── style.css            สไตล์ทั้งเว็บไซต์
├── script.js             เมนูมือถือ + ตัวกรองใบเกียรติบัตร
└── assets/certificates/  ที่เก็บรูปใบเกียรติบัตร
```

## วิธีแก้ไขเนื้อหาเป็นของคุณเอง

1. เปิดไฟล์ `index.html`, `about.html`, `certificates.html`, `contact.html`
   แล้วแก้ข้อความ "ชื่อ นามสกุล", คำแนะนำตัว, ทักษะ, ประวัติการศึกษา ให้เป็นของคุณ
2. แก้อีเมลและลิงก์โซเชียลในไฟล์ `contact.html` (ค้นหาคำว่า `youremail@example.com` และ `yourusername`)
3. เพิ่มใบเกียรติบัตรจริง:
   - นำไฟล์รูปภาพ (.jpg/.png) ไปวางในโฟลเดอร์ `assets/certificates/`
   - ในไฟล์ `certificates.html` คัดลอกบล็อก `<article class="cert-card">...</article>` เพิ่ม
     แล้วแก้ชื่อ, ผู้ออกใบรับรอง, วันที่ และแก้ `href="assets/certificates/ชื่อไฟล์ของคุณ.jpg"`

## วิธีนำขึ้น GitHub Pages

1. สร้าง repository ใหม่บน GitHub เช่น `yourusername.github.io` (ถ้าตั้งชื่อแบบนี้จะได้ URL หลักของบัญชีคุณเลย)
   หรือตั้งชื่ออื่นก็ได้ เช่น `portfolio`
2. อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้ขึ้น repository นั้น (ลากไฟล์วางบนหน้าเว็บ GitHub ได้เลย
   หรือใช้คำสั่ง git ตามด้านล่าง)
3. ไปที่ repository → **Settings** → **Pages**
4. ในหัวข้อ **Build and deployment** เลือก Source เป็น **Deploy from a branch**
   เลือก branch เป็น `main` และโฟลเดอร์เป็น `/ (root)` แล้วกด **Save**
5. รอสักครู่ (1-2 นาที) เว็บไซต์จะขึ้นที่
   `https://yourusername.github.io/` (ถ้าตั้งชื่อ repo แบบ `yourusername.github.io`)
   หรือ `https://yourusername.github.io/portfolio/` (ถ้าตั้งชื่อ repo อื่น)

### อัปโหลดด้วย git (ทางเลือก)

```bash
git init
git add .
git commit -m "first commit: portfolio site"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

## หมายเหตุ

- เว็บนี้เป็นไฟล์ static ล้วน ๆ ไม่มี backend ฟอร์มติดต่อในหน้า `contact.html`
  ใช้วิธีเปิดโปรแกรมอีเมล (mailto) ถ้าต้องการให้ฟอร์มส่งอีเมลจริงจากเว็บไซต์
  แนะนำใช้บริการฟรีอย่าง Formspree (formspree.io)
- ฟอนต์ที่ใช้ (Fraunces, Work Sans, Noto Sans/Serif Thai) โหลดจาก Google Fonts
  ผ่านอินเทอร์เน็ต ถ้าต้องการให้ใช้งานได้แบบออฟไลน์ ให้ดาวน์โหลดฟอนต์มาเก็บไว้ในโปรเจกต์เอง
