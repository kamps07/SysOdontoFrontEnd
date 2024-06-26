import React, { useState } from 'react';
import Modal from 'react-modal';
import ApiService from '../../services/ApiService';
import ToastService from '../../services/ToastService';
import styles from './ModalDocumentos.module.css';
import Anexos from '../Anexos/Anexos';

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


export default function ModalDocumentos({ modalAberto, setModalAberto, paciente, onModalClose, refresh }) {
    Modal.setAppElement('#root');

    const [descricao, setDescricao] = useState("");
    const [anexos, setAnexos] = useState([]);

    const handleCloseModal = () => {
        refresh()
        setModalAberto(false);
    };


    function generateGUID() {
        const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
    }

    async function adicionarAnexos(anexos) {
        const novosAnexos = [];

        for (let index = 0; index < anexos.length; index++) {
            const { file, base64String } = anexos[index];

            const novoAnexo = {
                nome: file.name.replace(/\.[^.]+$/, ""),
                extensao: file.name.split(".").pop(),
                base64: base64String,
                key: generateGUID(),
            };

            novosAnexos.push(novoAnexo)
        }
        setAnexos((prevAnexos) => [...prevAnexos, ...novosAnexos]);
    }

    async function excluirAnexo(key) {
        let novosAnexos = anexos.filter((anexo) => anexo.key !== key);
        novosAnexos = novosAnexos.map((anexo, index) => {
            anexo.key = index;
            return anexo;
        });

        setAnexos(novosAnexos);
    }

    async function cadastrarAnexos() {
        try {
            const body = {
                documentos: anexos,
                descricao,
                paciente: paciente.id
            }

            await ApiService.post('/documentos', body);
            ToastService.Success("Documentos adicionados com sucesso");
            handleCloseModal();
            setDescricao("");
            setAnexos([]);
        } catch (error) {
            ToastService.Error("Erro ao cadastrar anexos, tente novamente mais tarde");
        }
     
    }

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
                    <h2 className={styles.title}>Adicionar Documentos</h2>
                    <svg className={styles.closeIcon} onClick={handleCloseModal} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </div>
                <div className={styles.content}>
                    <div>
                        <label className={styles.tituloCampos}>Descrição: </label>
                        <input value={descricao} onChange={(e) => setDescricao(e.target.value)} className={styles.input} />
                    </div>

                    <div className={styles.anexosContainer}>
                        <Anexos
                            anexos={anexos}
                            adicionarAnexos={adicionarAnexos}
                            excluirAnexo={excluirAnexo}
                        />
                    </div>


                    <div className={styles.containerButton}>
                        <button className={styles.button} onClick={cadastrarAnexos}>+ Adicionar</button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
