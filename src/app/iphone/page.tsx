'use client'
import React, { useState } from 'react';
import styles from "./page.module.css";
import SelectContainer from './components/select_container';
import ImgContainer from './components/img_container';
import OptContainer from './components/opt_container';

export default function Home() {
    const [imageInfo, setImageInfo] = useState<{url: string; name: string}>({url: '', name: ''});

    return (
        <div className={styles.pagecontainer}>
            <SelectContainer />
            <ImgContainer imageUrl={imageInfo.url} name={imageInfo.name} />
            <OptContainer setImageInfo={setImageInfo} />
        </div>
    );
}
