import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import styles from './ModalAnamnese.module.css';

export default function ModalAnamnese({ modalAberto, setModalAberto }) {
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

    async function CadastrarAnanmese() {
        try {
            const body = {
                data,
                resposta,
            };
            
           const response = await ApiService.post('/Anamnese/cadastrar', body);

            navigate('/');
        }
        catch (error) {
            if (error.response?.status === 400) {
                ToastService.Error('Erro ao cadastrar anamnese');
                return;
            }
        }
    }
    
    const [dataAtual, setDataAtual] = useState("");
    const [queixaPrincipal, setQueixaPrincipal] = useState('');
    const [tratamentoMedico, setTratamentoMedico] = useState('');
    const [cirurgiaRecente, setCirurgiaRecente] = useState('');
    const [alergiaMedicamento, setAlergiaMedicamento] = useState('');
    const [reacaoAdversa, setReacaoAdversa] = useState('');
    const [ultimaConsulta, setUltimaConsulta] = useState('');
    const [problemaDental, setProblemaDental] = useState('');
    const [habitoDanoso, setHabitoDanoso] = useState('');
    const [condicaoMedica, setCondicaoMedica] = useState('');
    const [restricaoAlimentar, setRestricaoAlimentar] = useState('');
    const [objetivoTratamento, setObjetivoTratamento] = useState('');


    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        setDataAtual(formattedDate);
    }, []);


    const handleCloseModal = () => {
        setModalAberto(false);
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
    
                        <div className={styles.question}>
                            <label className={styles.tituloCampos}>Queixa Principal:</label>
                            <input 
                                className={styles.input}
                                type="text"
                                value={queixaPrincipal}
                                onChange={(e) => setQueixaPrincipal(e.target.value)}
                            />
                        </div>
    
                        <div className={styles.question}>
                            <label className={styles.tituloCampos}>Está atualmente sob tratamento médico? Se sim, qual(is) e para que condição(is)?</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={tratamentoMedico}
                                onChange={(e) => setTratamentoMedico(e.target.value)}
                            />
                        </div>
    
                        <div className={styles.question}>
                            <label className={styles.tituloCampos}>Teve alguma cirurgia recente? Se sim, descreva.</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={cirurgiaRecente}
                                onChange={(e) => setCirurgiaRecente(e.target.value)}
                            />
                        </div>
    
                        <div className={styles.question}>
                            <label className={styles.tituloCampos}>Tem alergia a algum medicamento ou substância? Se sim, qual(is)?</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={alergiaMedicamento}
                                onChange={(e) => setAlergiaMedicamento(e.target.value)}
                            />
                        </div>
    
                        <div className={styles.question}>
                            <label className={styles.tituloCampos}>Já teve alguma reação adversa a tratamentos odontológicos anteriores? Se sim, qual(is)?</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={reacaoAdversa}
                                onChange={(e) => setReacaoAdversa(e.target.value)}
                            />
                        </div>
    
                        <div className={styles.question}>
                            <label className={styles.tituloCampos}>Há quanto tempo realizou sua última consulta odontológica?</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={ultimaConsulta}
                                onChange={(e) => setUltimaConsulta(e.target.value)}
                            />
                        </div>
    
                        <div className={styles.question}>
                            <label className={styles.tituloCampos}>Tem algum problema ou dor dental atualmente? Se sim, descreva.</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={problemaDental}
                                onChange={(e) => setProblemaDental(e.target.value)}
                            />
                        </div>
    
                        <div className={styles.question}>
                            <label className={styles.tituloCampos}>Tem algum hábito que possa afetar a saúde bucal (fumar, ranger os dentes, etc.)?</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={habitoDanoso}
                                onChange={(e) => setHabitoDanoso(e.target.value)}
                            />
                        </div>
    
                        <div className={styles.question}>
                            <label className={styles.tituloCampos}>Tem alguma condição médica que o dentista deva estar ciente? (doenças cardíacas, diabetes, etc.)</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={condicaoMedica}
                                onChange={(e) => setCondicaoMedica(e.target.value)}
                            />
                        </div>
    
                        <div className={styles.question}>
                            <label className={styles.tituloCampos}>Você tem alguma restrição alimentar ou dieta especial?</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={restricaoAlimentar}
                                onChange={(e) => setRestricaoAlimentar(e.target.value)}
                            />
                        </div>
    
                        <div className={styles.question}>
                            <label className={styles.tituloCampos}>Qual é o seu objetivo principal em relação ao tratamento odontológico que está buscando?</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={objetivoTratamento}
                                onChange={(e) => setObjetivoTratamento(e.target.value)}
                            />
                        </div>
    
                        <div className={styles.containerButton}>
                            <button onClick={CadastrarAnanmese} className={styles.button}>Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
}