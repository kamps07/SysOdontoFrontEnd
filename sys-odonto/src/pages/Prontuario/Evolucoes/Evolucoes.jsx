import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Estilo para o editor
import styles from './Evolucoes.module.css';
import ModalTratamento from '../../../components/ModalTratamento/ModalTratamento';
import ModalNovaEvolucao from '../../../components/ModalEvolucao/ModalNovaEvolucao';
import Odontograma from '../../../components/Odontograma/Odontograma';
import historico from '../../../assets/historico.png'

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
            <Odontograma></Odontograma>

          </div>
        </div>

        <div className={styles.containerTratamento}>

          <div className={styles.containerTitle}>
            <label className={styles.title}>Tratamentos</label>
          </div>

          <div className={styles.gradeTratamento}>

            <div className={styles.listagem}>
              <label className={styles.subTitle}>Em andamento</label>
              <span className={styles.listagem1}>-Limpeza Ortodontica</span>
              <span className={styles.listagem1} >-Canal</span>
              <span className={styles.listagem1}>-Restauração</span>


            </div >

            <div className={styles.buttonA}>
              <button className={styles.button} onClick={handleAbrirModalTratamento}>+ Adicionar Tratamento</button>
              <ModalTratamento modalAberto={modalTratamentoAberto} setModalAberto={setModalTratamentoAberto} />

            </div>


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

          <div className={styles.gradeh}>
            <label>


              <div className={styles.componenteH}>
                <h3>Pulpite irreversível</h3>
                <span>Diagnosticado com pulpite irreversível no dente 46. Tratamento de canal iniciado com anestesia, abertura, instrumentação e medicação intracanal, seguido de restauração temporária. Retorno agendado para 7 dias.</span>
              </div>
              <div className={styles.componenteH}>
                <span><strong>Tratamento:</strong> Canal e restauração</span>

              </div>
              <div className={styles.componenteH2}>

                <span>22/09/2024 - 9:48</span>
              </div>
            </label>

          </div>

          <div className={styles.gradeh}>
            <label>


              <div className={styles.componenteH}>
                <h3>Dente cariado</h3>
                <span>Diagnosticado com cárie extensa no dente 36. Realizada remoção da cárie e restauração com resina composta. Orientado sobre higiene bucal e agendado retorno em 6 meses para revisão.</span>
              </div>
              <div className={styles.componenteH}>
                <span><strong>Tratamento:</strong> Limpeza e restauração</span>

              </div>
              <div className={styles.componenteH2}>

                <span>22/09/2024 - 9:48</span>
              </div>
            </label>

          </div>

          

        </div>
      </div>



    </div>
  );
}

export default Evolucoes;
