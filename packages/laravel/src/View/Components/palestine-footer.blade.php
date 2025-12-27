{{-- Palestine Footer Component --}}
<footer 
    class="ps-footer-laravel"
    style="background: {{ $backgroundColor }}; color: {{ $textColor }};"
    role="contentinfo"
    aria-label="Palestine Support Footer"
>
    <div class="ps-footer-wrapper">
        <p class="ps-copyright">
            جميع الحقوق محفوظة © 
            <span class="ps-year">{{ $year }}</span> لـ 
            <span class="ps-host-name">{{ strtoupper($hostName) }}</span>
        </p>
        @if($showMessage)
            <div class="ps-solidarity-line">
                <span class="ps-dot"></span>
                <span class="ps-palestine-text">{{ $message }}</span>
                <span class="ps-dot"></span>
            </div>
        @endif
    </div>
</footer>

{{-- Load Cairo Font --}}
@once
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet">
@endonce

{{-- Styles --}}
@once
<style>
    .ps-footer-laravel {
        font-family: 'Cairo', sans-serif;
        direction: rtl;
        padding: 40px 20px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
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
        margin: 0;
        letter-spacing: 0.5px;
    }
    
    .ps-solidarity-line {
        font-size: 13px;
        color: rgba(255, 255, 255, 0.7);
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
    
    .ps-footer-laravel:hover .ps-dot {
        background: #008000;
        transform: scale(1.2);
    }
    
    .ps-palestine-text {
        font-weight: 900;
        background: linear-gradient(to left, #008000, #ffffff, #E4312B);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-size: 14px;
    }
    
    @media (max-width: 480px) {
        .ps-footer-laravel {
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
</style>
@endonce
