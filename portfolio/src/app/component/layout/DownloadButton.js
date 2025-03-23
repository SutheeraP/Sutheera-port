"use client";
import React from 'react';
import { useState } from 'react';

const DownloadButton = () => {
    // 3. กำหนด URL ของไฟล์ PDF
    const pdfUrl = 'sutheera-resume.pdf';
  
    // 4. สร้าง state เพื่อติดตามการดาวน์โหลด
    const [downloaded, setDownloaded] = useState(false);
  
    // 5. ฟังก์ชันที่จะเรียกเมื่อคลิกปุ่ม
    const handleDownload = () => {
      // 6. ให้ดาวน์โหลดไฟล์ PDF
      window.open(pdfUrl, '_blank');
  
      // 7. (ตัวเลือก) สามารถเพิ่มการติดตามสถานะการดาวน์โหลด
      setDownloaded(true);
    };
  
    return (
      <div>
        {/* 8. สร้างปุ่มคลิก */}
        <button onClick={handleDownload} disabled={downloaded}>
          {downloaded ? 'Downloaded' : 'Download PDF'}
        </button>
      </div>
    );
  };
  
  export default DownloadButton;