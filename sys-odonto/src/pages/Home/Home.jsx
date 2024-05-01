import { useState } from 'react';
import Header from '../../components/Header/Header'
import Pacientes from '../Pacientes/Pacientes';
import styles from './Home.module.css'
import Financeiro from '../Financeiro/Financeiro';
import Agenda from '../Agenda/Agenda';

export default function Home() {

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