/**
 * Palestine Footer Component
 * Version: 1.0.0
 * Author: Yusuf Osama
 * License: MIT
 * 
 * A lightweight footer component to show solidarity with Palestine
 * Zero dependencies - Pure Vanilla JavaScript
 */

(function() {
    'use strict';
    
    // منع التكرار - إذا كان الـ footer موجود مسبقاً، لا تنشئه مرة أخرى
    if (document.getElementById('ps-final-footer')) {
        console.warn('Palestine Footer: Footer already exists, skipping initialization.');
        return;
    }
    
    // تحميل خط Cairo من Google Fonts
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
    
    // إضافة التصميم (CSS)
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        #ps-final-footer {
            background: #000000;
            color: #ffffff;
            font-family: 'Cairo', sans-serif;
            direction: rtl;
            padding: 40px 20px;
            border-top: 1px solid #1a1a1a;
            text-align: center;
            margin-top: 50px;
        }
        
        .ps-footer-wrapper {
            max-width: 1000px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        
        .ps-copyright {
            font-size: 15px;
            font-weight: 700;
            color: #ffffff;
            margin: 0;
            letter-spacing: 0.5px;
        }
        
        .ps-solidarity-line {
            font-size: 13px;
            color: #888;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            opacity: 0.9;
        }
        
        .ps-dot {
            width: 6px;
            height: 6px;
            background: #E4312B;
            border-radius: 50%;
            display: inline-block;
            box-shadow: 0 0 10px rgba(228, 49, 43, 0.5);
            transition: all 0.3s ease;
        }
        
        .ps-palestine-text {
            font-weight: 900;
            background: linear-gradient(to left, #008000, #ffffff, #E4312B);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-size: 14px;
        }
        
        /* Hover effect */
        #ps-final-footer:hover .ps-dot {
            background: #008000;
            transform: scale(1.2);
        }
        
        /* Responsive Design */
        @media (max-width: 480px) {
            #ps-final-footer {
                padding: 30px 15px;
            }
            
            .ps-copyright {
                font-size: 13px;
            }
            
            .ps-solidarity-line {
                font-size: 11px;
                flex-wrap: wrap;
            }
        }
    `;
    document.head.appendChild(styleElement);
    
    // الحصول على السنة الحالية تلقائياً
    const currentYear = new Date().getFullYear();
    
    // الحصول على اسم الموقع من الـ hostname
    const hostName = window.location.hostname || "موقعنا";
    
    // إنشاء عنصر الـ footer
    const footer = document.createElement('footer');
    footer.id = 'ps-final-footer';
    footer.setAttribute('role', 'contentinfo');
    footer.setAttribute('aria-label', 'Palestine Support Footer');
    
    footer.innerHTML = `
        <div class="ps-footer-wrapper">
            <p class="ps-copyright">
                جميع الحقوق محفوظة © <span class="ps-year">${currentYear}</span> لـ <span class="ps-host-name">${hostName.toUpperCase()}</span>
            </p>
            <div class="ps-solidarity-line">
                <span class="ps-dot"></span>
                نحن نقف مع <span class="ps-palestine-text">فلسطين حرة</span> من النهر إلى البحر
                <span class="ps-dot"></span>
            </div>
        </div>
    `;
    
    // إضافة الـ footer للصفحة عند تحميلها
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            document.body.appendChild(footer);
        });
    } else {
        // الصفحة محملة بالفعل
        document.body.appendChild(footer);
    }
    
    console.log('🇵🇸 Palestine Footer initialized successfully');
    
})();
