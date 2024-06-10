import React, { useState, useEffect } from 'react';
import MaskedInput from 'react-text-mask';
import styles from './DadosPessoais.module.css';
import AlterarPaciente from '../../Pacientes/AlterarPaciente/AlterarPaciente';
import whatsapp from '../../../assets/whatsapp.png';


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
    const url = "https://api.whatsapp.com/send/?phone=55" + numero + "&text=SuaMensagem.";
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
    const cleanValue = value.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
    if (cleanValue.length === 11) { // Verifica se é um celular com DDD
      return `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(2, 3)} ${cleanValue.slice(3, 7)}-${cleanValue.slice(7)}`;
    } else if (cleanValue.length === 10) { // Verifica se é um celular sem DDD
      return `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(2, 6)}-${cleanValue.slice(6)}`;
    }
    // Se não se encaixar em nenhum dos casos anteriores, retorna o valor original
    return value;
  };


  const formatDate = (value) => {
    if (!value) return '';
    const date = new Date(value);
    return date.toLocaleDateString('pt-BR');
  };

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    return age;
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
                <span> {formatDate(paciente.dataNascimento)} - {calculateAge(paciente.dataNascimento)} anos de idade</span>
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
                  mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                  value={formatPhone(paciente.telefone)}
                  render={(ref, props) => (
                    <span ref={ref} {...props} className={styles.celular} onClick={() => abrirZapironga(paciente.telefone)} >
                      {formatPhone(paciente.telefone)}
                      <img src={whatsapp} alt="Ícone de WhatsApp" className={styles.icon} />
                    </span>
                  )}
                />
              </label>
            </div>

          
             
              {!paciente.nomeResponsavel && !paciente.documentoResponsavel && !paciente.grauDeParentesco && !paciente.numeroResponsavel ? (
                <div className={styles.grade2}>
                  <span className={styles.titulo}>Responsável/Contato de emergência</span>
                  <span> Não há dados</span>
                  <span onClick={handleAlterarPaciente}  className={styles.adicionarInfo}> Adicionar informações</span>
                </div>
              ) : (

                <div className={styles.grade2}>
                  <span className={styles.titulo}>Responsável/Contato de emergência</span>
                  {paciente.nomeResponsavel ? (
                    
                    <label>
                      <span className={styles.subTitulo}>Nome Completo: </span>
                      <span>{paciente.nomeResponsavel}</span>
                    </label>
                  ) : 
                  <label>
                      <span className={styles.subTitulo}>Nome Completo: </span>
                      <span onClick={handleAlterarPaciente}  className={styles.adicionarInfo2}> Adicionar</span>
                    </label>}
                  <label>
                 
                    {paciente.documentoResponsavel ? (
                      <MaskedInput
                        mask={[
                          /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/
                        ]}
                        value={formatCPF(paciente.documentoResponsavel)}
                        render={(ref, props) => (
                          <span ref={ref} {...props}>{formatCPF(paciente.documentoResponsavel)}</span>
                        )}
                      />
                    ) : 
                    <label>
                    <span className={styles.subTitulo}>CPF: </span>
                    <span onClick={handleAlterarPaciente}  className={styles.adicionarInfo2}> Adicionar</span>
                  </label>}

                  </label>
                    {paciente.grauDeParentesco ?(
                  <label>
                      <span className={styles.subTitulo}>Grau de Parentesco: </span>
                      <span>{paciente.grauDeParentesco}</span>
                  </label>
                    ):
                    <label>
                      <span className={styles.subTitulo}>Grau de Parentesco: </span>
                      <span onClick={handleAlterarPaciente}  className={styles.adicionarInfo2}> Adicionar</span>
                  </label>
                    }
                  <label>
                    <span className={styles.subTitulo}>Número de Celular: </span>
                    {paciente.numeroResponsavel ? (
                      <MaskedInput
                        mask={[
                          /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/
                        ]}
                        value={formatPhone(paciente.numeroResponsavel)}
                        render={(ref, props) => (
                          <span ref={ref} {...props} className={styles.celular} onClick={() => abrirZapironga(paciente.numeroResponsavel)}>
                            {formatPhone(paciente.numeroResponsavel)}
                            <img src={whatsapp} alt="Ícone de WhatsApp" className={styles.icon} />
                          </span>
                        )}
                      />
                    ) : 
                    <label>

                    <span onClick={handleAlterarPaciente}  className={styles.adicionarInfo2}> Adicionar</span>
                  </label>}
                  
                  </label>
                </div>
              )}

          


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

