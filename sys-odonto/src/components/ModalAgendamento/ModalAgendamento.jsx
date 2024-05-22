import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import ApiService from '../../services/ApiService'
import ToastService from '../../services/ToastService';
import styles from './ModalAgendamento.module.css'
import { Height, Width } from 'devextreme-react/cjs/chart';
import { baseZIndex } from 'devextreme/ui/overlay';
import Input from '../Input/Input';
import DatePicker from 'react-datepicker';
import Select from '../Select/Select';
import TextArea from '../TextArea/TextArea';
import CadastrarPacientes from '../../pages/Pacientes/BuscarPacientes/BuscarPacientes'

export default function ModalAgendamento({ modalAberto, setModalAberto }) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            height: '80%',
            width: '45%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '1%',
            padding: '2em'
        },
    };

    useEffect(() => {
        ListarDentistas();
        ListarPacientes();
    }, []);

    async function ListarDentistas() {
        try {
            const response = await ApiService.get('/usuarios/dentistas');
            const listaDeDentistas = response.data.map(item => ({
                value: item.id,
                label: item.nome
            }));

            setDentistas(listaDeDentistas);

        } catch (error) {
            ToastService.Error("Erro ao listar Dentistas!");
        }
    }

    async function ListarPacientes() {
        try {
            const response = await ApiService.get('/Paciente/ListarPacientes');
            const listaDePacientes = response.data.map(item => ({
                value: item.id,
                label: item.nome
            }));

            setPacientes(listaDePacientes);

        } catch (error) {
            ToastService.Error("Erro ao listar Pacientes!");
        }
    }

    const [dentistas, setDentistas] = useState([]);
    const [pacientes, setPacientes] = useState([]);


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
                        <Select options={dentistas} placeholder={"Dentista"}></Select>
                    </div>
                    <div className={styles.containerPaciente}>
                        <Select options={pacientes} placeholder={"Paciente"} width={"75%"}></Select>
                        <button className={styles.button} onClick={<CadastrarPacientes/>}>+ Cadastrar</button>
                    </div>
                    <div className={styles.containerDatas}>
                        <div className={styles.dateContainer}>
                        <span className={styles.dateLabel}>
                            Data da Consulta
                            <input className={styles.datePicker} type="date"></input>
                        </span>
                        </div>
                        <Select placeholder={"Horário"} width={"28%"}></Select>
                        <Select placeholder={"Duração"} width={"28%"}></Select>

                    </div>
                    <div className={styles.containerObservacao}>
                        <TextArea placeholder={"Observações"}></TextArea>
                    </div>
                </div>
                <div className={styles.containerButtons}>
                    <button className={styles.button} onClick={() => setModalAberto(false)}>Cancelar</button>
                    <button className={styles.button}>Confirmar</button>
                </div>
            </div>
        </Modal>

    );
}