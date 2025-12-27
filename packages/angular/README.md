# 🇵🇸 Palestine Footer - Angular

[![npm version](https://img.shields.io/npm/v/palestine-footer-angular.svg)](https://www.npmjs.com/package/palestine-footer-angular)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Angular](https://img.shields.io/badge/Angular-12%2B-red.svg)](https://angular.io/)

> تذييل احترافي للتضامن مع فلسطين - مكون Angular مع TypeScript

---

## ✨ المميزات | Features

- ✅ **Angular 12+** - دعم كامل
- ✅ **TypeScript** - مكتوب بالكامل بـ TypeScript
- ✅ **Lifecycle Hooks** - OnInit & OnDestroy
- ✅ **Input Properties** - قابل للتخصيص
- ✅ **Encapsulated Styles** - لا تعارض
- ✅ **AOT Compatible** - Ahead-of-Time Compilation

---

## 📦 التثبيت | Installation

```bash
npm install palestine-footer-angular
# or
yarn add palestine-footer-angular
```

---

## 🚀 الاستخدام | Usage

### 1. استيراد الـ Module

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PalestineFooterModule } from 'palestine-footer-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PalestineFooterModule  // أضف هنا
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

---

### 2. استخدام في Template

```html
<!-- app.component.html -->
<div class="container">
  <h1>مرحباً بك</h1>
  <p>محتوى صفحتك...</p>
</div>

<app-palestine-footer></app-palestine-footer>
```

---

### 3. مع Input Properties

```html
<app-palestine-footer
  [customYear]="2024"
  [customHostName]="'موقع فلسطين'"
  [message]="'من النهر إلى البحر'"
  [showMessage]="true"
  [backgroundColor]="'#1a1a1a'"
  [textColor]="'#f0f0f0'"
></app-palestine-footer>
```

---

## 🎨 Input Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `customYear` | `number` | `new Date().getFullYear()` | السنة |
| `customHostName` | `string` | `window.location.hostname` | اسم الموقع |
| `message` | `string` | `"نحن نقف مع..."` | الرسالة |
| `showMessage` | `boolean` | `true` | إظهار الرسالة |
| `backgroundColor` | `string` | `"#000000"` | لون الخلفية |
| `textColor` | `string` | `"#ffffff"` | لون النص |

---

## 📖 أمثلة | Examples

### Standalone Component (Angular 14+)

```typescript
// app.component.ts (Standalone)
import { Component } from '@angular/core';
import { PalestineFooterModule } from 'palestine-footer-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PalestineFooterModule],
  template: `
    <div>
      <h1>{{ title }}</h1>
      <app-palestine-footer></app-palestine-footer>
    </div>
  `
})
export class AppComponent {
  title = 'موقعي';
}
```

---

### مع Reactive Properties

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-palestine-footer
      [customYear]="currentYear"
      [customHostName]="siteName"
      [backgroundColor]="bgColor"
    ></app-palestine-footer>
  `
})
export class AppComponent {
  currentYear = 2024;
  siteName = 'موقع فلسطين';
  bgColor = '#0a0a0a';
}
```

---

## 🌐 التوافق | Compatibility

| Angular Version | Support |
|-----------------|---------|
| 12.x | ✅ |
| 13.x | ✅ |
| 14.x | ✅ |
| 15.x | ✅ |
| 16.x | ✅ |
| 17.x | ✅ |

---

## 🧪 الاختبار | Testing

```typescript
// palestine-footer.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PalestineFooterComponent } from './palestine-footer.component';

describe('PalestineFooterComponent', () => {
  let component: PalestineFooterComponent;
  let fixture: ComponentFixture<PalestineFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalestineFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalestineFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display current year', () => {
    const currentYear = new Date().getFullYear();
    expect(component.currentYear).toBe(currentYear);
  });
});
```

---

## 📂 هيكل المشروع | Project Structure

```
packages/angular/
├── src/
│   ├── lib/
│   │   ├── palestine-footer.component.ts
│   │   ├── palestine-footer.component.html
│   │   ├── palestine-footer.component.css
│   │   ├── palestine-footer.component.spec.ts
│   │   └── palestine-footer.module.ts
│   └── public-api.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🤝 المساهمة | Contributing

نرحب بجميع المساهمات! 🇵🇸

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
