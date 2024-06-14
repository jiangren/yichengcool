'use client'
import React, {useState, useCallback} from 'react';
import { Allotment } from "allotment";
import Markdown from 'react-markdown';
import toast, { Toaster } from 'react-hot-toast';
import "allotment/dist/style.css";
import styles from './page.module.css';

const MDEditor = () => {
    const [mdText, setMdText] = useState('');

    const contentChange = useCallback((e: any) => {
        setMdText(e.target.value);
    }, []);

    const copyHTML = useCallback(() => {
        let clipboardDiv:any = document.getElementById('mdwrap');
        if (clipboardDiv && window?.getSelection) {
            clipboardDiv.focus();
            // @ts-ignore
            window.getSelection().removeAllRanges();
            let range = document.createRange();
            range.setStartBefore(clipboardDiv.firstChild);
            range.setEndAfter(clipboardDiv.lastChild);
            // @ts-ignore
            window.getSelection().addRange(range);
    
            try {
                if (document.execCommand('copy')) {
                    toast.success('已复制到剪贴板')
                } else {
                    toast.error('未能复制到剪贴板，请全选后右键复制')
                }
            } catch (err) {
                toast.error('未能复制到剪贴板，请全选后右键复制')
            }
        }
    }, [])

    return (
        <div className={styles.pagecontainer}>
            <Toaster position="top-center" />
            <Allotment defaultSizes={[100, 100]}>
                <textarea className={styles.textarea} onChange={contentChange} />
                <div className={styles.showarea}>
                    <div id="mdwrap">
                        <Markdown className={`${styles.md} markdownwrap`}>{mdText}</Markdown>
                    </div>
                    <div className={styles.copy} onClick={copyHTML}>复制</div>
                </div>
            </Allotment>
        </div>
    )
}

export default MDEditor;