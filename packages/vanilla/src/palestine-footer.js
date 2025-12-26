(function() {
    if (document.getElementById('ps-final-footer')) return;
    
    const font = document.createElement('link');
    font.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap';
    font.rel = 'stylesheet';
    document.head.appendChild(font);
    
    const style = document.createElement('style');
    style.textContent = `
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
        }
        .ps-palestine-text {
            font-weight: 900;
            background: linear-gradient(to left, #008000, #ffffff, #E4312B);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 14px;
        }
        #ps-final-footer:hover .ps-dot {
            background: #008000;
            transform: scale(1.2);
            transition: 0.3s ease;
        }
        @media (max-width: 480px) {
            #ps-final-footer { padding: 30px 15px; }
            .ps-copyright { font-size: 13px; }
            .ps-solidarity-line { font-size: 11px; flex-wrap: wrap; }
        }
    `;
    document.head.appendChild(style);
    
    const currentYear = new Date().getFullYear();
    const hostName = window.location.hostname || "موقعنا";
    
    const footer = document.createElement('footer');
    footer.id = 'ps-final-footer';
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
    
    document.body.appendChild(footer);
})();
