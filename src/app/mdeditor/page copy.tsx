'use client'
import React, {useState, useCallback} from 'react';
import { Allotment } from "allotment";
import Markdown from 'react-markdown'
import {markdownParserWechat, updateMathjax} from './utils/helper';
import "allotment/dist/style.css";
import styles from './page.module.css';

const MDEditor = () => {
    const [mdText, setMdText] = useState('');
    const [parseHTML, setParseHTML] = useState('');

    const contentChange = useCallback((e: any) => {
        setMdText(e.target.value);

        setParseHTML(markdownParserWechat.render(e.target.value));
    }, []);

    return (
        <div className={styles.pagecontainer}>
            <Allotment defaultSizes={[100, 100]}>
                <textarea className={styles.textarea} onChange={contentChange} />
                <div className={styles.showarea}>
                    <section
                        data-tool="markdown编辑器"
                        data-website="https://markdown.com.cn/editor"
                        dangerouslySetInnerHTML={{
                        __html: parseHTML,
                        }}
                    />
                </div>
            </Allotment>
        </div>
    )
}

export default MDEditor;