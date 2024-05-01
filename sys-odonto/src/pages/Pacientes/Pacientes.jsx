import React, { useState, useEffect } from 'react';
import styles from './Pacientes.module.css';
import ApiService from '../../services/ApiService';
import ToastService from '../../services/ToastService';
import { Background } from 'devextreme-react/cjs/range-selector';
import { BackgroundColor } from 'devextreme-react/cjs/chart';



export default function Pacientes() {

    const [nome, setNome] = useState('');
    const [dataNascimento, setDataDeNascimento] = useState('');
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


    const CadastrarPaciente = async () => {

        try {
            const body = {
                nome,
                dataNascimento,
                genero,
                rg,
                cpf,
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
            };

            const response = await ApiService.post('/Paciente/CadastrarPaciente', body);

            ToastService.Success('Paciente Cadastrado');

        }

        catch (error) {
            ToastService.Error('Houve um erro no servidor ao realizar o seu Cadastro.');
        }
    }


    return (

        <div className={styles.container}>

            <div >
                <label className={styles.titleHeader}> Cadastrar Paciente </label>

                <div>

                    <label className={styles.espacamento}>  Informações básicas </label>
                    <div className={styles.inputContainer}>
                        <div>
                            <label>
                                Nome:
                                <input
                                    className={styles.loginInput}
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </label>

                        </div>

                        <div>

                            <label>
                                Data de Nascimento:
                                <input
                                    className={styles.loginInput}
                                    value={dataNascimento}
                                    onChange={(e) => setDataDeNascimento(e.target.value)}
                                    type="date"
                                />
                            </label>

                            <label>
                                Gênero:
                                <input
                                    className={styles.loginInput}
                                    value={genero}
                                    onChange={(e) => setGenero(e.target.value)}
                                />
                            </label>

                            <label>
                                RG:
                                <input
                                    className={styles.loginInput}
                                    value={rg}
                                    onChange={(e) => setRg(e.target.value)}
                                />
                            </label>

                            <label>
                                CPF:
                                <input
                                    className={styles.loginInput}
                                    value={cpf}
                                    onChange={(e) => setCpf(e.target.value)}
                                />
                            </label>

                        </div>

                        <div>

                            <label>
                                E-mail:
                                <input
                                    className={styles.loginInput}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>

                        </div>

                        <div>


                            <label>
                                Telefone:
                                <input
                                    className={styles.loginInput}
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value)}
                                />
                            </label>

                            <label>
                                Profissão:
                                <input
                                    className={styles.loginInput}
                                    value={profissao}
                                    onChange={(e) => setProfissao(e.target.value)}
                                />
                            </label>


                        </div>
                    </div>

                </div>

                <div>

                    <div>

                        <label> Endereço </label>

                        <div>

                        </div>

                        <div className={styles.inputContainer}>

                            <div>

                                <label>
                                    Logradouro:

                                    <input
                                        className={styles.loginInput}
                                        value={logradouro}
                                        onChange={(e) => setLogradouro(e.target.value)}
                                    />
                                </label>

                                <label>
                                    Número:
                                    <input
                                        className={styles.loginInput}
                                        value={numero}
                                        onChange={(e) => setNumero(e.target.value)}
                                    />
                                </label>
                            </div>


                            <div>


                                <label>
                                    Complemento:
                                    <input
                                        className={styles.loginInput}
                                        value={complemento}
                                        onChange={(e) => setComplemento(e.target.value)}
                                    />
                                </label>

                                <label>
                                    CEP:
                                    <input
                                        className={styles.loginInput}
                                        value={cep}
                                        onChange={(e) => setCep(e.target.value)}
                                    />
                                </label>
                            </div>



                            <label>
                                Bairro:
                                <input
                                    className={styles.loginInput}
                                    value={bairro}
                                    onChange={(e) => setBairro(e.target.value)}
                                />
                            </label>


                            <label>
                                Cidade:
                                <input
                                    className={styles.loginInput}
                                    value={cidade}
                                    onChange={(e) => setCidade(e.target.value)}
                                />
                            </label>

                            <label>
                                Estado:
                                <input
                                    className={styles.loginInput}
                                    value={estado}
                                    onChange={(e) => setEstado(e.target.value)}
                                />
                            </label>

                        </div>
                    </div>
                </div>

                <div>

                    <label> Responsável/Contato de emergência </label>


                    <div className={styles.inputContainer}>

                        <div>

                            <label>
                                Nome do Responsável:
                                <input
                                    className={styles.loginInput}
                                    value={nomeResponsavel}
                                    onChange={(e) => setNomeResponsavel(e.target.value)}
                                />
                            </label>
                        </div>

                        <div>


                            <label>
                                Número do Responsável:
                                <input
                                    className={styles.loginInput}
                                    value={numeroResponsavel}
                                    onChange={(e) => setNumeroResponsavel(e.target.value)}
                                />
                            </label>

                            <label>
                                Documento do Responsável:
                                <input
                                    className={styles.loginInput}
                                    value={documentoResponsavel}
                                    onChange={(e) => setDocumentoResponsavel(e.target.value)}
                                />
                            </label>

                            <label>
                                Grau de Parentesco:
                                <input
                                    className={styles.loginInput}
                                    value={grauDeParentesco}
                                    onChange={(e) => setGrauDeParentesco(e.target.value)}
                                />
                            </label>
                        </div>
                    </div>

                    <button onClick={CadastrarPaciente} className={styles.loginButton}>Cadastrar</button>
                </div>
            </div>
        </div>
    );


}