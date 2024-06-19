import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from "./ModalOdontograma.module.css"
import Select from 'react-select';
import ApiService from '../../services/ApiService';
import ToastService from '../../services/ToastService';

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

const dataAtual = new Date().toISOString().split('T')[0];



export default function ModalOdontograma({ modalAberto, setModalAberto, paciente, onModalClose }) {
    Modal.setAppElement('#root');

    const handleCloseModal = () => {
        setModalAberto(false);
     };
    
     const [nome, setNome] = useState("");
     const [descricao, setDescricao] = useState("");
     const [dentes, setDentes] = useState([]);
 



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
                    <label className={styles.tituloCampos}>Dentes: </label>

                    <select>
                    <option value="">Selecione</option>
                        <option value="Superior">Superior</option>
                        <option value="Inferior">Inferior</option>
                        <option value="Lateral Direita"> Lateral Direita</option>
                         <option value="Lateral Esquerda">Lateral Esquerda</option>
                         <option value="Central">Central</option>
                    </select>
                
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


                <div className={styles.containerButton}>
                    <button>+ Adicionar</button>
                </div>
            </div>
       
        </Modal>
    );
}
