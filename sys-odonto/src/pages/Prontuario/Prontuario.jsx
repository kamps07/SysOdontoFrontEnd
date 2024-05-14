import React from 'react'
import { useState,useEffect } from 'react';
import styles from './Prontuario.module.css';
import HeaderProntuario from '../../components/HeaderProntuario/HeaderProntuario'
import Evolucoes from './Evolucoes/Evolucoes';
import Anamnese from './Anamnese/Anamnese';
import Tratamentos from './Tratamentos/Tratamentos';
import Arquivos from './Arquivos/Arquivos';
import Documentos from './Documentos/Documentos';



function Prontuario() {

    const [paginaSelecionada, setPaginaSelecionada] = useState("Evolucoes");

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <HeaderProntuario paginaSelecionada={paginaSelecionada} setPaginaSelecionada={setPaginaSelecionada}></HeaderProntuario>
            </div>
            <div className={styles.content}>
                {paginaSelecionada == "Anamnese" && <Anamnese />}
                {paginaSelecionada == "Evolucoes" && <Evolucoes />}
                {paginaSelecionada == "Tratamentos" && <Tratamentos />}
                {paginaSelecionada == "Arquivos" && <Arquivos />}
                {paginaSelecionada == "Documentos" && <Documentos />}
            </div>
        </div>
    );
}

export default Prontuario
