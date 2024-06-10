import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Estilo para o editor
import styles from './Evolucoes.module.css';
import ModalTratamento from '../../../components/ModalTratamento/ModalTratamento';
import ModalNovaEvolucao from '../../../components/ModalEvolucao/ModalNovaEvolucao';

function Evolucoes() {
  const [descricao, setDescricao] = useState('');
  const [modalTratamentoAberto, setModalTratamentoAberto] = useState(false);
  const [modalEvolucaoAberto, setModalEvolucaoAberto] = useState(false);



  const handleAbrirModalTratamento = () => {
    setModalTratamentoAberto(true);
  };

  const handleAbrirModalEvolucao = () => {
    setModalEvolucaoAberto(true);
  };


  return (
    <div className={styles.container}>

      <div className={styles.containerSuperior}>

        <div className={styles.containerOdontograma}>

          <div className={styles.containerTitle}>
            <label className={styles.title}>Odontograma</label>
          </div>

          <div className={styles.grade2}>

            <div className={styles.quadrantes}>
              <div className={styles.row}>
                <div className={styles.column}>
                <span>Quadrante 1</span>
                </div>
                <div className={styles.column}>
                <span>Quadrante 2</span>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.column}>
                <span>Quadrante 3</span>
                </div>
                <div className={styles.column}>
                <span>Quadrante 4</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className={styles.containerTratamento}>

          <div className={styles.containerTitle}>
            <label className={styles.title}>Tratamentos</label>
          </div>

          <div className={styles.grade2}>
            
          
              <button className={styles.button} onClick={handleAbrirModalTratamento}>+ Adicionar Tratamento</button>
              <ModalTratamento modalAberto={modalTratamentoAberto} setModalAberto={setModalTratamentoAberto} />
           
          </div>
        </div>

      </div>


      <div className={styles.containerHistorico}>

        <div className={styles.titleAlinhamento}>
            <label className={styles.title}>Hístorico</label>
            <button className={styles.button} onClick={handleAbrirModalEvolucao}>+ Adicionar Evolução</button>
            <ModalNovaEvolucao modalAberto={modalEvolucaoAberto} setModalAberto={setModalEvolucaoAberto} />
        </div>



        <div className={styles.grade2}>
        </div>
      </div>



    </div>
  );
}

export default Evolucoes;
