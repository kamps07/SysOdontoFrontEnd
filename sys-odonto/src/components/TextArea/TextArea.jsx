import React from 'react'
import styles from './TextArea.module.css'

export default function TextArea({ placeholder, value, onChange }) {
    return (
        <div className={styles.container}>
            <span className={styles.label}>{placeholder}</span>
            <textarea className={styles.textarea} value={value} onChange={onChange} />
        </div>
    )
}
