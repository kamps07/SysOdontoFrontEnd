import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextSysOdonto from '../../assets/TextSysOdonto.svg'
import styles from './Login.module.css';
import ApiService from '../../services/ApiService';
import AuthService from '../../services/AuthService';
import ToastService from '../../services/ToastService';

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [funcao, setFuncao] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const Cadastrar = () => {
        navigate('/Cadastro');
    };

    useEffect(() => {
        VerificarLogin();
    }, []);

    function VerificarLogin() {
        const usuarioEstaLogado = AuthService.VerificarSeUsuarioEstaLogado();
        if (usuarioEstaLogado) {
            navigate('/');
        }
    }

    const toggleMostrarSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };

    async function Login() {
        try {
            const body = new URLSearchParams({
                email,
                senha,
            });

            const response = await ApiService.post('/Usuarios/Login', body);
            const token = response.data.token;

            AuthService.SalvarToken(token);

            ToastService.Success('Seja bem vindo, ' + email);

            navigate('/');
        }
        catch (error) {
            if (error.response?.status === 401) {
                ToastService.Error('E-mail e/ou senha inválidos!');
                return;
            }
            ToastService.Error('Houve um erro no servidor ao realizar o seu login\r\nTente novamente mais tarde.');
        }
    }

    const funcoes = ['Dentista', 'Recepcionista'];

    return (
        <>


            <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
            <div className={styles.loginWallpaper}>
                <div className={styles.container}>
                    <div className={styles.inputContainer}>
                        <div className={styles.logoAlinhamento}>
                            <img src={TextSysOdonto} alt='Logo' />
                        </div>
                        <p className={styles.textoLogin}>Faça login na sua conta</p>
                        <input
                            className={styles.loginInput}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Digite seu E-mail' />
                        <input
                            className={styles.loginInput}
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder='Digite sua Senha'
                            type={mostrarSenha ? 'text' : 'password'} />
                        <div className={styles.loginSelect}>
                            <select
                                className={styles.funcaoInput}
                                value={funcao}
                                onChange={(e) => setFuncao(e.target.value)}
                            >
                                <option value='' disabled hidden>Selecione sua função</option>
                                {funcoes.map((funcao, index) => (
                                    <option key={index} value={funcao}>{funcao}</option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.alinhamento}>
                            <a
                                className={styles.destaque}
                                onClick={toggleMostrarSenha}
                            >
                                {mostrarSenha ? 'Ocultar Senha' : 'Mostrar Senha'}
                            </a>
                        </div>

                        <button onClick={Login} className={styles.loginButton}>Entrar</button>

                        <p> Não tem uma conta SysOdonto? <span onClick={Cadastrar} className={styles.destaque}>Cadastre-se agora</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}
