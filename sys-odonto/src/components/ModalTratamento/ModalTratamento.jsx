import React, { useState } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import styles from './ModalTratamento.module.css';
import ApiService from '../../services/ApiService';
import ToastService from '../../services/ToastService'; // Certifique-se de que este serviço esteja importado corretamente

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '45%',
        height: '57%',
    },
};

export default function ModalTratamento({ modalAberto, setModalAberto, paciente, onModalClose }) {
    Modal.setAppElement('#root');

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [dentes, setDentes] = useState([]);

    const dataAtual = new Date().toISOString().split('T')[0];

    const handleDenteChange = (selectedOptions) => {
        const selectedValues = selectedOptions.map(option => option.value);
    
        // Verificar se 'Arcada Superior', 'Arcada Inferior' ou 'Todos' foram selecionados
        if (selectedValues.includes('superior')) {
            // Selecionar dentes da Arcada Superior (1 a 16)
            const superiorDentes = Array.from({ length: 16 }, (_, i) => i + 1);
            setDentes(superiorDentes);
        } else if (selectedValues.includes('inferior')) {
            // Selecionar dentes da Arcada Inferior (17 a 32)
            const inferiorDentes = Array.from({ length: 16 }, (_, i) => i + 17);
            setDentes(inferiorDentes);
        } else if (selectedValues.includes('todos')) {
            // Selecionar todos os dentes (1 a 32)
            const todosDentes = Array.from({ length: 32 }, (_, i) => i + 1);
            setDentes(todosDentes);
        } else {
            // Caso contrário, manter os dentes selecionados como estão
            const selectedDentes = selectedValues.map(Number); // Converte os valores para números
            setDentes(selectedDentes);
        }
    };
    

    const handleCloseModal = () => {
        resetForm();
        setModalAberto(false);
        if (typeof onModalClose === 'function') {
          onModalClose(); // Chama a função de callback para atualizar dados no pai
        }
    };
    
    const resetForm = () => {
        setNome("");
        setDescricao("");
        setDentes([]);
    };

    async function adicionarTratamento() {
        try {
            const body = {
                tratamento: nome,
                paciente: paciente.id,
                dentes,
                descricao,
            };
            
            await ApiService.post('/odontograma/multiplo', body);
            ToastService.Success('Tratamento adicionado');
            handleCloseModal(); // Fechar o modal após sucesso
            
        } catch (error) {
            ToastService.Error('Erro ao adicionar tratamento.');
            console.error(error); 
        }
    }
    
    const numbers = Array.from({ length: 32 }, (_, i) => i + 1);

    const options = [
        { value: 'superior', label: 'Arcada Superior' },
        { value: 'inferior', label: 'Arcada Inferior' },
        { value: 'todos', label: 'Todos' },
        ...numbers.map(num => ({ value: num, label: num }))
    ];
    
    

    return (
        <Modal
            isOpen={modalAberto}
            style={customStyles}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            onRequestClose={handleCloseModal}
            role="dialog"
        >
            <div className={styles.container}>
                <div className={styles.titleClose}>
                    <h2 className={styles.title}>Novo Tratamento</h2>
                    <svg className={styles.closeIcon} onClick={handleCloseModal} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </div>

                <div className={styles.data}>
                    <input className={styles.inputData} type="date" id="date" value={dataAtual} readOnly />
                </div>

                <div>
                    <label className={styles.tituloCampos}>Nome do tratamento: </label>
                    <input value={nome} onChange={(e) => setNome(e.target.value)} className={styles.input} />
                </div>

                <div>
                    <label className={styles.tituloCampos}>Descrição: </label>
                    <div>
                        <textarea
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            className={styles.descricaoTextarea}
                        />
                    </div>
                </div>

                <div>
                    <label className={styles.tituloCampos}>Dentes: </label>
                    <Select
                        isMulti
                        value={options.filter(option => dentes.includes(option.value))}
                        onChange={handleDenteChange}
                        options={options}
                        className={`${styles.selectDentes} custom-select custom-select-height custom-select-background`}
                        closeMenuOnSelect={false}
                        menuPortalTarget={document.body}
                        placeholder="Selecione os dentes"
                    />
                </div>

                <div className={styles.containerButton}>
                    <button className={styles.button} onClick={adicionarTratamento}>+ Adicionar</button>
                </div>
            </div>
        </Modal>
    );
}
