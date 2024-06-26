import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Documentos.module.css';
import ModalDocumentos from '../../../components/ModalDocumentos/ModalDocumentos';
import ApiService from '../../../services/ApiService';
import downloadButton from '../../../assets/Download.svg'
import deleteButton from '../../../assets/Delete.svg'

const UploadDocumento = ({ paciente }) => {
  const [modalDocumentosAberto, setModalDocumentosAberto] = useState(false);
  const [documentos, setDocumentos] = useState(false);

  useEffect(() => {
    buscarDocumentos();
  }, []);

  async function buscarDocumentos() {
    try {
      const response = await ApiService.get('/documentos/' + paciente.id);
      setDocumentos(response.data);
    } catch (error) {

    }
  }



  async function removerDocumento(documento) {
    try {
      alert(documento.id)
      // const response = await ApiService.get('/documentos/' + 35);
      // setDocumentos(response.data);
    } catch (error) {

    }
  }

  return (
    <>
      <ModalDocumentos modalAberto={modalDocumentosAberto} setModalAberto={setModalDocumentosAberto} paciente={paciente} refresh={buscarDocumentos} />

      <div className={styles.container}>
        <div className={styles.containerButton}>
          <button className={styles.buttonCadastro} onClick={() => setModalDocumentosAberto(true)}>+ Adicionar Documentos</button>
        </div>
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Data Upload</th>
                <th>Baixar</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              {documentos && documentos.map((documento, index) => (
                <tr key={index}>
                  <td>{documento.titulo}</td>
                  <td>{documento.dataUpload}</td>
                  <td >

                    <a href={documento.link} target='_blank'>
                      <img className={styles.imgDownload} src={downloadButton}></img>
                    </a>
                  </td>
                  <td onClick={() => removerDocumento(documento)}>
                    <img className={styles.imgDelete} src={deleteButton}></img>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UploadDocumento;
