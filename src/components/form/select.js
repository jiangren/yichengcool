import React from 'react';
import styles from './select.module.css';

const Select = ({options, onChange, value}) => {
    return (
        <select className={styles.selectWrap} onChange={(e) => {
            onChange(e.target.value);
        }} value={value}>
            {
                options.map((option, index) => (
                    <option
                        key={index}
                        className={styles.option}
                        value={option.value ? option.value : option}>
                        {option.name ? option.name : option}
                    </option>
                ))
            }
        </select>
    )
}

export default Select;