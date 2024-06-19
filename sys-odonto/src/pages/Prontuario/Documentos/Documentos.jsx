import React, { useState } from 'react';
import axios from 'axios';
import './Documentos.module.css'; 
import ModalOdontograma from '../../../components/ModalOdontograma/ModalOdontograma';

const UploadDocumento = () => {
  const [titulo, setTitulo] = useState('');
  const [fileBase64, setFileBase64] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setFileBase64(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fileBase64) {
      setModalMessage('selecione um arquivo');
      setIsModalOpen(true);
      return;
    }

    const documento = {
      Titulo: titulo,
      Base64: fileBase64,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/Documentos/InserirDocumento', documento, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setModalMessage(response.data);
    } catch (error) {
      console.error(error);
      setModalMessage('Erro ao inserir documento');
    } finally {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage('');
  };

  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>

          <div>
            <button onChange={ModalOdontograma}> Modal Oodontograma </button>
          </div>


          <label>Título:</label>
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div>
          <label>Selecione o PDF:</label>
          <input type="file" accept="application/pdf" onChange={handleFileChange} />
        </div>
        <button type="submit">Inserir Documento</button>
      </form>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>{modalMessage}</p>
            <button onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadDocumento;
