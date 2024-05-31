'use client'
import React, { useState } from 'react';
import styles from "./page.module.css";
import SelectContainer from './components/select_container';
import ImgContainer from './components/img_container';
import OptContainer from './components/opt_container';

export default function Home() {
    const [imageSrc, setImageSrc] = useState<string>('');

    return (
        <div className={styles.pagecontainer}>
            <SelectContainer />
            <ImgContainer imageSrc={imageSrc} />
            <OptContainer setImageSrc={setImageSrc} />
        </div>
    );
}
