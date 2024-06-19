import React, { useState, useEffect } from 'react';
import styles from './AlterarPaciente.module.css';
import ApiService from '../../../services/ApiService';
import ToastService from '../../../services/ToastService';
import InputMask from 'react-input-mask';
import axios from 'axios';

export default function AlterarPaciente({ paciente, fechar, refresh }) {
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
    const [outroGrauParentesco, setOutroGrauParentesco] = useState('');
    const [outroGrauParentescoModificado, setOutroGrauParentescoModificado] = useState(false);
    const [exibirEspecificar, setExibirEspecificar] = useState(false);
    const opcoesGrauParentesco = ["Pai/Mãe", "Tio/Tia", "Avô/Avó"];


    useEffect(() => {
        if (paciente) {
            const formattedDate = paciente.dataNascimento ? new Date(paciente.dataNascimento).toISOString().substr(0, 10) : '';
            setDataNascimento(formattedDate);
            setNome(paciente.nome || '');
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

            const grauParentesco = paciente.grauDeParentesco || '';
            if (opcoesGrauParentesco.includes(grauParentesco)) {
                // Se o grau de parentesco estiver nas opções pré-definidas
                setGrauDeParentesco(grauParentesco);
                setOutroGrauParentesco('');
                setExibirEspecificar(false);
            } else {
                // Se o grau de parentesco não estiver nas opções pré-definidas
                setGrauDeParentesco('Outro');
                setOutroGrauParentesco(grauParentesco);
                setExibirEspecificar(true);
            }


        }
    }, [paciente]);

    const limparCaracteresEspeciais = (texto) => {
        return texto.replace(/[^\w\s]/gi, '');
    };
  

    const validarDados = () => {
        if (!nome || !dataNascimento || !genero || !rg ||
            !cpf || !email || !telefone || !profissao ||
            !logradouro || !numero || !cep ||
            !bairro || !cidade || !estado) {
            ToastService.Error('Por favor, preencha todos os campos obrigatórios.');
            return false;
        }

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

        const telefoneLimpo = limparCaracteresEspeciais(telefone);
        const rgLimpo = limparCaracteresEspeciais(rg);
        const cpfLimpo = limparCaracteresEspeciais(cpf);
        const documentoResponsavelLimpo = limparCaracteresEspeciais(documentoResponsavel);
        const numeroResponsavelLimpo = limparCaracteresEspeciais(numeroResponsavel);

        try {

            await ApiService.put('/Paciente/AlterarPaciente', {

                nome,
                dataNascimento,
                rg: rgLimpo,
                cpf: cpfLimpo,
                genero,
                email,
                telefone: telefoneLimpo,
                profissao,
                logradouro,
                numero,
                complemento,
                cep,
                bairro,
                cidade,
                estado,
                nomeResponsavel,
                numeroResponsavel: numeroResponsavelLimpo,
                documentoResponsavel: documentoResponsavelLimpo,
                grauDeParentesco: grauDeParentesco === 'Outro' ? outroGrauParentesco : grauDeParentesco,
            });
            ToastService.Success('Alterações realizadas');
            refresh();
            fechar();
        } catch (error) {
            ToastService.Error('Erro ao alterar.');
            console.log(error)
        }
    };

    const [camposInativos, setCamposInativos] = useState({
        logradouro: false,
        bairro: false,
        cidade: false,
        estado: false
    });
    

    const validarCep = async (cep) => {
        const cepLimpo = limparCaracteresEspeciais(cep);
        setCep(cepLimpo);
    
        if (cepLimpo.length !== 8 || isNaN(cepLimpo)) {
            return;
        }
    
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`);
            const endereco = response.data;
    
            setBairro(endereco.bairro);
            setCidade(endereco.localidade);
            setEstado(endereco.uf);
            setLogradouro(endereco.logradouro);
    
            setCamposInativos({
                logradouro: !!endereco.logradouro,
                bairro: !!endereco.bairro,
                cidade: !!endereco.localidade,
                estado: !!endereco.uf
            });
    
        } catch (error) {
            ToastService.Error('CEP não encontrado!');
            setCep("");
            
            setCamposInativos({
                logradouro: false,
                bairro: false,
                cidade: false,
                estado: false
            });
        }
    };
    



    return (
        <div className={styles.container}>
            <div>
                <div className={styles.header}>
                    <label className={styles.titleHeader}>Alterar Paciente</label>
                    <svg className={styles.closeIcon} onClick={fechar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </div>
                <div>
                    <label className={styles.tituloCampos}>Informações básicas</label>
                    <div className={styles.inputContainer}>
                        <div className={styles.teste}>
                            <label>
                                Nome: *
                                <input className={`${styles.loginInput} ${nomeModificado ? styles.modified : ''}`} value={nome} onChange={(e) => { setNome(e.target.value); setNomeModificado(true); }} />
                            </label>
                        </div>
                        <div className={styles.organizacaocoluna}>
                            <label className={styles.dimensaoInput4}>
                                Data de Nascimento: *
                                <input className={`${styles.loginInput} ${dataNascimentoModificado ? styles.modified : ''}`} value={dataNascimento} onChange={(e) => { setDataNascimento(e.target.value); setDataNascimentoModificado(true); }} type="date" />
                            </label>
                            <label className={styles.dimensaoInput4}>
                                Gênero: *
                                <select className={`${styles.loginInput} ${generoModificado ? styles.modified : ''}`} value={genero} onChange={(e) => { setGenero(e.target.value); setGeneroModificado(true); }}>
                                    <option value="">Selecione</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Feminino">Feminino</option>
                                    <option value="Outro">Outro</option>
                                    <option value="Prefiro não dizer">Prefiro não dizer</option>
                                </select>
                            </label>
                            <label className={styles.dimensaoInput4}>
                                RG: *

                                <InputMask
                                    className={`${styles.loginInput} ${rgModificado ? styles.modified : ''}`} value={rg} onChange={(e) => { setRg(e.target.value); setRgModificado(true); }}
                                    mask="99.999.999-9"
                                />
                            </label>
                            <label className={styles.dimensaoInput4}>
                                CPF: *
                                < InputMask className={`${styles.loginInput} ${cpfModificado ? styles.modified : ''}`} mask="999.999.999-99" value={cpf} onChange={(e) => { setCpf(e.target.value); setCpfModificado(true); }} readOnly />
                            </label>
                        </div>
                        <div className={styles.organizacaocoluna}>
                            <label className={styles.dimensaoInput3}>
                                E-mail: *
                                <input className={`${styles.loginInput} ${emailModificado ? styles.modified : ''}`} value={email} onChange={(e) => { setEmail(e.target.value); setEmailModificado(true); }} />
                            </label>
                            <label className={styles.dimensaoInput3}>
                                Telefone: *
                                <InputMask className={`${styles.loginInput} ${telefoneModificado ? styles.modified : ''}`} mask="(99) 99999-9999" value={telefone} onChange={(e) => { setTelefone(e.target.value); setTelefoneModificado(true); }} />
                            </label>
                            <label className={styles.dimensaoInput3}>
                                Profissão: *
                                <input className={`${styles.loginInput} ${profissaoModificado ? styles.modified : ''}`} value={profissao} onChange={(e) => { setProfissao(e.target.value); setProfissaoModificado(true); }} />
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <label className={styles.tituloCampos}>Endereço</label>
                    <div className={styles.inputContainer}>
                        <div className={styles.organizacaocoluna}>
                            <label className={styles.dimensaoInput4}>
                                CEP: *
                                <input className={`${styles.loginInput} ${cepModificado ? styles.modified : ''}`} value={cep} onChange={(e) => { setCep(e.target.value); setCepModificado(true); validarCep(e.target.value); }} />

                            </label>
                            <label className={styles.dimensaoLogradouro}>
                                Logradouro: *
                                <input className={`${styles.loginInput} ${logradouroModificado ? styles.modified : ''}`} readOnly={camposInativos.logradouro} value={logradouro} onChange={(e) => { setLogradouro(e.target.value); setLogradouroModificado(true); }} />
                            </label>
                            <label className={styles.dimensaoInput4}>
                                Número: *
                                <input className={`${styles.loginInput} ${numeroModificado ? styles.modified : ''}`} value={numero} onChange={(e) => { setNumero(e.target.value); setNumeroModificado(true); }} />
                            </label>
                        </div>
                        <div className={styles.organizacaocoluna}>
                            <label className={styles.dimensaoInput4}>
                                Complemento:
                                <input className={`${styles.loginInput} ${complementoModificado ? styles.modified : ''}`} value={complemento} onChange={(e) => { setComplemento(e.target.value); setComplementoModificado(true); }} />
                            </label>
                            <label className={styles.dimensaoInput4}>
                                Bairro: *
                                <input className={`${styles.loginInput} ${bairroModificado ? styles.modified : ''}`} readOnly={camposInativos.bairro} value={bairro} onChange={(e) => { setBairro(e.target.value); setBairroModificado(true); }} />
                            </label>
                            <label className={styles.dimensaoInput4}>
                                Cidade: *
                                <input className={`${styles.loginInput} ${cidadeModificado ? styles.modified : ''}`} readOnly={camposInativos.cidade} value={cidade} onChange={(e) => { setCidade(e.target.value); setCidadeModificado(true); }} />
                            </label>
                            <label className={styles.dimensaoInput4}>
                                Estado: *
                                <input className={`${styles.loginInput} ${estadoModificado ? styles.modified : ''}`} readOnly={camposInativos.estado} value={estado} onChange={(e) => { setEstado(e.target.value); setEstadoModificado(true); }} />
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <label className={styles.tituloCampos}>Responsável/ Contato de emergência</label>
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
                                <InputMask className={`${styles.loginInput} ${numeroResponsavelModificado ? styles.modified : ''}`} mask="(99) 99999-9999" value={numeroResponsavel} onChange={(e) => { setNumeroResponsavel(e.target.value); setNumeroResponsavelModificado(true); }} />
                            </label>
                            <label className={styles.dimensaoInput3}>
                                Documento do Responsável:
                                <InputMask className={`${styles.loginInput} ${documentoResponsavelModificado ? styles.modified : ''}`} mask="999.999.999-99" value={documentoResponsavel} onChange={(e) => { setDocumentoResponsavel(e.target.value); setDocumentoResponsavelModificado(true); }} />
                            </label>

                            <label className={`${styles.dimensaoInput3}`}>
                                Grau de Parentesco:
                                <div className={`${styles.parentescoContainer} ${grauDeParentescoModificado ? styles.modified : ''}`}>
                                    <select
                                        className={`${styles.loginInput} ${grauDeParentescoModificado ? styles.modified : ''}`}
                                        value={grauDeParentesco}
                                        onChange={(e) => {
                                            setGrauDeParentesco(e.target.value);
                                            setGrauDeParentescoModificado(true);
                                            if (e.target.value !== 'Outro') {
                                                setOutroGrauParentesco('');
                                                setOutroGrauParentescoModificado(false);
                                                setExibirEspecificar(false); // Esconder campo de especificação
                                            } else {
                                                setExibirEspecificar(true); // Exibir campo de especificação
                                            }
                                        }}
                                    >
                                        <option value="">Selecione</option>
                                        <option value="Pai/Mãe">Pai/Mãe</option>
                                        <option value="Tio/Tia">Tio/Tia</option>
                                        <option value="Avô/Avó">Avô/Avó</option>
                                        <option value="Outro">Outro</option>
                                    </select>
                                    {exibirEspecificar && (
                                        <input
                                            className={`${styles.loginInput} ${outroGrauParentescoModificado ? styles.modified : ''}`}
                                            value={outroGrauParentesco}
                                            onChange={(e) => {
                                                setOutroGrauParentesco(e.target.value);
                                                setOutroGrauParentescoModificado(true);
                                            }}
                                            placeholder="Especifique"
                                        />
                                    )}
                                </div>
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