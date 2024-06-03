'use client'
import React, { useState } from 'react';
import { Toaster } from "react-hot-toast";
import styles from "./page.module.css";
import SelectContainer from './components/select_container';
import ImgContainer from './components/img_container';
import OptContainer from './components/opt_container';
import { ITimeInfo } from '@/utils/types';

export default function Home() {
    const [imageInfo, setImageInfo] = useState<{url: string; name: string}>({url: '', name: ''});
    const [timeInfo, setTimeInfo] = useState<ITimeInfo>({month: '5', day: '20', week: '星期一', hour: '13', minute: '14'});

    return (
        <div className={styles.pagecontainer}>
            <Toaster position="top-center" />
            <SelectContainer />
            <ImgContainer imageUrl={imageInfo.url} name={imageInfo.name} timeInfo={timeInfo} />
            <OptContainer setImageInfo={setImageInfo} setTimeInfo={setTimeInfo} timeInfo={timeInfo} />
        </div>
    );
}
