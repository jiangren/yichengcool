'use client'
import React, { useState, useRef } from 'react';
import Image from "next/image";
import html2canvas from 'html2canvas';
import styles from "./page.module.css";

export default function Home() {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [week] = useState('5月20日 星期一');
    const [time] = useState('13:14');
    const captureRef = useRef<HTMLDivElement>(null);

    const handleImageChange = (event:any) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCapture = async () => {
        if (captureRef.current && imageSrc) {
            const canvas = await html2canvas(captureRef.current, {
                backgroundColor: 'transparent',
                width: 200,
                height: 405,
                scale: 2,
            });
            const imgData = canvas.toDataURL('image/png');

            const link = document.createElement('a');
            link.href = imgData;
            link.download = 'captured-image.png';
            link.click();
        }
    };

    return (
        <div className={styles.imgcontainer}>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <div className={styles.showcontainer} ref={captureRef}>
                <img className={styles.cover} src="/images/iphonebg.png" alt="Logo" />
                <div className={styles.week}>{week}</div>
                <div className={styles.time}>{time}</div>
                {
                    imageSrc && <div className={styles.uploadimg} style={{backgroundImage: `url(${imageSrc})`}} />
                }
            </div>
            <button onClick={handleCapture} style={{ marginRight: '10px' }}>下载</button>
        </div>
    );
}
