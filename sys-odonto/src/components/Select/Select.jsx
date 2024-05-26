import React from 'react'
import styles from './Select.module.css'
import SelectComponent from 'react-select'

export default function Select({ options, placeholder, width, onChange }) {

    return (
        <div className={styles.container} style={{ width }}>
            <span className={styles.label}>{placeholder}</span>
            <SelectComponent className={styles.component} options={options} onChange={onChange}/>
        </div>
    )
}
