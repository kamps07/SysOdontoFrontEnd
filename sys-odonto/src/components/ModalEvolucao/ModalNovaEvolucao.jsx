import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import ApiService from '../../services/ApiService';
import ToastService from '../../services/ToastService';
import Select from 'react-select';
import styles from './ModalNovaEvolucao.module.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function ModalNovaEvolucao({ modalAberto, setModalAberto, tratamentosEmAndamento, onModalClose, paciente }) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '45%',
            height: '84%',
        },
    };

    const modules = {
        toolbar: {
            container: [
                [{ 'header': [3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'color': [] }],
                ['clean']
            ]
        },
        clipboard: {
            matchVisual: false
        },
        imageDrop: false,
        imageResize: false
    };

    Modal.setAppElement('#root');

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [dataAtual, setDataAtual] = useState("");
    const [dentes, setDentes] = useState([]);
    const [tratamento, setTratamento] = useState([]);
    const [status, setStatus] = useState('em andamento');

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        setDataAtual(formattedDate);
    }, []);

    const handleTratamento = (selectedOptions) => {
        setTratamento(selectedOptions);
        console.log("Tratamento selecionado:", selectedOptions); // Depuração
    };

    const handleChangeDescricao = (value) => {
        setDescricao(value);
    };

    const handleStatusChange = (selectedOption) => {
        setStatus(selectedOption.value);
    };

    const handleTituloChange = (e) => {
        setNome(e.target.value);
    };

    const adicionarEvolucao = async () => {
        try {
            const body = {
                titulo: nome,
                descricao,
                tratamento: tratamento.map(opcao => opcao.value),
                paciente: paciente.id,
                status: status, // Inclui o status no corpo da requisição
                dataEvolucao: dataAtual // Inclui a data de evolução
            };
            console.log("Dados enviados:", body); // Depuração
            await ApiService.post('/evolucao/adicionar', body);
    
            ToastService.Success('Evolução adicionada');
            handleCloseModal();
        } catch (error) {
            ToastService.Error('Erro ao adicionar evolução.');
            console.error(error);
        }
    };

    const handleCloseModal = () => {
        resetForm();
        setModalAberto(false);
        if (typeof onModalClose === 'function') {
            onModalClose();
        }
    };

    const resetForm = () => {
        setNome("");
        setDescricao("");
        setTratamento([]);
        setStatus('em andamento');
    };

    const tratamentosOptions = tratamentosEmAndamento.map(tratamento => ({
        value: tratamento.tratamento,
        label: tratamento.tratamento
    }));

    const statusOptions = [
        { value: 'em andamento', label: 'Em andamento' },
        { value: 'finalizado', label: 'Finalizado' }
    ];

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
                    <h2 className={styles.title}>Nova Evolução</h2>
                    <svg className={styles.closeIcon} onClick={handleCloseModal} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </div>

                <div className={styles.data}>
                    <input className={styles.inputData} type="date" id="date" value={dataAtual} readOnly />
                </div>

                <div className={styles.alinhamento}>
                    <label className={styles.tituloCampos}>Título: </label>
                    <input value={nome} onChange={handleTituloChange} className={styles.input} />
                </div>

                <div className={styles.alinhamento}>
                    <label className={styles.tituloCampos}>Tratamento: </label>
                    <Select
                        isMulti
                        value={tratamento}
                        onChange={handleTratamento}
                        options={tratamentosOptions}
                        className={`${styles.selectDentes} custom-select custom-select-height custom-select-background`}
                        closeMenuOnSelect={false}
                        menuPortalTarget={document.body}
                        placeholder="Selecione os tratamentos em andamento"
                    />
                </div>

                <div className={styles.alinhamento}>
                    <label className={styles.tituloCampos}>Status do tratamento: </label>
                    <Select
                        value={statusOptions.find(option => option.value === status)}
                        onChange={handleStatusChange}
                        options={statusOptions}
                        className={`${styles.selectStatus} custom-select custom-select-height custom-select-background`}
                        menuPortalTarget={document.body}
                        placeholder="Selecione o status"
                    />
                </div>

                <div className={styles.textareaWrapper}>
                    <label className={styles.tituloCampos}>Descrição: </label>
                    <ReactQuill
                        theme="snow"
                        value={descricao}
                        onChange={handleChangeDescricao}
                        modules={modules}
                        className={`${styles.textarea} ${styles.customQuill}`}
                    />
                </div>

                <div className={styles.containerButton}>
                    <button className={styles.button} onClick={adicionarEvolucao}>+ Adicionar</button>
                </div>
            </div>
        </Modal>
    );
}
