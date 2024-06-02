import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import axios from 'axios';
import styles from './CadastrarPaciente.module.css';
import ApiService from '../../../services/ApiService';
import ToastService from '../../../services/ToastService';

export default function CadastrarPaciente({ fechar }) {
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [genero, setGenero] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [profissao, setProfissao] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [nomeResponsavel, setNomeResponsavel] = useState('');
    const [numeroResponsavel, setNumeroResponsavel] = useState('');
    const [documentoResponsavel, setDocumentoResponsavel] = useState('');
    const [grauDeParentesco, setGrauDeParentesco] = useState('');
    const [outroGrauParentesco, setOutroGrauParentesco] = useState('');
    const [grauDeParentescoModificado, setGrauDeParentescoModificado] = useState(false);
    const [outroGrauParentescoModificado, setOutroGrauParentescoModificado] = useState(false);

    const [camposInativos, setCamposInativos] = useState({
        logradouro: false,
        bairro: false,
        cidade: false,
        estado: false
    });


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

    const CadastrarPaciente = async () => {
        if (!validarDados()) return;

        const telefoneLimpo = limparCaracteresEspeciais(telefone);
        const rgLimpo = limparCaracteresEspeciais(rg);
        const cpfLimpo = limparCaracteresEspeciais(cpf);
        const documentoResponsavelLimpo = limparCaracteresEspeciais(documentoResponsavel);
        const numeroResponsavelLimpo = limparCaracteresEspeciais(numeroResponsavel);

        try {
            const grauParentescoFinal = grauDeParentesco === 'Outro' ? outroGrauParentesco : grauDeParentesco;

            await ApiService.post('/Paciente/CadastrarPaciente', {
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
                grauDeParentesco: grauParentescoFinal,
            });
            ToastService.Success('Paciente Cadastrado');
            fechar();
        } catch (error) {
            ToastService.Error('Houve um erro no servidor ao realizar o seu Cadastro.');
        }
    };

    const validarCep = async (cep) => {
        const cepLimpo = limparCaracteresEspeciais(cep);
        setCep(cepLimpo);
    
        if (cepLimpo.length !== 8 || isNaN(cepLimpo)) {
            return;
        }
    
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`);
            const endereco = response.data;
    
            // Atualize os campos apenas se houver dados retornados
            setLogradouro(endereco.logradouro || '');
            setBairro(endereco.bairro || '');
            setCidade(endereco.localidade || '');
            setEstado(endereco.uf || '');
    
            // Bloqueie apenas os campos que receberam dados
            setCamposInativos({
                logradouro: !!endereco.logradouro,
                bairro: !!endereco.bairro,
                cidade: !!endereco.localidade,
                estado: !!endereco.uf
            });
    
        } catch (error) {
            ToastService.Error('CEP não encontrado!');
            setCep("");
        }
    }
    

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.header}>
                    <label className={styles.titleHeader}>Cadastrar Paciente</label>
                    <svg className={styles.closeIcon} onClick={fechar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </div>
                <div>
                    <label className={styles.tituloCampos}>Informações básicas</label>
                    <div className={styles.inputContainer}>
                        <div className={styles.teste}>
                            <label>
                                Nome: *
                                <input className={styles.loginInput} value={nome} onChange={(e) => setNome(e.target.value)} />
                            </label>
                        </div>
                        <div className={styles.organizacaocoluna}>
                            <label className={styles.dimensaoInput4}>
                                Data de Nascimento: *
                                <input className={styles.loginInput} value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} type="date" />
                            </label>
                            <label className={styles.dimensaoInput4}>
                                Gênero: *
                                <select className={styles.loginInput} value={genero} onChange={(e) => setGenero(e.target.value)}>
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
                                    className={styles.loginInput}
                                    mask="99.999.999-9"
                                    value={rg}
                                    onChange={(e) => setRg(e.target.value)}
                                />
                            </label>
                            <label className={styles.dimensaoInput4}>
                                CPF: *
                                <InputMask
                                    className={styles.loginInput}
                                    mask="999.999.999-99"
                                    value={cpf}
                                    onChange={(e) => setCpf(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className={styles.organizacaocoluna}>
                            <label className={styles.dimensaoInput3}>
                                E-mail: *
                                <input className={styles.loginInput} value={email} onChange={(e) => setEmail(e.target.value)} />
                            </label>
                            <label className={styles.dimensaoInput3}>
                                Telefone: *
                                <InputMask
                                    className={styles.loginInput}
                                    mask="(99) 99999-9999"
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value)}
                                />
                            </label>
                            <label className={styles.dimensaoInput3}>
                                Profissão: *
                                <input className={styles.loginInput} value={profissao} onChange={(e) => setProfissao(e.target.value)} />
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <label className={styles.tituloCampos}>Endereço</label>
                        <div className={styles.inputContainer}>
                            <div className={styles.organizacaocoluna}>
                                <label className={styles.dimensaoInput4}>
                                    CEP: *
                                    <input className={styles.loginInput} value={cep} onChange={(e) => validarCep(e.target.value)} />
                                </label>
                                <label className={styles.dimensaoLogradouro}>
                                    Logradouro: *
                                    <input className={`${styles.loginInput} ${camposInativos.logradouro ? styles.readOnlyInput : ''}`} value={logradouro} onChange={(e) => setLogradouro(e.target.value)} readOnly={camposInativos.logradouro} />
                                </label>
                                <label className={styles.dimensaoInput4}>
                                    Número: *
                                    <input className={styles.loginInput} value={numero} onChange={(e) => setNumero(e.target.value)} />
                                </label>
                            </div>
                            <div className={styles.organizacaocoluna}>
                                <label className={styles.dimensaoInput4}>
                                    Complemento:
                                    <input className={styles.loginInput} value={complemento} onChange={(e) => setComplemento(e.target.value)} />
                                </label>
                                <label className={styles.dimensaoInput4}>
                                    Bairro: *
                                    <input className={`${styles.loginInput} ${camposInativos.bairro ? styles.readOnlyInput : ''}`} value={bairro} onChange={(e) => setBairro(e.target.value)} readOnly={camposInativos.bairro} />
                                </label>
                                <label className={styles.dimensaoInput4}>
                                    Cidade: *
                                    <input className={`${styles.loginInput} ${camposInativos.cidade ? styles.readOnlyInput : ''}`} value={cidade} onChange={(e) => setCidade(e.target.value)} readOnly={camposInativos.cidade} />
                                </label>
                                <label className={styles.dimensaoInput4}>
                                    Estado: *
                                    <input className={`${styles.loginInput} ${camposInativos.estado ? styles.readOnlyInput : ''}`} value={estado} onChange={(e) => setEstado(e.target.value)} readOnly={camposInativos.estado} />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <label className={styles.tituloCampos}>Responsável/Contato de emergência</label>
                    <div className={styles.inputContainer}>
                        <div>
                            <label>
                                Nome do Responsável:
                                <input className={styles.loginInput} value={nomeResponsavel} onChange={(e) => setNomeResponsavel(e.target.value)} />
                            </label>
                        </div>
                        <div className={styles.organizacaocoluna}>
                            <label className={styles.dimensaoInput3}>
                                Número do Responsável:
                                <InputMask
                                    className={styles.loginInput}
                                    mask="(99) 99999-9999"
                                    value={numeroResponsavel}
                                    onChange={(e) => setNumeroResponsavel(e.target.value)}
                                />
                            </label>
                            <label className={styles.dimensaoInput3}>
                                CPF do Responsável:
                                <InputMask
                                    className={styles.loginInput}
                                    mask="999.999.999-99"
                                    value={documentoResponsavel}
                                    onChange={(e) => setDocumentoResponsavel(e.target.value)}
                                />
                            </label>
                            <label className={styles.dimensaoInput3}>
                                Grau de Parentesco:
                                <div className={`${styles.parentescoContainer} ${grauDeParentesco === 'Outro' ? styles.showInput : ''} ${grauDeParentescoModificado ? styles.modified : ''}`}>
                                    <select
                                        className={styles.loginInput}
                                        value={grauDeParentesco}
                                        onChange={(e) => {
                                            setGrauDeParentesco(e.target.value);
                                            setGrauDeParentescoModificado(true); // Marcar como modificado quando o valor for alterado
                                            if (e.target.value !== 'Outro') {
                                                setOutroGrauParentesco(''); // Limpar o campo "outro" se outra opção for selecionada
                                                setOutroGrauParentescoModificado(false); // Marcar como não modificado
                                            }
                                        }}
                                    >
                                        <option value="">Selecione</option>
                                        <option value="Pai/Mãe">Pai/Mãe</option>
                                        <option value="Tio/Tia">Tio/Tia</option>
                                        <option value="Avô/Avó">Avô/Avó</option>
                                        <option value="Outro">Outro</option>
                                    </select>
                                    {grauDeParentesco === 'Outro' && (
                                        <input
                                            className={styles.loginInput}
                                            value={outroGrauParentesco}
                                            onChange={(e) => {
                                                setOutroGrauParentesco(e.target.value);
                                                setOutroGrauParentescoModificado(true); // Marcar como modificado quando o valor for alterado
                                            }}
                                            placeholder="Especifique"
                                        />
                                    )}
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className={styles.buttonAlinhamento}>
                    <button onClick={CadastrarPaciente} className={styles.button}>Finalizar Cadastro</button>
                </div>
            </div>
        </div>
    );
}
