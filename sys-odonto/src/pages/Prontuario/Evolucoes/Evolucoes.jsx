import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Estilo para o editor
import styles from './Evolucoes.module.css';

function Evolucoes() {
  const [descricao, setDescricao] = useState('');

  const handleChange = (value) => {
    setDescricao(value);
  };

  const modules = {
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
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
  
  

  return (
    <div className={styles.container}>
      <span>Evolução do Paciente</span>
      <div className={styles.textareaWrapper}>
        <ReactQuill
          theme="snow"
          value={descricao}
          onChange={handleChange}
          modules={modules} // Passando os módulos configurados
          className={styles.textarea}
        />
      </div>
    </div>
  );
}

export default Evolucoes;
