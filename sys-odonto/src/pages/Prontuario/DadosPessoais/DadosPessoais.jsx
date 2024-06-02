import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import styles from './DadosPessoais.module.css';
import AlterarPaciente from '../../Pacientes/AlterarPaciente/AlterarPaciente';

function DadosPessoais({ paciente }) {
  const [mostrarAlterar, setMostrarAlterar] = useState(false);
  const [mostrarDadosPessoais, setMostrarDadosPessoais] = useState(true);
  const [pacienteSelecionado, setPacienteSelecionado] = useState(paciente);

  const handleAlterarPaciente = () => {
    setMostrarDadosPessoais(false);
    setMostrarAlterar(true);
  };

  const fechar = () => {
    setMostrarDadosPessoais(true);
    setMostrarAlterar(false);
  };

  const abrirZapironga = (numero) => {
    const url = "https://api.whatsapp.com/send/?phone=55" + numero;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.pacientesContainer}>
      {mostrarDadosPessoais && !mostrarAlterar && (
        <div className={styles.container}>
          <div className={styles.container2}>
            <div className={styles.grade1}>
              <span className={styles.titulo}>Informações básicas</span>
              <label>
                <span className={styles.subTitulo}>Gênero: </span>
                <span>{paciente.genero}</span>
              </label>
              <label>
                <span className={styles.subTitulo}>Data de Nascimento: </span>
                <span>{paciente.dataNascimento}</span>
              </label>
              <label>
                <span className={styles.subTitulo}>CPF: </span>
                <InputMask mask="999.999.999-99" value={paciente.cpf} disabled>
                  {(inputProps) => <span>{inputProps.value}</span>}
                </InputMask>
              </label>
              <label>
                <span className={styles.subTitulo}>RG: </span>
                <span>{paciente.rg}</span>
              </label>
              <label>
                <span className={styles.subTitulo}>Profissão: </span>
                <span>{paciente.profissao}</span>
              </label>
              <label>
                <span className={styles.subTitulo}>E-mail: </span>
                <span>{paciente.email}</span>
              </label>
              <label>
                <span className={styles.subTitulo}>Número de Celular: </span>
                <InputMask mask="(99) 99999-9999" value={paciente.telefone} disabled>
                  {(inputProps) => <span className={styles.celular} onClick={() => abrirZapironga(paciente.telefone)}>{inputProps.value}</span>}
                </InputMask>
              </label>
            </div>
            <div className={styles.grade2}>
              <span className={styles.titulo}>Responsável/Contato de emergência</span>
              <label>
                <span className={styles.subTitulo}>Nome Completo: </span>
                <span>{paciente.nomeResponsavel}</span>
              </label>
              <label>
                <span className={styles.subTitulo}>CPF: </span>
                <InputMask mask="999.999.999-99" value={paciente.documentoResponsavel} disabled>
                  {(inputProps) => <span>{inputProps.value}</span>}
                </InputMask>
              </label>
              <label>
                <span className={styles.subTitulo}>Grau de Parentesco: </span>
                <span>{paciente.grauDeParentesco}</span>
              </label>
              <label>
                <span className={styles.subTitulo}>Número de Celular: </span>
                <InputMask mask="(99) 99999-9999" value={paciente.numeroResponsavel} disabled>
                  {(inputProps) => <span className={styles.celular} onClick={() => abrirZapironga(paciente.numeroResponsavel)}>{inputProps.value}</span>}
                </InputMask>
              </label>
            </div>
          </div>
          <div className={styles.grade3}>
            <span className={styles.titulo}>Endereço</span>
            <label>
              <span className={styles.subTitulo}>Logradouro: </span>
              <span>{paciente.logradouro}</span>
            </label>
            <label>
              <span className={styles.subTitulo}>Número: </span>
              <span>{paciente.numero}</span>
            </label>
            <label>
              <span className={styles.subTitulo}>Complemento: </span>
              <span>{paciente.complemento}</span>
            </label>
            <label>
              <span className={styles.subTitulo}>CEP: </span>
              <InputMask mask="99999-999" value={paciente.cep} disabled>
                {(inputProps) => <span>{inputProps.value}</span>}
              </InputMask>
            </label>
            <label>
              <span className={styles.subTitulo}>Bairro: </span>
              <span>{paciente.bairro}</span>
            </label>
            <label>
              <span className={styles.subTitulo}>Cidade: </span>
              <span>{paciente.cidade}</span>
            </label>
            <label>
              <span className={styles.subTitulo}>Estado: </span>
              <span>{paciente.estado}</span>
            </label>
          </div>
          <div className={styles.buttonAlinhamento}>
            <button className={styles.button} onClick={handleAlterarPaciente}>
              Alterar Paciente
            </button>
          </div>
        </div>
      )}
      {mostrarAlterar && (
        <AlterarPaciente paciente={pacienteSelecionado} fechar={fechar} />
      )}
    </div>
  );
}

export default DadosPessoais;
