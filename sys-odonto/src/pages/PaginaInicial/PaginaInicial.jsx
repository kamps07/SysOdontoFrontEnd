import React from 'react'
import styles from './PaginaInicial.module.css'
import TextSysOdonto from '../../assets/TextSysOdonto.svg'


export default function PaginaInicial() {
    return (
        <div>
            <div className={styles.header}>

            <div className={styles.containerLogo}>
                <div className={styles.logo}>
                    <img src={TextSysOdonto} alt='Logo' />
                </div>
            </div>
            </div>

            <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
            <div className={styles.loginWallpaper}>

                teghh
            </div>


            <div className={styles.middle}>

                <span>Gestão clínica simplificada para você</span>

            </div>

            <div>
                FUNCIONALIDADES
            </div>

        </div>
    )
}
