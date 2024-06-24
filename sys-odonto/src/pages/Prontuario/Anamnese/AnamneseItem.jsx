import React from 'react';
import styles from './Anamnese.module.css';

function AnamneseItem({ anamnese }) {
    // Função para formatar a data no formato desejado (dd/mm/aaaa)
    const formatarData = (data) => {
        const dataObj = new Date(data);
        const dia = dataObj.getDate().toString().padStart(2, '0');
        const mes = (dataObj.getMonth() + 1).toString().padStart(2, '0');
        const ano = dataObj.getFullYear();
        const hora = dataObj.getHours().toString().padStart(2, '0');
        const minuto = dataObj.getMinutes().toString().padStart(2, '0');
        const dataFormatada = `${dia}/${mes}/${ano}`;
        const horaFormatada = `${hora}:${minuto}`;
        return { dataFormatada, horaFormatada };
    };

    // Formatar a data realizada
    const { dataFormatada, horaFormatada } = formatarData(anamnese.dataRealizada);

    return (
        <div className={styles.gradeh}>
            <label>
                <div className={styles.componenteH}>
                    <h3 className={styles.title}>Anamnese - {dataFormatada}</h3>
                    {anamnese.respostas.length > 0 ? (
                        anamnese.respostas.map((item, index) => (
                            <div key={index}>
                                <span className={styles.pergunta}>{item.pergunta}: </span>
                                {item.resposta}
                            </div>
                        ))
                    ) : (
                        <p>Nenhuma pergunta respondida.</p>
                    )}
                </div>
                <div className={styles.componenteH2}>
                    <span>{horaFormatada}</span>
                </div>
            </label>
        </div>
    );
}

export default AnamneseItem;
