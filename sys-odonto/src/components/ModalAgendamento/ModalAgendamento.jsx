import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import ApiService from '../../services/ApiService'
import ToastService from '../../services/ToastService';
import styles from './ModalAgendamento.module.css'
import { Height, Width } from 'devextreme-react/cjs/chart';
import { baseZIndex } from 'devextreme/ui/overlay';
import Input from '../Input/Input';

export default function ModalAgendamento({ modalAberto, setModalAberto }) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            height: '80%',
            width: '60%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '1%'
        },
    };
    Modal.setAppElement('#root');
    return (
        <Modal
            isOpen={modalAberto}
            style={customStyles}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => { setModalAberto(false) }}
        >
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <span className={styles.title}>Novo Agendamento</span>
                </div>
                <div className={styles.containerFormulario}>
                    <div className={styles.containerDentista}>
               
                    </div>
                    <div className={styles.containerPaciente}>

                    </div>
                    <div className={styles.containerDatas}>

                    </div>
                    <div className={styles.containerObservacao}>

                    </div>
                </div>
                <div className={styles.containerButtons}>
                    <button className={styles.button}>Cancelar</button>
                    <button className={styles.button}>Confirmar</button>
                </div>
            </div>
        </Modal>

    );
}