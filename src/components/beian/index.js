import React from "react";
import styles from './index.module.css';

export default function Beian({ type }) {
    return (
        <div className={`${styles.wrap} ${type === 'fixed' ? styles.fixed : ''}`} >
            <a href="https://beian.miit.gov.cn" target="_blank">浙ICP备2021040693号-2</a>
        </div>
    )
}