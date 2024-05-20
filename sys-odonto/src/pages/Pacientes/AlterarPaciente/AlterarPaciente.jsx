import React, { useState, useEffect } from 'react';
import styles from './AlterarPaciente.module.css';
import ApiService from '../../../services/ApiService';
import ToastService from '../../../services/ToastService';

export default function AlterarPaciente({ paciente }) {
    const [nome, setNome] = useState('');
    const [nomeModificado, setNomeModificado] = useState(false);
    const [dataNascimento, setDataNascimento] = useState('');
    const [dataNascimentoModificado, setDataNascimentoModificado] = useState(false);
    const [genero, setGenero] = useState('');
    const [generoModificado, setGeneroModificado] = useState(false);
    const [rg, setRg] = useState('');
    const [rgModificado, setRgModificado] = useState(false);
    const [cpf, setCpf] = useState('');
    const [cpfModificado, setCpfModificado] = useState(false);
    const [email, setEmail] = useState('');
    const [emailModificado, setEmailModificado] = useState(false);
    const [telefone, setTelefone] = useState('');
    const [telefoneModificado, setTelefoneModificado] = useState(false);
    const [profissao, setProfissao] = useState('');
    const [profissaoModificado, setProfissaoModificado] = useState(false);
    const [logradouro, setLogradouro] = useState('');
    const [logradouroModificado, setLogradouroModificado] = useState(false);
    const [numero, setNumero] = useState('');
    const [numeroModificado, setNumeroModificado] = useState(false);
    const [complemento, setComplemento] = useState('');
    const [complementoModificado, setComplementoModificado] = useState(false);
    const [cep, setCep] = useState('');
    const [cepModificado, setCepModificado] = useState(false);
    const [bairro, setBairro] = useState('');
    const [bairroModificado, setBairroModificado] = useState(false);
    const [cidade, setCidade] = useState('');
    const [cidadeModificado, setCidadeModificado] = useState(false);
    const [estado, setEstado] = useState('');
    const [estadoModificado, setEstadoModificado] = useState(false);
    const [nomeResponsavel, setNomeResponsavel] = useState('');
    const [nomeResponsavelModificado, setNomeResponsavelModificado] = useState(false);
    const [numeroResponsavel, setNumeroResponsavel] = useState('');
    const [numeroResponsavelModificado, setNumeroResponsavelModificado] = useState(false);
    const [documentoResponsavel, setDocumentoResponsavel] = useState('');
    const [documentoResponsavelModificado, setDocumentoResponsavelModificado] = useState(false);
    const [grauDeParentesco, setGrauDeParentesco] = useState('');
    const [grauDeParentescoModificado, setGrauDeParentescoModificado] = useState(false);

    // Atualiza os inputs com as informações do paciente ao montar o componente
    useEffect(() => {
        if (paciente) {

            const formattedDate = paciente.dataNascimento ? new Date(paciente.dataNascimento).toISOString().substr(0, 10) : '';
            setDataNascimento(formattedDate);

            setNome(paciente.nome || '');
            setDataNascimento(paciente.dataNascimento || '');
            setGenero(paciente.genero || '');
            setRg(paciente.rg || '');
            setCpf(paciente.cpf || '');
            setEmail(paciente.email || '');
            setTelefone(paciente.telefone || '');
            setProfissao(paciente.profissao || '');
            setLogradouro(paciente.logradouro || '');
            setNumero(paciente.numero || '');
            setComplemento(paciente.complemento || '');
            setCep(paciente.cep || '');
            setBairro(paciente.bairro || '');
            setCidade(paciente.cidade || '');
            setEstado(paciente.estado || '');
            setNomeResponsavel(paciente.nomeResponsavel || '');
            setNumeroResponsavel(paciente.numeroResponsavel || '');
            setDocumentoResponsavel(paciente.documentoResponsavel || '');
            setGrauDeParentesco(paciente.grauDeParentesco || '');
        }
    }, [paciente]);

    const validarDados = () => {
        if (!nome || !dataNascimento || !genero || !rg ||
            !cpf || !email || !telefone || !profissao ||
            !logradouro || !numero || !complemento || !cep ||
            !bairro || !cidade || !estado) {
            ToastService.Error('Por favor, preencha todos os campos obrigatórios.');
            return false;
        }

        // Verifica idade
        const dataNascimentoDate = new Date(dataNascimento);
        const hoje = new Date();
        let idade = hoje.getFullYear() - dataNascimentoDate.getFullYear();
        const meses = hoje.getMonth() - dataNascimentoDate.getMonth();
        if (meses < 0 || (meses === 0 && hoje.getDate() < dataNascimentoDate.getDate())) {
            idade--;
        }

        if (idade < 18) {
            if (!nomeResponsavel || !numeroResponsavel || !documentoResponsavel || !grauDeParentesco) {
                ToastService.Error('Preencha os campos obrigatórios do responsável.');
                return false;
            }
        }

        return true;
    };

    const AlterarPaciente = async () => {
        if (!validarDados()) return;

        try {
            const response = await ApiService.put('/Paciente/AlterarPaciente', {
                cpf,
                nome,
                dataNascimento,
                genero,
                rg,
                email,
                telefone,
                profissao,
                logradouro,
                numero,
                complemento,
                cep,
                bairro,
                cidade,
                estado,
                nomeResponsavel,
                numeroResponsavel,
                documentoResponsavel,
                grauDeParentesco
            });
            ToastService.Success('Alterações realizadas');
        } catch (error) {
            ToastService.Error('Erro ao alterar.');
        }
    };

    return (
        <div className={styles.container}>
            <div>
                <label className={styles.titleHeader}> Alterar Paciente </label>
                <div>
                    <label className={styles.tituloCampos}> Informações básicas </label>
                    <div className={styles.inputContainer}>
                        <div className={styles.teste} >
                            <label>
                                Nome: *
                                <input className={`${styles.loginInput} ${nomeModificado ? styles.modified : ''}`} value={nome} onChange={(e) => { setNome(e.target.value); setNomeModificado(true); }} />
                            </label>
                        </div>
                        <div className={styles.organizacaocoluna}>
                            <label className={styles.dimensaoInput4}>
                                Data de Nascimento: *
                                <input className={`${styles.loginInput} ${dataNascimentoModificado ? styles.modified : ''}`} value={dataNascimento} onChange={(e) => { setDataNascimento(e.target.value); setDataNascimentoModificado(true); }}
                                    type="date" />
                            
                            </label>
                            <label className={styles.dimensaoInput4}>
                                Gênero: *
                                <input className={`${styles.loginInput} ${generoModificado ? styles.modified : ''}`} value={genero} onChange={(e) => { setGenero(e.target.value); setGeneroModificado(true); }} />
                            </label>
                            <label className={styles.dimensaoInput4}>
                                RG: *
                                <input className={`${styles.loginInput} ${rgModificado ? styles.modified : ''}`} value={rg} onChange={(e) => { setRg(e.target.value); setRgModificado(true); }} />
                            </label>
                            <label className={styles.dimensaoInput4}>
                                CPF: *
                                <input className={`${styles.loginInput} ${cpfModificado ? styles.modified : ''}`} value={cpf} onChange={(e) => { setCpf(e.target.value); setCpfModificado(true); }} readOnly />
                            </label>
                        </div>
                        <div className={styles.teste1}>
                            <label>
                                E-mail: *
                                <input className={`${styles.loginInput} ${emailModificado ? styles.modified : ''}`} value={email} onChange={(e) => { setEmail(e.target.value); setEmailModificado(true); }} />
                            </label>
                        </div>
                        <div className={styles.organizacaocoluna}>
                            <label className={styles.dimensaoInput2}>
                                Telefone: *
                                <input className={`${styles.loginInput} ${telefoneModificado ? styles.modified : ''}`} value={telefone} onChange={(e) => { setTelefone(e.target.value); setTelefoneModificado(true); }} />
                            </label>
                            <label className={styles.dimensaoInput2}>
                                Profissão: *
                                <input className={`${styles.loginInput} ${profissaoModificado ? styles.modified : ''}`} value={profissao} onChange={(e) => { setProfissao(e.target.value); setProfissaoModificado(true); }} />
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <label className={styles.tituloCampos} > Endereço </label>

                        <div className={styles.inputContainer}>

                            <div className={styles.organizacaocoluna} >
                                <label className={styles.dimensaoLogradouro} >
                                    Logradouro: *
                                    <input className={`${styles.loginInput} ${logradouroModificado ? styles.modified : ''}`} value={logradouro} onChange={(e) => { setLogradouro(e.target.value); setLogradouroModificado(true); }} />
                                </label>
                                <label className={styles.dimensaoNumero}>
                                    Número: *
                                    <input className={`${styles.loginInput} ${numeroModificado ? styles.modified : ''}`} value={numero} onChange={(e) => { setNumero(e.target.value); setNumeroModificado(true); }} />
                                </label>
                            </div>
                            <div className={styles.organizacaocoluna}>
                                <label className={styles.dimensaoInput3}>
                                    Complemento:
                                    <input className={`${styles.loginInput} ${complementoModificado ? styles.modified : ''}`} value={complemento} onChange={(e) => { setComplemento(e.target.value); setComplementoModificado(true); }} />
                                </label>
                                <label className={styles.dimensaoInput3}>
                                    CEP: *
                                    <input className={`${styles.loginInput} ${cepModificado ? styles.modified : ''}`} value={cep} onChange={(e) => { setCep(e.target.value); setCepModificado(true); }} />
                                </label>

                                <label className={styles.dimensaoInput3}>
                                    Bairro: *
                                    <input className={`${styles.loginInput} ${bairroModificado ? styles.modified : ''}`} value={bairro} onChange={(e) => { setBairro(e.target.value); setBairroModificado(true); }} />
                                </label>
                            </div>

                            <div className={styles.organizacaocoluna}>
                                <label className={styles.dimensaoInput2}>
                                    Cidade: *
                                    <input className={`${styles.loginInput} ${cidadeModificado ? styles.modified : ''}`} value={cidade} onChange={(e) => { setCidade(e.target.value); setCidadeModificado(true); }} />
                                </label>
                                <label className={styles.dimensaoInput2}>
                                    Estado: *
                                    <input className={`${styles.loginInput} ${estadoModificado ? styles.modified : ''}`} value={estado} onChange={(e) => { setEstado(e.target.value); setEstadoModificado(true); }} />
                                </label>
                            </div>

                        </div>

                    </div>
                </div>
                <div>
                    <label className={styles.tituloCampos} > Responsável/ Contato de emergência </label>
                    <div className={styles.inputContainer}>
                        <div>
                            <label>
                                Nome do Responsável:
                                <input className={`${styles.loginInput} ${nomeResponsavelModificado ? styles.modified : ''}`} value={nomeResponsavel} onChange={(e) => { setNomeResponsavel(e.target.value); setNomeResponsavelModificado(true); }} />
                            </label>
                        </div>
                        <div className={styles.organizacaocoluna}>
                            <label className={styles.dimensaoInput3}>
                                Número do Responsável:
                                <input className={`${styles.loginInput} ${numeroResponsavelModificado ? styles.modified : ''}`} value={numeroResponsavel} onChange={(e) => { setNumeroResponsavel(e.target.value); setNumeroResponsavelModificado(true); }} />
                            </label>
                            <label className={styles.dimensaoInput3}>
                                Documento do Responsável:
                                <input className={`${styles.loginInput} ${documentoResponsavelModificado ? styles.modified : ''}`} value={documentoResponsavel} onChange={(e) => { setDocumentoResponsavel(e.target.value); setDocumentoResponsavelModificado(true); }} />
                            </label>
                            <label className={styles.dimensaoInput3}>
                                Grau de Parentesco:
                                <input className={`${styles.loginInput} ${grauDeParentescoModificado ? styles.modified : ''}`} value={grauDeParentesco} onChange={(e) => {
                                    setGrauDeParentesco(e.target.value); setGrauDeParentescoModificado(true);
                                }} />
                            </label>
                        </div>
                    </div>
                    <div className={styles.buttonAlinhamento}>
                        <button onClick={AlterarPaciente} className={styles.button}>Alterar Cadastro</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
