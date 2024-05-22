import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import ApiService from '../../services/ApiService';
import ToastService from '../../services/ToastService';
import styles from './ModalCadastroClinica.module.css';

export default function ModalCadastroClinica({ modalAberto, setModalAberto, buscarUsuarios }) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    Modal.setAppElement('#root');

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [imagem, setImagem] = useState("");
    const [previa, setPrevia] = useState("");

    async function Cadastrar() {
        try {
            const body = {
                email,
                senha,
                base64: imagem
            };

            await ApiService.post("/Clinica/cadastrarclinica", body);
            ToastService.Success("Clínica cadastrado com sucesso!");
            setModalAberto(false);
            await buscarUsuarios();
        } catch (error) {
            ToastService.Error("Erro ao cadastrar Clínica");
        }
    }
    function handleFileChange(event) {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            setPrevia(URL.createObjectURL(selectedFile));

            const reader = new FileReader();
            reader.onload = function (e) {
                const base64 = e.target.result.split(',')[1];
                setImagem(base64);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setImagem(null);
            setPrevia(null); // Limpa o base64 se nenhum arquivo estiver selecionado
        }
    };

    return (
        <Modal
            isOpen={modalAberto}
            style={customStyles}
        >
            <h2>Cadastre-se</h2>
            <button onClick={() => { setModalAberto(false) }}>Fechar</button>
            <div >
                <img className={styles.imagem} src={previa} />
            </div>

            <input placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder='Senha' type='Password' value={senha} onChange={(e) => setSenha(e.target.value)} />

            <input type="file" accept="image/jpeg" onChange={handleFileChange} />
            <button onClick={Cadastrar}>Cadastrar</button>
        </Modal>
    )
}
