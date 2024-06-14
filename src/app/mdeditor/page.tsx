'use client'
import React, {useState, useCallback} from 'react';
import { Allotment } from "allotment";
import Markdown from 'react-markdown'
import "allotment/dist/style.css";
import styles from './page.module.css';

const MDEditor = () => {
    const [mdText, setMdText] = useState('');

    const contentChange = useCallback((e: any) => {
        setMdText(e.target.value);
    }, []);

    return (
        <div className={styles.pagecontainer}>
            <Allotment defaultSizes={[100, 100]}>
                <textarea className={styles.textarea} onChange={contentChange} />
                <div className={styles.showarea}>
                    <Markdown className={`${styles.md} markdownwrap`}>{mdText}</Markdown>
                </div>
            </Allotment>
        </div>
    )
}

export default MDEditor;