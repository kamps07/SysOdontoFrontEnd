import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import ApiService from '../../services/ApiService'
import ToastService from '../../services/ToastService';
import styles from './ModalAgendamento.module.css'
import { Height, Width } from 'devextreme-react/cjs/chart';
import { baseZIndex } from 'devextreme/ui/overlay';
import Input from '../Input/Input';
import Select from '../Select/Select';
import TextArea from '../TextArea/TextArea';

export default function ModalAgendamento({ modalAberto, setModalAberto }) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            height: '65%',
            width: '45%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '1%',
            padding: '2em'
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
                        <Select placeholder={"Dentista"}></Select>
                    </div>
                    <div className={styles.containerPaciente}>
                        <Select placeholder={"Paciente"} width={"75%"}></Select>
                        <button className={styles.button}>+ Cadastrar</button>
                    </div>
                    <div className={styles.containerDatas}>
                        <Select placeholder={"Data da consulta"} width={"28%"}></Select>
                        <Select placeholder={"Horário"} width={"28%"}></Select>
                        <Select placeholder={"Duração"} width={"28%"}></Select>

                    </div>
                    <div className={styles.containerObservacao}>
                        <TextArea placeholder={"Observações"}></TextArea>
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