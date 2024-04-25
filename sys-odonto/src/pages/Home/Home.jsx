import { useState } from 'react';
import Header from '../../components/Header/Header'
import PaginaTesteVerde from '../PaginaTesteVerde/PaginaTesteVerde';
import styles from './Home.module.css'
import PaginaTesteVermelha from '../PaginaTesteVermelha/PaginaTesteVermelha';

export default function Home() {

    const [paginaSelecionada, setPaginaSelecionada] = useState("Agenda");


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header paginaSelecionada={paginaSelecionada} setPaginaSelecionada={setPaginaSelecionada}></Header>
            </div>
            <div className={styles.content}>
                {paginaSelecionada == "Agenda" && <PaginaTesteVerde />}
                {paginaSelecionada == "Pacientes" && <PaginaTesteVermelha />}
                {paginaSelecionada == "Financeiro" && <PaginaTesteVermelha />}
            </div>
        </div>
    );
}