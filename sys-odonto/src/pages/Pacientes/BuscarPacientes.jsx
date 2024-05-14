import React, { useState } from 'react';
import styles from './BuscarPacientes.module.css';
import ApiService from '../../services/ApiService';
import ToastService from '../../services/ToastService';
import CadastrarPacientes from './Pacientes';

export default function Pacientes() {
    const [mostrarCadastro, setMostrarCadastro] = useState(false);
    const [cpf, setCpf] = useState('');
    const [pacientes, setPacientes] = useState(null); // Alteração aqui

    const toggleCadastro = () => {
        setMostrarCadastro(!mostrarCadastro);
    };

    const handleInputChange = (event) => {
        setCpf(event.target.value);
    };

    const handleBuscarPaciente = async () => {
        try {
            const response = await ApiService.get(`/Paciente/ListarPaciente?cpf=${cpf}`);
            const pacientes = response.data; // Alteração aqui
            setPacientes(Array.isArray(pacientes) ? pacientes : [pacientes]); // Alteração aqui
        } catch (error) {
            console.error('Erro ao buscar paciente:', error);
            ToastService.Error('Houve um erro no servidor ao buscar o paciente.');
        }
    };
    

    return (
        <div>
            <div className={styles.pacientesContainer}>
                {mostrarCadastro ? (
                    <CadastrarPacientes />
                ) : (
                    <>
                        <button onClick={toggleCadastro}>Cadastrar Paciente</button>
                        <div>
                            <label>Buscar Paciente por CPF:</label>
                            <input type="text" value={cpf} onChange={handleInputChange} />
                            <button onClick={handleBuscarPaciente}>Buscar</button>
                        </div>
                        {pacientes && ( // Alteração aqui
                            <div>
                                <h2>Dados do(s) Paciente(s)</h2>
                                {pacientes.map(p => (
                                    <div key={p.id}>
                                        <p><strong>Nome:</strong> {p.nome}</p>
                                        <p><strong>Data de Nascimento:</strong> {p.dataNascimento}</p>
                                        <p><strong>Gênero:</strong> {p.genero}</p>
                                        {/* Adicione outros dados do paciente conforme necessário */}
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
