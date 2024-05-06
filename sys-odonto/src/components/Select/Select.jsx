import React from 'react'
import styles from './Select.module.css'

export default function Select({ options, placeholder, width }) {
    return (
        <div className={styles.container} style={{ width }}>
            <span className={styles.label}>{placeholder}</span>
            <select className={styles.select}>
                <option value="" disabled selected hidden>Selecione uma opção</option>
                <option>Palmeiras</option>
                <option>Palmeiras2</option>
            </select>
        </div>
    )
}
