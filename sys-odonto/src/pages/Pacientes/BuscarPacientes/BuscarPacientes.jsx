import React, { useState } from 'react';
import styles from './BuscarPacientes.module.css';
import ApiService from '../../../services/ApiService';
import ToastService from '../../../services/ToastService';
import Lupa from "../../../assets/Lupa.svg";
import CadastrarPaciente from '../CadastrarPaciente/CadastrarPaciente';
import DadosPessoais from '../../Prontuario/DadosPessoais/DadosPessoais';
import HeaderProntuario from '../../../components/HeaderProntuario/HeaderProntuario';
import Prontuario from '../../Prontuario/Prontuario';

export default function BuscarPacientes() {
    const [cpfNome, setCpfNome] = useState('');
    const [pacientes, setPacientes] = useState(null);
    const [cpfSelecionado, setCpfSelecionado] = useState(null);
    const [mostrarCadastro, setMostrarCadastro] = useState(false);
    const [mostrarProntuario, MostrarHeaderProntuario] = useState(false);
    const [pacienteSelecionado, setPacienteSelecionado] = useState(null);

    const handleClick = (paciente) => {
        setCpfSelecionado(paciente.cpf);
        setMostrarCadastro(false);
        MostrarHeaderProntuario(true);
        setPacienteSelecionado(paciente);
    };

    const fechar = () => {
        setCpfNome("");
        setMostrarCadastro(false);
        MostrarHeaderProntuario(false);
        setPacientes([]);
    };
    

    const handleInputChange = (event) => {
        setCpfNome(event.target.value);
    };

    const handleBuscarPaciente = async () => {
        try {
            let response;
            if (cpfNome.match(/^\d+$/)) {
                response = await ApiService.get(`/Paciente/BuscarPorCPF/${cpfNome}`);
            } else {
                response = await ApiService.get(`/Paciente/BuscarPorNome/${cpfNome}`);
            }
            const pacientes = response.data;
            setPacientes(pacientes);
        } catch (error) {
            ToastService.Error('Paciente não encontrado.');
        }
    };

    const toggleCadastro = () => {
        setMostrarCadastro(!mostrarCadastro);
    };

    return (
        <div className={styles.pacientesContainer}>
            {mostrarProntuario && <Prontuario paciente={pacienteSelecionado} fechar={fechar}/>}
            {!mostrarCadastro && !mostrarProntuario &&
                <div className={styles.container}>
                    <div className={styles.containerButton}>
                        <button className={styles.buttonCadastro} onClick={toggleCadastro}>+ Cadastrar Paciente</button>
                        <div className={styles.containerTitle}>
                            <label className={styles.tituloCampos}>Buscar Paciente</label>
                        </div>
                    </div>
                    <div className={styles.buscador}>
                        <input
                            className={styles.input}
                            type="text"
                            value={cpfNome}
                            onChange={handleInputChange}
                            placeholder='Digite nome ou CPF do Paciente'
                        />
                        <button className={styles.button} onClick={handleBuscarPaciente}>
                            <img src={Lupa} alt='Buscar' />
                        </button>
                    </div>
                    <div className={styles.tableContainer}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>CPF</th>
                                    <th>Número de Celular</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pacientes && pacientes.map((paciente, index) => (
                                    <tr key={index} onClick={() => handleClick(paciente)}>
                                        <td>{paciente.nome}</td>
                                        <td>{paciente.cpf}</td>
                                        <td>{paciente.numero}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            }
            {mostrarCadastro && !mostrarProntuario && <CadastrarPaciente fechar={fechar} />}
 
        </div>
    );
}
