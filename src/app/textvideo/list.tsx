'use client'
import React, {useState, useCallback} from 'react';
import { videoList } from './json';
import styles from './page.module.css';

const List = () => {
    const [selected, setSelected] = useState(videoList[0]);

    return (
        <div className={styles.pagecontainer}>
            <div className={styles.content}>
                <img className={styles.head} src="/images/textvideoimg.png" alt="Logo" />
                <div className={styles.menu}>
                    {
                        videoList.map((item, index) => (
                            <div
                                key={index}
                                className={`${styles.title} ${item.title === selected.title ? styles.selected : ''}`}
                                onClick={() => {
                                    setSelected(item);
                                }}>
                                {item.title}
                            </div>
                        ))
                    }
                </div>
                <div className={styles.videowrap}>
                    <div className={styles.title}>{selected.title}</div>
                    <div className={styles.video} dangerouslySetInnerHTML={{ __html: selected.videoUrl}}></div>
                </div>
            </div>
        </div>
    )
}

export default List;