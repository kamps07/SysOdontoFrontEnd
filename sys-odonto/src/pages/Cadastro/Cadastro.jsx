import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextSysOdonto from '../../assets/TextSysOdonto.svg';
import styles from './Cadastro.module.css';
import ApiService from '../../services/ApiService';
import AuthService from '../../services/AuthService';
import ToastService from '../../services/ToastService';



export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [funcao, setFuncao] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarsenha, setConfimarSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const navigate = useNavigate();
    const Logar = () => { navigate('/Login') };

    useEffect(() => {
        VerificarLogin();
    }, []);

    function VerificarLogin() {
        const usuarioEstaLogado = AuthService.VerificarSeUsuarioEstaLogado();
        if (usuarioEstaLogado) {
            navigate('/');
        }
    }
    const Cadastro = async () => {
        try {
            const body = {
                email,
                nome,
                funcao,
                senha,
            };

            const response = await ApiService.post('/Usuarios/cadastrar', body);

            ToastService.Success('Agora faça Login');

            navigate('/Login');
        }
        catch (error) {
            ToastService.Error('Houve um erro no servidor ao realizar o seu cadastro\r\nTente novamente mais tarde.');
        }


        if (senha !== confirmarsenha) {
            ToastService.Error('As senhas não coincidem.');
            return;
        }

    };


    const toggleMostrarSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };



    const funcoes = ['Dentista', 'Recepcionista']; // Opções para a caixa

    return (
        <>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
            <div className={styles.loginWallpaper}>
                <div className={styles.container}>
                    <div className={styles.inputContainer}>
                        <div className={styles.logoAlinhamento}>
                            <img src={TextSysOdonto} alt='Logo' />
                        </div>
                        <p className={styles.textoCadastro}>Cadastre-se</p>

                        <input
                            className={styles.loginInput}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Digite seu E-mail' />
                        <input
                            className={styles.loginInput}
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder='Digite seu Nome Completo' />
                        <div class='login-select'>
                            <select
                                className={styles.loginSelect}
                                value={funcao}
                                onChange={(e) => setFuncao(e.target.value)}
                            >
                                <option value='' disabled hidden>Selecione sua função</option>
                                {funcoes.map((funcao, index) => (
                                    <option key={index} value={funcao}>{funcao}</option>
                                ))}
                            </select>
                        </div>
                        <input
                            className={styles.loginInput}
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder='Digite sua Senha'
                            type={mostrarSenha ? 'text' : 'password'} />

                        <input
                            className={styles.loginInput}
                            value={confirmarsenha}
                            onChange={(e) => setConfimarSenha(e.target.value)}
                            placeholder='Confirme sua Senha'
                            type={mostrarSenha ? 'text' : 'password'} />

                        <div className={styles.alinhamento}>
                            <a
                                className={styles.destaque}
                                onClick={toggleMostrarSenha}
                            >
                                {mostrarSenha ? 'Ocultar Senha' : 'Mostrar Senha'}
                            </a>
                        </div>

                        <button onClick={Cadastro} className={styles.loginButton}>Cadastrar</button>

                        <p> Já tem uma conta SysOdonto? <span className={styles.destaque} onClick={Logar}>Faça Login</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}
