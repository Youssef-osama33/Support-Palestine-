/**
 * Palestine Footer Component for Angular
 * Version: 1.0.0
 * Author: Yusuf Osama
 * License: MIT
 */

import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-palestine-footer',
  templateUrl: './palestine-footer.component.html',
  styleUrls: ['./palestine-footer.component.css']
})
export class PalestineFooterComponent implements OnInit, OnDestroy {
  /** السنة - إذا لم يتم تحديدها، سيتم استخدام السنة الحالية */
  @Input() customYear?: number;
  
  /** اسم الموقع - إذا لم يتم تحديده، سيتم استخدام hostname */
  @Input() customHostName?: string;
  
  /** الرسالة المخصصة */
  @Input() message?: string;
  
  /** إظهار/إخفاء الرسالة */
  @Input() showMessage: boolean = true;
  
  /** لون الخلفية */
  @Input() backgroundColor: string = '#000000';
  
  /** لون النص */
  @Input() textColor: string = '#ffffff';

  currentYear: number;
  hostName: string;
  displayMessage: string;
  private fontLink: HTMLLinkElement | null = null;

  constructor() {
    this.currentYear = new Date().getFullYear();
    this.hostName = 'موقعنا';
    this.displayMessage = 'نحن نقف مع فلسطين حرة من النهر إلى البحر';
  }

  ngOnInit(): void {
    // تعيين السنة
    if (this.customYear) {
      this.currentYear = this.customYear;
    }

    // تعيين اسم الموقع
    if (this.customHostName) {
      this.hostName = this.customHostName;
    } else if (typeof window !== 'undefined') {
      this.hostName = window.location.hostname || 'موقعنا';
    }

    // تعيين الرسالة
    if (this.message) {
      this.displayMessage = this.message;
    }

    // تحميل خط Cairo
    this.fontLink = document.createElement('link');
    this.fontLink.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap';
    this.fontLink.rel = 'stylesheet';
    this.fontLink.id = 'palestine-footer-font-angular';

    if (!document.getElementById('palestine-footer-font-angular')) {
      document.head.appendChild(this.fontLink);
    }
  }

  ngOnDestroy(): void {
    // Cleanup - إزالة الخط عند destroy
    if (this.fontLink && document.head.contains(this.fontLink)) {
      document.head.removeChild(this.fontLink);
    }
  }

  get upperHostName(): string {
    return this.hostName.toUpperCase();
  }
}
