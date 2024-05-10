import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header'
import Pacientes from '../Pacientes/Pacientes';
import styles from './Home.module.css'
import Financeiro from '../Financeiro/Financeiro';
import Agenda from '../Agenda/Agenda';
import AuthService from '../../services/AuthService';

export default function Home() {


    const navigate = useNavigate();

    function VerificarLogin() {
        const usuarioEstaLogado = AuthService.VerificarSeUsuarioEstaLogado();
    
        if (!usuarioEstaLogado) {
            navigate("/Login");
        }
      };
    
    
      useEffect(() => {
        VerificarLogin();
    }, []);

    const [paginaSelecionada, setPaginaSelecionada] = useState("Agenda");


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header paginaSelecionada={paginaSelecionada} setPaginaSelecionada={setPaginaSelecionada}></Header>
            </div>
            <div className={styles.content}>
                {paginaSelecionada == "Agenda" && <Agenda />}
                {paginaSelecionada == "Pacientes" && <Pacientes />}
                {paginaSelecionada == "Financeiro" && <Financeiro />}
            </div>
        </div>
    );
}