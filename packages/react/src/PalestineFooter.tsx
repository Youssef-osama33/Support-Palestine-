/**
 * Palestine Footer Component for React
 * Version: 1.0.0
 * Author: Yusuf Osama
 * License: MIT
 */

import React, { useEffect } from 'react';

export interface PalestineFooterProps {
  /** السنة - إذا لم يتم تحديدها، سيتم استخدام السنة الحالية */
  year?: number;
  
  /** اسم الموقع - إذا لم يتم تحديده، سيتم استخدام hostname */
  hostName?: string;
  
  /** الرسالة المخصصة */
  message?: string;
  
  /** إظهار/إخفاء الرسالة */
  showMessage?: boolean;
  
  /** لون الخلفية */
  backgroundColor?: string;
  
  /** لون النص */
  textColor?: string;
}

const PalestineFooter: React.FC<PalestineFooterProps> = ({
  year,
  hostName,
  message,
  showMessage = true,
  backgroundColor = '#000000',
  textColor = '#ffffff'
}) => {
  const currentYear = year || new Date().getFullYear();
  const siteName = hostName || (typeof window !== 'undefined' ? window.location.hostname : 'موقعنا') || 'موقعنا';
  const defaultMessage = 'نحن نقف مع فلسطين حرة من النهر إلى البحر';
  const displayMessage = message || defaultMessage;

  useEffect(() => {
    // تحميل خط Cairo
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap';
    link.rel = 'stylesheet';
    link.id = 'palestine-footer-font';
    
    // تحقق من عدم وجود الخط مسبقاً
    if (!document.getElementById('palestine-footer-font')) {
      document.head.appendChild(link);
    }

    return () => {
      // Cleanup عند unmount
      const existingLink = document.getElementById('palestine-footer-font');
      if (existingLink) {
        existingLink.remove();
      }
    };
  }, []);

  return (
    <>
      <style>{`
        .ps-footer-react {
          background: ${backgroundColor};
          color: ${textColor};
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          padding: 40px 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          margin-top: 50px;
        }
        
        .ps-footer-react .ps-footer-wrapper {
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .ps-footer-react .ps-copyright {
          font-size: 15px;
          font-weight: 700;
          margin: 0;
          letter-spacing: 0.5px;
        }
        
        .ps-footer-react .ps-solidarity-line {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          opacity: 0.9;
        }
        
        .ps-footer-react .ps-dot {
          width: 6px;
          height: 6px;
          background: #E4312B;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 10px rgba(228, 49, 43, 0.5);
          transition: all 0.3s ease;
        }
        
        .ps-footer-react .ps-palestine-text {
          font-weight: 900;
          background: linear-gradient(to left, #008000, #ffffff, #E4312B);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 14px;
        }
        
        .ps-footer-react:hover .ps-dot {
          background: #008000;
          transform: scale(1.2);
        }
        
        @media (max-width: 480px) {
          .ps-footer-react {
            padding: 30px 15px;
          }
          
          .ps-footer-react .ps-copyright {
            font-size: 13px;
          }
          
          .ps-footer-react .ps-solidarity-line {
            font-size: 11px;
            flex-wrap: wrap;
          }
        }
      `}</style>

      <footer 
        className="ps-footer-react"
        role="contentinfo"
        aria-label="Palestine Support Footer"
      >
        <div className="ps-footer-wrapper">
          <p className="ps-copyright">
            جميع الحقوق محفوظة © <span className="ps-year">{currentYear}</span> لـ{' '}
            <span className="ps-host-name">{siteName.toUpperCase()}</span>
          </p>
          {showMessage && (
            <div className="ps-solidarity-line">
              <span className="ps-dot"></span>
              <span className="ps-palestine-text">{displayMessage}</span>
              <span className="ps-dot"></span>
            </div>
          )}
        </div>
      </footer>
    </>
  );
};

export default PalestineFooter;
