import React from 'react'
import styles from './TextArea.module.css'

export default function TextArea({placeholder}) {
    return (
        <div className={styles.container}>
            <span className={styles.label}>{placeholder}</span>
            <textarea className={styles.textarea} />
        </div>
    )
}
