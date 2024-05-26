import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header'
import styles from './Home.module.css'
import Financeiro from '../Financeiro/Financeiro';
import Agenda from '../Agenda/Agenda';
import AuthService from '../../services/AuthService';
import Prontuario from '../Prontuario/Prontuario';
import BuscarPacientes from "../../pages/Pacientes/BuscarPacientes/BuscarPacientes";
import ModalCadastroClinica from '../../components/ModalCadastroClínica/ModalCadastroClínica'; // Importe o modal aqui

export default function Home() {

    const navigate = useNavigate();
    const [modalAberto, setModalAberto] = useState(false); // Estado para controlar o modal

    function VerificarLogin() {
        const usuarioEstaLogado = AuthService.VerificarSeUsuarioEstaLogado();
    
        if (!usuarioEstaLogado) {
            navigate("/Login");
        }
      };
    
      useEffect(() => {
        VerificarLogin();
        setModalAberto(true); // Define o estado do modal como true para abrir assim que a página inicial for carregada
    }, []);

    const [paginaSelecionada, setPaginaSelecionada] = useState("Agenda");

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header paginaSelecionada={paginaSelecionada} setPaginaSelecionada={setPaginaSelecionada}></Header>
            </div>
            <div className={styles.content}>
                {paginaSelecionada == "Agenda" && <Agenda />}
                {paginaSelecionada == "Pacientes" && <BuscarPacientes />}
                {paginaSelecionada == "Financeiro" && <Financeiro />}
                {paginaSelecionada == "Prontuário" && <Prontuario />}
            </div>

            {/* Renderiza o modal de cadastro de clínica se o modalAberto for true */}
            {modalAberto && (
                <ModalCadastroClinica
                    modalAberto={modalAberto}
                    setModalAberto={setModalAberto}
                />
            )}
        </div>
    );
}
