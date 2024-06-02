import React, { useState } from 'react';
import MaskedInput from 'react-text-mask';
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

  const formatCPF = (value) => {
    if (!value) return '';
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  const formatRG = (value) => {
    if (!value) return '';
    return value.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
  };

  const formatPhone = (value) => {
    if (!value) return '';
    return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  const formatDate = (value) => {
    if (!value) return '';
    const date = new Date(value);
    return date.toLocaleDateString('pt-BR');
  };

  const formatCEP = (value) => {
    if (!value) return '';
    return value.replace(/(\d{5})(\d{3})/, '$1-$2');
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
                <span>{formatDate(paciente.dataNascimento)}</span>
              </label>
              <label>
                <span className={styles.subTitulo}>CPF: </span>
                <MaskedInput
                  mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                  value={formatCPF(paciente.cpf)}
                  render={(ref, props) => (
                    <span ref={ref} {...props}>{formatCPF(paciente.cpf)}</span>
                  )}
                />
              </label>
              <label>
                <span className={styles.subTitulo}>RG: </span>
                <span>{formatRG(paciente.rg)}</span>
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
                <MaskedInput
                  mask={[/\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                  value={formatPhone(paciente.telefone)}
                  render={(ref, props) => (
                    <span ref={ref} {...props} className={styles.celular} onClick={() => abrirZapironga(paciente.telefone)}>
                      {formatPhone(paciente.telefone)}
                    </span>
                  )}
                />
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
                <MaskedInput
                  mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                  value={formatCPF(paciente.documentoResponsavel)}
                  render={(ref, props) => (
                    <span ref={ref} {...props}>{formatCPF(paciente.documentoResponsavel)}</span>
                  )}
                />
              </label>
              <label>
                <span className={styles.subTitulo}>Grau de Parentesco: </span>
                <span>{paciente.grauDeParentesco}</span>
              </label>
              <label>
                <span className={styles.subTitulo}>Número de Celular: </span>
                <MaskedInput
                  mask={[/\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                  value={formatPhone(paciente.numeroResponsavel)}
                  render={(ref, props) => (
                    <span ref={ref} {...props} className={styles.celular} onClick={() => abrirZapironga(paciente.numeroResponsavel)}>
                      {formatPhone(paciente.numeroResponsavel)}
                    </span>
                  )}
                />
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
              <MaskedInput
                mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                value={formatCEP(paciente.cep)}
                render={(ref, props) => (
                  <span ref={ref} {...props}>{formatCEP(paciente.cep)}</span>
                )}
              />
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

