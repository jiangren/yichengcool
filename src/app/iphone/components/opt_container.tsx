import React, { useCallback } from 'react';
import styles from "./opt.module.css";
import globalStyles from '../page.module.css';
import Select from '@/components/form/select';
import { Months, Days, Weeks, Hours, Minutes } from '@/utils/constants';
import { ITimeInfo } from '@/utils/types';

// const getCurName = (name: string) => {
//     const arr = name.split('.');
//     arr.pop();
//     return arr.join('.');
// }

const OptContainer = ({ setImageInfo, setTimeInfo, timeInfo }: { setImageInfo: any; setTimeInfo: any; timeInfo: ITimeInfo }) => {
    const handleImageChange = useCallback((event:any) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageInfo({
                    url: reader.result,
                    name: file.name
                });
            };
            reader.readAsDataURL(file);
        }
    }, [setImageInfo]);
    console.log(timeInfo);
    return (
        <div className={styles.optcontainer}>
            <div className={globalStyles.btn} onClick={() => {
                document.getElementById('uploadimgnode')?.click();
            }}>上传图片</div>
            <div>
                <div>日期：</div>
                <div className={globalStyles.flex}>
                    <Select options={Months} value={timeInfo.month} onChange={((val: any) => {
                        setTimeInfo({
                            ...timeInfo,
                            month: val
                        })
                    })} />
                    <Select options={Days} value={timeInfo.day} onChange={((val: any) => {
                        setTimeInfo({
                            ...timeInfo,
                            day: val
                        })
                    })} />
                    <Select options={Weeks} value={timeInfo.week} onChange={((val: any) => {
                        setTimeInfo({
                            ...timeInfo,
                            week: val
                        })
                    })} />
                </div>
            </div>
            <div>
                <div>时间：</div>
                <div className={globalStyles.flex}>
                    <Select options={Hours} value={timeInfo.hour} onChange={((val: any) => {
                        setTimeInfo({
                            ...timeInfo,
                            hour: val
                        })
                    })} />
                    <Select options={Minutes} value={timeInfo.minute} onChange={((val: any) => {
                        setTimeInfo({
                            ...timeInfo,
                            minute: val
                        })
                    })} />
                </div>
                
            </div>
            <input id="uploadimgnode" style={{display: 'none'}} type="file" accept="image/*" onChange={handleImageChange} />
        </div>
    )
};

export default OptContainer;