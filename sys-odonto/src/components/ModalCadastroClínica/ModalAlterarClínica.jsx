import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import ApiService from '../../services/ApiService';
import ToastService from '../../services/ToastService';
import styles from './ModalAlterarClinica.module.css';

export default function ModalAlterarClinica({ modalAberto, setModalAberto, buscarUsuarios }) {
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

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [endereco, setEndereco] = useState("");
    const [imagem, setImagem] = useState("");
    const [previa, setPrevia] = useState("");

 

    async function Alterar() {
        try {
            const body = {
                nome,
                telefone,
                endereco,
                base64: imagem
            };

            await ApiService.post('/Clinica/AlterarClinica', body);
            ToastService.Success('Clínica cadastrado com sucesso!');
            setModalAberto(false);
        }
        catch (error) {
            ToastService.Error('Erro ao Alterar Clínica');
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
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => { setModalAberto(false) }}
        >
            <h2>Cadastre-se</h2>
            <button onClick={() => { setModalAberto(false) }}>Fechar</button>
            <div >
                <img className={styles.imagem} src={previa} />
            </div>

            <input placeholder='Nome' value={nome} onChange={(e) =>setNome(e.target.value)} />
            <input placeholder='Telefone' value={telefone} onChange={(e) =>setTelefone(e.target.value)} />
            <input placeholder='Endereco' value={endereco} onChange={(e) => setEndereco(e.target.value)} />

            <input type="file" accept="image/jpeg" onChange={handleFileChange} />
            <button onClick={Alterar}>Alterar</button>
        </Modal>
    )
}

