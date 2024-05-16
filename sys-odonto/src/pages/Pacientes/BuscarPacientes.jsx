import React, { useState } from 'react';
import styles from './BuscarPacientes.module.css';
import ApiService from '../../services/ApiService';
import ToastService from '../../services/ToastService';
import CadastrarPacientes from './CadastrarPacientes';

export default function Pacientes() {
    const [mostrarCadastro, setMostrarCadastro] = useState(false);
    const [cpfNome, setCpfNome] = useState('');
    const [pacientes, setPacientes] = useState(null);

    const toggleCadastro = () => {
        setMostrarCadastro(!mostrarCadastro);
    };

    const handleInputChange = (event) => {
        setCpfNome(event.target.value);
    };

    const handleBuscarPaciente = async () => {
        try {
            let response;
            if (cpfNome.match(/^\d+$/)) {
                // Se for um número (CPF), busca por CPF
                response = await ApiService.get(`/Paciente/BuscarPorCPF/${cpfNome}`);
            } else {
                // Caso contrário, busca por nome
                response = await ApiService.get(`/Paciente/BuscarPorNome/${cpfNome}`);
            }
            const pacientes = response.data;
            setPacientes(pacientes); 
        } catch (error) {
            ToastService.Error('Houve um erro no servidor ao buscar o paciente.');
        }
    };

    return (
        <div>
            <div className={styles.pacientesContainer}>
                {mostrarCadastro ? (
                    <CadastrarPacientes />
                ) : (
                    <div>
                        <button onClick={toggleCadastro}>Cadastrar Paciente</button>
                        <div>
                            <label>Buscar Paciente por CPF ou Nome:</label>
                            <input type="text" value={cpfNome} onChange={handleInputChange} />
                            <button onClick={handleBuscarPaciente}>Buscar</button>
                        </div>

                        {pacientes && pacientes.map((paciente, index) => (
                            <div key={index}>
                                <h2>Dados do Paciente</h2>
                                <p>Nome: {paciente.nome}</p>
                                <p>CPF: {paciente.cpf}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
