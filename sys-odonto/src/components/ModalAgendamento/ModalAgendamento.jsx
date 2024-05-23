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
import moment from 'moment';

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

    const [dentista, setDentista] = useState([]);
    const [paciente, setPaciente] = useState([]);
    const [horario, setHorario] = useState([]);
    const [data, setData] = useState(moment().format('YYYY-MM-DD'));
    const [observacao, setObservacao] = useState([]);

    useEffect(() => {
        ListarHorarios();
    }, [data])

    async function ListarDentistas() {
        try {
            const response = await ApiService.get('/usuarios/dentistas');
            const listaDeDentistas = response.data.map(item => ({
                value: item.id,
                label: item.nome
            }));

            setDentistas(listaDeDentistas);

        } catch (error) {
            ToastService.Error("Erro ao listar dentistas!");
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
            ToastService.Error("Erro ao listar pacientes!");
        }
    }

    async function ListarHorarios() {
        try {
            const dataSelecionada = moment(data);

            const dia = dataSelecionada.day();
            const mes = dataSelecionada.month();
            const ano = dataSelecionada.year();

            const response = await ApiService.get(`/Agendamento/ListarHorariosDisponiveis?dia=${dia}&mes=${mes}&ano=${ano}`);
            const listaDeHorarios = response.data.map(item => ({
                value: item,
                label: item
            }));

            setHorarios(listaDeHorarios);

        } catch (error) {
            ToastService.Error("Erro ao listar horarios!");
        }
    
    }

        async function CadastrarAgendamento(){
                try {
                    const response = await ApiService.post('/Paciente/CadastrarPaciente', {
                        dentista,
                        paciente,
                        data,
                        horario,
                        observacao
                    });
                    ToastService.Success('Agendamento Realizado');
                }
            catch (error) {
                ToastService.Error('Houve um erro ao realizar o agendamento');
            }
            
        }    
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
                        <Select options={dentista} placeholder={"Dentista"}></Select>
                    </div>
                    <div className={styles.containerPaciente}>
                        <Select options={paciente} placeholder={"Paciente"} width={"75%"}></Select>
                        <button className={styles.button}>+ Cadastrar</button>
                    </div>
                    <div className={styles.containerDatas}>
                        <div className={styles.dateContainer}>
                            <span className={styles.dateLabel}>
                                Data da Consulta
                                <input
                                    className={styles.datePicker}
                                    type="date"
                                    value={data}
                                    onChange={(e) => { setData(e.target.value) }}
                                    onKeyDown={(e) => { e.preventDefault(); }}
                                />
                            </span>
                        </div>
                        <Select options={horario} placeholder={"Horário"} width={"28%"} onChange={(e) => { setHorario(e.target.value) }}></Select>
                    </div>
                    <div className={styles.containerObservacao}>
                        <TextArea placeholder={"Observações"} onChange={(e) => { setObservacao(e.target.value) }}></TextArea>
                    </div>
                </div>
                <div className={styles.containerButtons}>
                    <button className={styles.button} onClick={() => setModalAberto(false)}>Cancelar</button>
                    <button className={styles.button} onClick={CadastrarAgendamento}>Confirmar</button>
                </div>
            </div>
        </Modal>

    );
}