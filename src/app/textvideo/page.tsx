import React, {useState, useCallback} from 'react';
import { Metadata } from 'next';
import List from './list';

 
export const metadata: Metadata = {
  title: '文字视频',
}

const MDEditor = () => (
    <List />
)

export default MDEditor;