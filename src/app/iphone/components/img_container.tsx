import React, { useState, useRef, useCallback } from 'react';
import html2canvas from 'html2canvas';
import toast from 'react-hot-toast';
import { ITimeInfo } from '@/utils/types';
import styles from "./img.module.css";
import globalStyles from '../page.module.css';

interface IImgContainer {
    imageUrl: string;
    name?: string;
    timeInfo?: ITimeInfo
}

const ShowImg = ({ imageUrl, timeInfo } : IImgContainer) => (
    <>
        <img className={styles.cover} src="/images/iphonebg.png" alt="Logo" />
        {
            timeInfo && (
                <>
                    <div className={styles.week}>{`${timeInfo.month}月${timeInfo.day}日 ${timeInfo.week}`}</div>
                    <div className={styles.time}>{`${timeInfo.hour}:${timeInfo.minute}`}</div>
                </>
            )
        }
        {
            imageUrl && <div className={styles.uploadimg} style={{backgroundImage: `url(${imageUrl})`}} />
        }
    </>
);

const ImgContainer = ({ imageUrl, name, timeInfo }: IImgContainer) => {
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
        } else if (!imageUrl) {
            toast.error('请上传图片!');
        } else {
            toast.error('未知错误，请刷新页面');
        }
    }, [imageUrl, name]);

    return (
        <div className={styles.imgcontainer}>
            <div className={styles.showcontainer}>
                <ShowImg imageUrl={imageUrl} timeInfo={timeInfo} />
            </div>
            <div className={styles.shodowcontainer}>
                <div className={styles.showcontainer2} ref={captureRef}>
                    <ShowImg imageUrl={imageUrl} timeInfo={timeInfo} />
                </div>
            </div>
            <div className={`${globalStyles.btn} ${styles.downloadbtn}`} onClick={handleCapture}>下载</div>
        </div>
    );
}

export default ImgContainer;