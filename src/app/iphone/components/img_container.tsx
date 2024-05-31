import React, { useState, useRef, useCallback } from 'react';
import html2canvas from 'html2canvas';
import styles from "./img.module.css";
import globalStyles from '../page.module.css';

interface IImgContainer {
    imageSrc: string;
    week?: string;
    time?: string
}

const ShowImg = ({ imageSrc, week, time } : IImgContainer) => (
    <>
        <img className={styles.cover} src="/images/iphonebg.png" alt="Logo" />
        <div className={styles.week}>{week}</div>
        <div className={styles.time}>{time}</div>
        {
            imageSrc && <div className={styles.uploadimg} style={{backgroundImage: `url(${imageSrc})`}} />
        }
    </>
);

const ImgContainer = ({ imageSrc }: IImgContainer) => {
    const [week] = useState('5月20日 星期一');
    const [time] = useState('13:14');
    const captureRef = useRef(null);

    const handleCapture = useCallback(async () => {
        if (captureRef.current && imageSrc) {
            const canvas = await html2canvas(captureRef.current, {
                backgroundColor: 'transparent',
                width: 800,
                height: 1620,
                scale: 1,
            });
            const imgData = canvas.toDataURL('image/png');

            const link = document.createElement('a');
            link.href = imgData;
            link.download = 'captured-image.png';
            link.click();
        }
    }, [imageSrc]);

    return (
        <div className={styles.imgcontainer}>
            <div className={styles.showcontainer}>
                <ShowImg imageSrc={imageSrc} week={week} time={time} />
            </div>
            <div className={styles.shodowcontainer}>
                <div className={styles.showcontainer2} ref={captureRef}>
                    <ShowImg imageSrc={imageSrc} week={week} time={time} />
                </div>
            </div>
            <div className={`${globalStyles.btn} ${styles.downloadbtn}`} onClick={handleCapture} style={{ marginRight: '10px' }}>下载</div>
        </div>
    );
}

export default ImgContainer;