# 🇵🇸 Palestine Footer - Vanilla JavaScript

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Size](https://img.shields.io/badge/size-2KB-blue.svg)](https://github.com/yourusername/palestine-footer)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](https://github.com/yourusername/palestine-footer)

> تذييل احترافي للتضامن مع فلسطين - نسخة Vanilla JavaScript بدون أي dependencies

---

## ✨ المميزات | Features

- ✅ **خفيف جداً** - أقل من 2KB
- ✅ **بدون dependencies** - Pure JavaScript
- ✅ **سهل التركيب** - سطر واحد فقط
- ✅ **Responsive** - يعمل على جميع الشاشات
- ✅ **تلقائي** - يأخذ السنة واسم الموقع تلقائياً
- ✅ **خط Cairo** - من Google Fonts
- ✅ **متوافق** - يعمل على أي موقع HTML

---

## 🚀 التثبيت السريع | Quick Installation

### الطريقة 1: CDN (الأسهل)

ضع هذا الكود قبل إغلاق `</body>` مباشرة:

```html
<script src="https://cdn.jsdelivr.net/gh/Youssef-osama33/Support-Palestine-@main/packages/vanilla/src/palestine-footer.js"></script>
```

### الطريقة 2: تحميل الملف

1. حمّل الملف من: [palestine-footer.js](./src/palestine-footer.js)
2. ضعه في مجلد `js/` في موقعك
3. أضف السطر التالي قبل `</body>`:

```html
<script src="js/palestine-footer.js"></script>
```

### الطريقة 3: NPM

```bash
npm install palestine-footer-vanilla
```

---

## 📖 الاستخدام | Usage

### استخدام أساسي

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>موقعي</title>
</head>
<body>
    <!-- محتوى موقعك هنا -->
    <h1>مرحباً بك</h1>
    <p>محتوى الصفحة...</p>
    
    <!-- Palestine Footer -->
     <script src="https://cdn.jsdelivr.net/gh/Youssef-osama33/Support-Palestine-@main/packages/vanilla/src/palestine-footer.js"></script>
</body>
</html>
```

**وخلاص! 🎉** التذييل سيظهر تلقائياً في أسفل الصفحة.

---

## 🎨 معاينة | Preview

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│       جميع الحقوق محفوظة © 2026 لـ EXAMPLE.COM             │
│       • نحن نقف مع فلسطين حرة من النهر إلى البحر •          │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## ⚙️ التخصيص | Customization

### تخصيص السنة أو اسم الموقع

يمكنك تعديل الكود مباشرة في `palestine-footer.js`:

```javascript
// السطر 67-68
const currentYear = 2026; // غيّر السنة هنا
const hostName = "موقع فلسطين"; // غيّر اسم الموقع هنا
```

### تخصيص الألوان

عدّل الـ CSS في الملف:

```javascript
// السطر 22
background: #000000; // لون الخلفية

// السطر 50
background: #E4312B; // لون النقاط
```

---

## 🌐 التوافق | Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Opera 47+
- ✅ جميع المتصفحات الحديثة

---

## 📱 Responsive Design

التذييل يتكيف تلقائياً مع جميع أحجام الشاشات:

- 🖥️ Desktop (1920px+)
- 💻 Laptop (1024px - 1919px)
- 📱 Tablet (768px - 1023px)
- 📱 Mobile (< 768px)

---

## 🛠️ التطوير | Development

### متطلبات النظام

- Node.js 16+
- NPM 7+

### إعداد البيئة المحلية

```bash
# استنساخ المستودع
git clone https://github.com/Youssef-osama33/palestine-footer.git

# الانتقال للمجلد
cd palestine-footer/packages/vanilla

# تثبيت Dependencies
npm install

# Build الملفات
npm run build

# تشغيل الخادم المحلي
npm run dev
```

---

## 📂 هيكل المشروع | Project Structure

```
packages/vanilla/
├── src/
│   └── palestine-footer.js      # الملف الرئيسي
├── dist/
│   ├── palestine-footer.js      # نسخة مبنية
│   └── palestine-footer.min.js  # نسخة مضغوطة
├── examples/
│   ├── basic.html               # مثال بسيط
│   ├── custom.html              # مثال مخصص
│   └── cdn.html                 # مثال CDN
├── tests/
│   └── footer.test.js           # اختبارات
├── package.json
└── README.md
```

---

## 🧪 الاختبار | Testing

```bash
# تشغيل الاختبارات
npm test
```

---

## 🤝 المساهمة | Contributing

نرحب بجميع المساهمات! 🇵🇸

1. Fork المشروع
2. أنشئ Branch جديد (`git checkout -b feature/AmazingFeature`)
3. Commit تغييراتك (`git commit -m 'Add some AmazingFeature'`)
4. Push للـ Branch (`git push origin feature/AmazingFeature`)
5. افتح Pull Request

اقرأ [CONTRIBUTING.md](../../CONTRIBUTING.md) للمزيد من التفاصيل.

---

## 📝 Changelog

### [1.0.0] - 2024-12-25

#### Added
- ✨ إطلاق النسخة الأولى
- ✅ دعم كامل للـ Vanilla JavaScript
- 🎨 خط Cairo من Google Fonts
- 📱 Responsive design
- 🔄 Auto year detection
- 🌐 RTL support

---

## 📄 الترخيص | License

هذا المشروع مرخص تحت رخصة MIT - انظر ملف [LICENSE](../../LICENSE) للتفاصيل.

```
MIT License - يمكنك استخدام هذا الكود بحرية في أي مشروع
```

---

## 🙏 شكر وتقدير | Acknowledgments

- شكراً لكل من يدعم القضية الفلسطينية 🇵🇸
- خط Cairo من [Google Fonts](https://fonts.google.com/specimen/Cairo)
- مستوحى من حب فلسطين ❤️

---

## 🔗 روابط مفيدة | Useful Links

- [Documentation](../../docs/)
- [Examples](./examples/)
- [Issues](https://github.com/Youssef-osama33/palestine-footer/issues)
- [Discussions](https://github.com/Youssef-osama33/palestine-footer/discussions)

---

## 💬 الدعم | Support

هل تحتاج مساعدة؟

- 📖 اقرأ الـ [Documentation](../../docs/)
- 💬 افتح [Discussion](https://github.com/Youssef-osama33/Support-Palestine-/discussions)
- 🐛 أبلغ عن [Bug](https://github.com/Youssef-osama33/Support-Palestine-/issues)

---

<div align="center">

### 🇵🇸 من النهر إلى البحر، فلسطين حرة 🇵🇸

**Made with ❤️ for Palestine**

[⬆ العودة للأعلى](#-palestine-footer---vanilla-javascript)

</div>
