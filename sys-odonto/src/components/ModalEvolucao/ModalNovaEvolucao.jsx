import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import styles from './ModalNovaEvolucao.module.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Estilo para o editor

export default function ModalNovaEvolucao({ modalAberto, setModalAberto }) {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '45%',
            height: '75%',
        },
    };


    const modules = {
        toolbar: {
            container: [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'color': [] }],
                ['clean']
            ]
        },
        clipboard: {
            matchVisual: false // Desabilita a inserção de arquivos
        },
        imageDrop: false, // Desabilita a inserção de imagens arrastando e soltando
        imageResize: false // Desabilita o redimensionamento de imagens
    };

    Modal.setAppElement('#root');

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [dataAtual, setDataAtual] = useState("");
    const [dentes, setDentes] = useState([]);
    const [tratamento, setTratamento] = useState([]);

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        setDataAtual(formattedDate);
    }, []);

    const handleDenteChange = (selectedOptions) => {
        const selectedDentes = selectedOptions.map(option => option.value);
        setDentes(selectedDentes);
    };

    const handleCloseModal = () => {
        setModalAberto(false);
    };

    const handleAddTratamento = () => {

    };

    const handleChange = (value) => {
        setDescricao(value);
    };

    const numbers = Array.from({ length: 32 }, (_, i) => i + 1);
    const options = numbers.map(num => ({ value: num, label: num })); //alterar para lista de tratamentos

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

                <div>
                    <label className={styles.tituloCampos}>Título: </label>
                    <input value={nome} onChange={(e) => setNome(e.target.value)} className={styles.input} />
                </div>

                <div>
                    <label className={styles.tituloCampos}>Tratamento: </label>
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

                <div className={styles.textareaWrapper}>
                <label className={styles.tituloCampos}>Descrição: </label>
                    <ReactQuill
                        theme="snow"
                        value={descricao}
                        onChange={handleChange}
                        modules={modules} // Passando os módulos configurados
                        className={`${styles.textarea} ${styles.customQuill}`}
                    />
                </div>

               

                <div className={styles.containerButton}>
                    <button className={styles.button} onClick={handleAddTratamento}>+ Adicionar</button>
                </div>

            </div>
        </Modal>
    );
}
