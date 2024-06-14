import React, {useState, useCallback} from 'react';
import { Metadata } from 'next';
import Md from './md';

 
export const metadata: Metadata = {
  title: 'MarkDown微信公众号编辑器',
}

const MDEditor = () => (
    <Md />
)

export default MDEditor;