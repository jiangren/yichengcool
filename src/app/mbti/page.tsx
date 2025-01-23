import React, {useState, useCallback} from 'react';
import { Metadata } from 'next';
import Main from './main';
import styles from './page.module.scss';
 
export const metadata: Metadata = {
  title: 'MBTI测试',
}

const MBTI = () => (
  <div className={styles.pageContainer}>
    <Main />
  </div>
)

export default MBTI;