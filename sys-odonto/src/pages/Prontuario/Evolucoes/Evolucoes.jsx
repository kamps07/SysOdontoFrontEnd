import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Estilo do editor
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
  const [tratamentosEmAndamento, setTratamentosEmAndamento] = useState([]);
  const [evolucoes, setEvolucoes] = useState([]);

  useEffect(() => {
    buscarOdontograma();
    buscarEvolucao();
  }, [paciente]);

  const Tooltip = ({ text, children }) => (
    <div className={styles.tooltip}>
      <span className={styles.tooltipText}>{text}</span>
      {children}
    </div>
  );

  const atualizarDados = () => {
    buscarOdontograma();
    buscarEvolucao();
  };

  async function buscarOdontograma() {
    try {
      const response = await ApiService.get(`/odontograma/paciente/${paciente.id}`);
      const tratamentosEmAndamento = response.data
        .filter(item => item.status === 'Em andamento')
        .reduce((uniqueTratamentos, item) => {
     
          if (!uniqueTratamentos.has(item.tratamento)) {
            uniqueTratamentos.set(item.tratamento, {
              tratamento: item.tratamento,
              descricao: item.descricao,
              dentes: item.dentes
            });
          }
          return uniqueTratamentos;
        }, new Map())
        .values(); 

      setTratamentosEmAndamento([...tratamentosEmAndamento]);
      setTratamentos([...tratamentosEmAndamento]);
      setOdontogramas(response.data);
    } catch (error) {
      console.error('Erro ao buscar odontograma:', error);
      alert('Erro ao buscar dados do odontograma. Por favor, tente novamente.');
    }
  }


  const handleAbrirModalTratamento = () => {
    setModalTratamentoAberto(true);
  };

  const handleAbrirModalEvolucao = () => {
    setModalEvolucaoAberto(true);
  };

  async function buscarEvolucao() {
    try {
      const response = await ApiService.get(`/evolucao/paciente/${paciente.id}`);
      setEvolucoes(response.data);
    } catch (error) {
      console.error('Erro ao buscar evoluções:', error);
      alert('Erro ao buscar evoluções. Por favor, tente novamente.');
    }
  }



  function formatarData(data) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');

    return `${dia}/${mes}/${ano} - ${horas}:${minutos}`;
  }


  const dataString = '2024-06-16T17:15:35';
  const data = new Date(dataString);
  const dataFormatada = formatarData(data);
  console.log(dataFormatada);




  return (
    <div className={styles.container}>
      <div className={styles.containerSuperior}>
        <div className={styles.containerOdontograma}>
          <div className={styles.containerTitle}>
            <label className={styles.title}>Odontograma</label>
          </div>
          <div className={styles.gradeOdonto}>
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
              {tratamentosEmAndamento.map((tratamento, index) => (
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
          <ModalNovaEvolucao modalAberto={modalEvolucaoAberto} setModalAberto={setModalEvolucaoAberto} paciente={paciente} tratamentosEmAndamento={tratamentosEmAndamento} onModalClose={atualizarDados} />
        </div>
        <div className={styles.grade2}>
          {evolucoes.length > 0 ? (
            evolucoes.map((evolucao, index) => (
              <div className={styles.gradeh} key={index}>
                <label>
                  <div className={styles.componenteH}>
                    <h2 className={styles.titleEvolucao}>{evolucao.titulo}</h2>
                    <div dangerouslySetInnerHTML={{ __html: evolucao.descricao }} />
                  </div>
                  <div className={styles.componenteH}>
             
                    <span><strong className={styles.titleEvolucao}>Tratamento:</strong> <strong>{evolucao.tratamento.join(', ')}</strong></span>
                  </div>
                  <div className={styles.componenteH2}>
                    <span>{formatarData(new Date(evolucao.dataEvolucao))}</span>

                  </div>
                </label>
              </div>
            ))
          ) : (
            <p>Nenhuma evolução encontrada.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Evolucoes;
