import React, { useCallback } from 'react';
import styles from "./opt.module.css";
import globalStyles from '../page.module.css';

const OptContainer = ({ setImageSrc }: { setImageSrc: any }) => {

    const handleImageChange = useCallback((event:any) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }, []);

    return (
        <div className={styles.optcontainer}>
            <div className={globalStyles.btn} onClick={() => {
                document.getElementById('uploadimgnode')?.click();
            }}>上传图片</div>
            <input id="uploadimgnode" style={{display: 'none'}} type="file" accept="image/*" onChange={handleImageChange} />
        </div>
    )
};

export default OptContainer;