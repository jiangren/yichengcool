import React, { useState, useRef, useCallback } from 'react';
import html2canvas from 'html2canvas';
import styles from "./img.module.css";
import globalStyles from '../page.module.css';

interface IImgContainer {
    imageUrl: string;
    name?: string;
    week?: string;
    time?: string
}

const ShowImg = ({ imageUrl, week, time } : IImgContainer) => (
    <>
        <img className={styles.cover} src="/images/iphonebg.png" alt="Logo" />
        <div className={styles.week}>{week}</div>
        <div className={styles.time}>{time}</div>
        {
            imageUrl && <div className={styles.uploadimg} style={{backgroundImage: `url(${imageUrl})`}} />
        }
    </>
);

const ImgContainer = ({ imageUrl, name }: IImgContainer) => {
    const [week] = useState('5月20日 星期一');
    const [time] = useState('13:14');
    const captureRef = useRef(null);

    const handleCapture = useCallback(async () => {
        if (captureRef.current && imageUrl) {
            const canvas = await html2canvas(captureRef.current, {
                backgroundColor: 'transparent',
                width: 800,
                height: 1620,
                scale: 1,
            });
            const imgData = canvas.toDataURL('image/png');

            const link = document.createElement('a');
            link.href = imgData;
            link.download = `iphone_${name as string}`;
            link.click();
        }
    }, [imageUrl, name]);

    return (
        <div className={styles.imgcontainer}>
            <div className={styles.showcontainer}>
                <ShowImg imageUrl={imageUrl} week={week} time={time} />
            </div>
            <div className={styles.shodowcontainer}>
                <div className={styles.showcontainer2} ref={captureRef}>
                    <ShowImg imageUrl={imageUrl} week={week} time={time} />
                </div>
            </div>
            <div className={`${globalStyles.btn} ${styles.downloadbtn}`} onClick={handleCapture} style={{ marginRight: '10px' }}>下载</div>
        </div>
    );
}

export default ImgContainer;