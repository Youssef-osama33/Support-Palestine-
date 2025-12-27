# 🇵🇸 Palestine Footer - Vue 3

[![npm version](https://img.shields.io/npm/v/palestine-footer-vue.svg)](https://www.npmjs.com/package/palestine-footer-vue)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-brightgreen.svg)](https://vuejs.org/)

> تذييل احترافي للتضامن مع فلسطين - مكون Vue 3 مع Composition API

---

## ✨ المميزات | Features

- ✅ **Vue 3 Ready** - Composition API
- ✅ **TypeScript** - دعم كامل
- ✅ **SFC** - Single File Component
- ✅ **Reactive** - Props reactive
- ✅ **Scoped Styles** - لا تعارض في الأنماط
- ✅ **SSR Compatible** - يعمل مع Nuxt
- ✅ **Lightweight** - أقل من 3KB

---

## 📦 التثبيت | Installation

```bash
npm install palestine-footer-vue
# or
yarn add palestine-footer-vue
# or
pnpm add palestine-footer-vue
```

---

## 🚀 الاستخدام | Usage

### استخدام أساسي

```vue
<template>
  <div id="app">
    <h1>مرحباً بك</h1>
    <p>محتوى صفحتك...</p>
    
    <PalestineFooter />
  </div>
</template>

<script setup>
import PalestineFooter from 'palestine-footer-vue';
</script>
```

---

### مع Props

```vue
<template>
  <div>
    <YourContent />
    
    <PalestineFooter 
      :year="2024"
      hostName="موقع فلسطين"
      message="من النهر إلى البحر"
      backgroundColor="#1a1a1a"
      textColor="#ffffff"
    />
  </div>
</template>

<script setup>
import PalestineFooter from 'palestine-footer-vue';
</script>
```

---

## 🎨 Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `year` | `Number` | `new Date().getFullYear()` | السنة |
| `hostName` | `String` | `window.location.hostname` | اسم الموقع |
| `message` | `String` | `"نحن نقف مع..."` | الرسالة |
| `showMessage` | `Boolean` | `true` | إظهار الرسالة |
| `backgroundColor` | `String` | `"#000000"` | لون الخلفية |
| `textColor` | `String` | `"#ffffff"` | لون النص |

---

## 📖 أمثلة | Examples

### مع Nuxt 3

```vue
<!-- app.vue -->
<template>
  <div>
    <NuxtPage />
    <PalestineFooter />
  </div>
</template>

<script setup>
import PalestineFooter from 'palestine-footer-vue';
</script>
```

---

### تخصيص كامل

```vue
<template>
  <PalestineFooter 
    :year="2024"
    hostName="Palestine Site"
    message="Free Palestine 🇵🇸"
    backgroundColor="#0a0a0a"
    textColor="#f0f0f0"
    :showMessage="true"
  />
</template>
```

---

## 🌐 التوافق | Compatibility

- ✅ Vue 3.0+
- ✅ Nuxt 3+
- ✅ Vite
- ✅ Webpack 5

---

## 📄 الترخيص | License

MIT License

---

## 🔗 الروابط | Links

- [GitHub](https://github.com/Youssef-osama33/Support-Palestine-)
- [Issues](https://github.com/Youssef-osama33/Support-Palestine-/issues)

---

<div align="center">

### 🇵🇸 من النهر إلى البحر، فلسطين حرة 🇵🇸

</div>
