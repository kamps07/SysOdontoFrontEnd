import React, { useState } from 'react';
import styles from './Anamnese.module.css';
import ModalAnamnese from '../../../components/ModalAnamnese/ModalAnamnese';

function Anamnese() {
  const [modalAberto, setModalAberto] = useState(false);

  const handleAbrirModal = () => {
    setModalAberto(true);
  };

  return (
    <div className={styles.container}>

      <div className={styles.containerButton}>
        <button className={styles.button} onClick={handleAbrirModal}>+ Preencher Anamnese</button>
        <ModalAnamnese modalAberto={modalAberto} setModalAberto={setModalAberto} />
      </div>

      <div>
        <div className={styles.gradeh}>
          <label>

            <div className={styles.componenteH}>
              <h3 className={styles.title}>Anamense Padrão</h3>
              <span><strong>Queixa Prinicapal:</strong> Dor nos dentes superiores</span>

            </div>
            <div className={styles.componenteH2}>

              <span>22/09/2024 - 9:48</span>
            </div>
          </label>

        </div>

        <div className={styles.gradeh}>
          <label>

            <div className={styles.componenteH}>
              <h3 className={styles.title}>Anamense Padrão - Retorno 6 Meses</h3>
              <span><strong>Queixa Prinicapal:</strong> Alinhamento dos dentes inferiores</span>

            </div>
            <div className={styles.componenteH2}>

              <span>01/03/2024 - 9:48</span>
            </div>
          </label>

        </div>
      </div>
    </div>
  )
}

export default Anamnese;
