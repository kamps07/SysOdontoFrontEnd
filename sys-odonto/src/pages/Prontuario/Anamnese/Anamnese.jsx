import React, { useState, useEffect } from 'react';
import styles from './Anamnese.module.css';
import ModalAnamnese from '../../../components/ModalAnamnese/ModalAnamnese';
import ApiService from '../../../services/ApiService';
import ToastService from '../../../services/ToastService';
import AnamneseItem from './AnamneseItem'; // Importe o componente AnamneseItem

function Anamnese({ paciente }) {
    const [modalAberto, setModalAberto] = useState(false);
    const [dadosAnamneses, setDadosAnamneses] = useState([]);

    useEffect(() => {
        if (paciente) {
            buscarAnamneses();
        }
    }, [paciente]);

    const atualizarDados = () => {
        buscarAnamneses();
    };

    const buscarAnamneses = async () => {
        try {
            const response = await ApiService.get(`/Anamnese/Buscar/${paciente.id}`);
            const anamneses = response.data;
            console.log('Anamneses recebidas:', anamneses);
            setDadosAnamneses(anamneses); // Armazena todas as anamneses encontradas
        } catch (error) {
            ToastService.Error('Erro ao buscar anamnese.');
            console.error(error);
        }
    };

    const handleAbrirModal = () => {
        setModalAberto(true);
    };

    return (
        <div className={styles.container}>
            <div className={styles.containerButton}>
                <button className={styles.button} onClick={handleAbrirModal}>+ Preencher Anamnese</button>
                <ModalAnamnese
                    modalAberto={modalAberto}
                    setModalAberto={setModalAberto}
                    paciente={paciente}
                    onModalClose={atualizarDados}
                />
            </div>

            {dadosAnamneses.length > 0 ? (
                <div>
                    {dadosAnamneses.map((anamnese) => (
                        <AnamneseItem key={anamnese.ID_Anamnese} anamnese={anamnese} />
                    ))}
                </div>
            ) : (
                <p>Nenhuma anamnese encontrada para exibir.</p>
            )}
        </div>
    );
}

export default Anamnese;
