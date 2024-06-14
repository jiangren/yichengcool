import React, {useState, useCallback} from 'react';
import { Metadata } from 'next';
import Iphone from './iphone';
 
export const metadata: Metadata = {
  title: '手机样机图片生成',
}

const MDEditor = () => (
    <Iphone />
)

export default MDEditor;