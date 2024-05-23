import React from 'react'
import { useState,useEffect } from 'react';
import styles from './Prontuario.module.css';
import HeaderProntuario from '../../components/HeaderProntuario/HeaderProntuario'
import Evolucoes from './Evolucoes/Evolucoes';
import Anamnese from './Anamnese/Anamnese';
import Tratamentos from './Tratamentos/Tratamentos';
import Arquivos from './Arquivos/Arquivos';
import Documentos from './Documentos/Documentos';
import ModalCadastroClinica from '../../components/ModalCadastroClínica/ModalCadastroClínica';



function Prontuario() {

    const [paginaSelecionada, setPaginaSelecionada] = useState("Evolucoes");
    const [modalAberto, setModalAberto] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {paginaSelecionada == "Anamnese" && <Anamnese />}
                {paginaSelecionada == "Evolucoes" && <Evolucoes />}
                {paginaSelecionada == "Tratamentos" && <Tratamentos />}
                {paginaSelecionada == "Arquivos" && <Arquivos />}
                {paginaSelecionada == "Documentos" && <Documentos />}
            </div>
            <div className={styles.header}>
                <HeaderProntuario paginaSelecionada={paginaSelecionada} setPaginaSelecionada={setPaginaSelecionada}></HeaderProntuario>
            </div>
            <ModalCadastroClinica
                modalAberto={modalAberto}
                setModalAberto={setModalAberto}
                />
            <div className={styles.sidebar}>
                <div className={styles.botaoContainer}>
                    <button className={styles.botaoClinica} onClick={() => setModalAberto(true)}> Cadastrar Clínica </button>
                </div>
            </div>
            
        </div>
    );
}

export default Prontuario
