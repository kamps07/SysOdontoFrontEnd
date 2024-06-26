import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import styles from './ModalAnamnese.module.css';
import ToastService from '../../services/ToastService';
import ApiService from '../../services/ApiService';

export default function ModalAnamnese({ modalAberto, setModalAberto, paciente, onModalClose }) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '55%',
            height: '70%',
        },
    };
    Modal.setAppElement('#root');

    const [dataAtual, setDataAtual] = useState("");
    const [perguntas, setPerguntas] = useState([]);
    const [respostas, setRespostas] = useState([]);

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        setDataAtual(formattedDate);
        BuscarPerguntas(); 
    }, []);

    const handleCloseModal = () => {
        setModalAberto(false);
        resetForm();
        if (typeof onModalClose === 'function') {
          onModalClose(); // Chama a função de callback para atualizar dados no pai
        }
        
    };

    const resetForm = () => {
        setRespostas([]);
    };

    const BuscarPerguntas = async () => {
        try {
            const response = await ApiService.get(`/Anamnese/BuscarPergunta`);
            const perguntas = response.data;
            console.log('Perguntas recebidas:', perguntas); // Verifica o formato dos dados recebidos
            setPerguntas(perguntas);
            // Inicializa as respostas com um array do tamanho igual ao número de perguntas
            setRespostas(new Array(perguntas.length).fill(''));
        } catch (error) {
            ToastService.Error('Pergunta não encontrada.');
        }
    };


    async function AdicionarAnamnese() {
        if (!paciente || !paciente.id) {
            console.error('ID do paciente não definido.');
            return;
        }
    
        try {
            // Filtrar perguntas e respostas não vazias
            const respostasParaEnviar = perguntas.map((pergunta, index) => {
                const resposta = respostas[index];
                if (pergunta && pergunta.id && resposta) {
                    return {
                        pergunta: pergunta.id.toString(),
                        resposta: resposta
                    };
                }
                return null;
            }).filter(item => item !== null);
    
            const body = {
                respostas: respostasParaEnviar,
                paciente: paciente.id,
            };
    
            console.log('Dados enviados para a API:', body);
    
            const response = await ApiService.post('/anamnese/CadastrarResposta', body);
            ToastService.Success('Anamnese adicionada');
    
            handleCloseModal(); // Fechar o modal após sucesso
    
        } catch (error) {
            ToastService.Error('Erro ao adicionar anamnese.');
            console.error(error);
        }
    }
    
        

    const handleInputChange = (index, event) => {
        const { value } = event.target;
        const novasRespostas = [...respostas];
        novasRespostas[index] = value;
        setRespostas(novasRespostas);
    };



    return (
        <Modal
            isOpen={modalAberto}
            style={customStyles}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            onRequestClose={handleCloseModal}
        >
            <div className={styles.container}>
                <div className={styles.titleClose}>
                    <h2 className={styles.title}>Formulário de Anamnese</h2>
                    <svg className={styles.closeIcon} onClick={handleCloseModal} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </div>
                <form>
                    <div className={styles.data}>
                        <input className={styles.inputData} type="date" id="date" value={dataAtual} readOnly />
                    </div>
                    <div>
                        {perguntas.length > 0 ? (
                            perguntas.map((pergunta, index) => (
                                <div key={index} className={styles.question}>
                                    <label className={styles.tituloCampos}>{pergunta.valor}</label>
                                    <input
                                        type="text"
                                        placeholder="Resposta"
                                        className={styles.input}
                                        value={respostas[index]}
                                        onChange={(e) => handleInputChange(index, e)}
                                    />
                                </div>
                            ))
                        ) : (
                            <p>Não há perguntas para mostrar.</p>
                        )}
                    </div>
                    <div className={styles.containerButton}>
                        <button type="button" className={styles.button} onClick={AdicionarAnamnese}>Salvar</button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
