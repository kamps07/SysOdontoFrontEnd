import React, { useState } from 'react';
import styles from './BuscarPacientes.module.css';
import ApiService from '../../services/ApiService';
import ToastService from '../../services/ToastService';
import CadastrarPacientes from './Pacientes';

export default function Pacientes() {
    const [mostrarCadastro, setMostrarCadastro] = useState(false);
    const [cpf, setCpf] = useState('');
    const [pacientes, setPaciente] = useState(null); 

    const toggleCadastro = () => {
        setMostrarCadastro(!mostrarCadastro);
    };

    const handleInputChange = (event) => {
        setCpf(event.target.value);
    };

    const handleBuscarPaciente = async () => {
        try {
            const response = await ApiService.get(`/Paciente/BuscarPorCPF/${cpf}`);
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
                            <label>Buscar Paciente por CPF:</label>
                            <input type="text" value={cpf} onChange={handleInputChange} />
                            <button onClick={handleBuscarPaciente}>Buscar</button>
                        </div>

                        {pacientes && ( 
                            <div>
                                <h2>Dados do Paciente </h2>

                                {pacientes.map(paciente => (
                                    <div key={paciente.id}>
                                        <p><strong>Nome:</strong> {paciente.nome}</p>
                                        <p><strong>Data de Nascimento:</strong> {paciente.dataNascimento}</p>
                                        <p><strong>Gênero:</strong> {paciente.genero}</p>
                                      
                                    </div>
                                ))}

                                
                            </div>
                        )}
                </div>
                )}
            </div>
        </div>
    );
}
