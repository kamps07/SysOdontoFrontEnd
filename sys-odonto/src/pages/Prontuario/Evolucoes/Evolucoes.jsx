import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Editor style
import styles from './Evolucoes.module.css';
import ModalTratamento from '../../../components/ModalTratamento/ModalTratamento';
import ModalNovaEvolucao from '../../../components/ModalEvolucao/ModalNovaEvolucao';
import Odontograma from '../../../components/Odontograma/Odontograma';
import historico from '../../../assets/historico.png';
import ApiService from '../../../services/ApiService';

function Evolucoes({ paciente, fechar, onModalClose }) {
  const [descricao, setDescricao] = useState('');
  const [modalTratamentoAberto, setModalTratamentoAberto] = useState(false);
  const [modalEvolucaoAberto, setModalEvolucaoAberto] = useState(false);
  const [pacienteSelecionado, setPacienteSelecionado] = useState(paciente);
  const [descricaoOdontograma, setDescricaoOdontograma] = useState('');
  const [status, setStatus] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [dente, setDente] = useState('');
  const [posicao, setPosicao] = useState('');
  const [odontogramas, setOdontogramas] = useState([]);
  const [tratamentos, setTratamentos] = useState([]);

  useEffect(() => {
    buscarOdontograma();
  }, []);

  const Tooltip = ({ text, children }) => (
    <div className={styles.tooltip}>
      <span className={styles.tooltipText}>{text}</span>
      {children}
    </div>
  );

  const atualizarDados = () => {
    buscarOdontograma();
  };

  async function buscarOdontograma() {
    try {
      const response = await ApiService.get(`/odontograma/paciente/${paciente.id}`);
      const tratamentosEmAndamento = response.data
        .filter(item => item.status === 'Em andamento')
        .map(item => ({
          tratamento: item.tratamento,
          descricao: item.descricao,
          dentes: item.dentes
        }));
      setTratamentos(tratamentosEmAndamento);
      setOdontogramas(response.data);
    } catch (error) {
      console.error('Erro ao buscar odontograma:', error);
    }
  }

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
            <Odontograma />
          </div>
        </div>

        <div className={styles.containerTratamento}>
          <div className={styles.containerTitle}>
            <label className={styles.title}>Tratamentos</label>
          </div>
          <div className={styles.gradeTratamento}>
            <div className={styles.listagem}>
              <label className={styles.subTitle}>Em andamento</label>
              {tratamentos.map((tratamento, index) => (
                <div key={index} className={styles.tooltip}>
                  <Tooltip text={tratamento.descricao}>
                    <span className={styles.listagem1}>- {tratamento.tratamento}</span>
                  </Tooltip>
                </div>
              ))}
            </div>
            <div className={styles.buttonA}>
              <button className={styles.button} onClick={handleAbrirModalTratamento}>
                + Adicionar Tratamento
              </button>
              <ModalTratamento modalAberto={modalTratamentoAberto} setModalAberto={setModalTratamentoAberto} paciente={paciente} onModalClose={atualizarDados} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.containerHistorico}>
        <div className={styles.titleAlinhamento}>
          <label className={styles.title}>Histórico</label>
          <button className={styles.button} onClick={handleAbrirModalEvolucao}>
            + Adicionar Evolução
          </button>
          <ModalNovaEvolucao modalAberto={modalEvolucaoAberto} setModalAberto={setModalEvolucaoAberto} />
        </div>
        <div className={styles.grade2}>
          {/* Example historical entries */}
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
