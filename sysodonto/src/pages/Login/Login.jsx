import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextSysOdonto from "../../Assets/TextSysOdonto.svg";
import './Login.css';
import ApiService from '../../Services/ApiService';
import AuthService from '../../Services/AuthService';
import ToastService from '../../Services/ToastService';

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);
    
    const Cadastrar = () => {
        navigate("/Cadastro");
      };
    

    useEffect(() => {
        VerificarLogin();
    }, []);

    function VerificarLogin() {
        const usuarioEstaLogado = AuthService.VerificarSeUsuarioEstaLogado();
        if (usuarioEstaLogado) {
            navigate("/");
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

            const response = await ApiService.post("/Dentista/Login", body);
            const token = response.data.token;

            AuthService.SalvarToken(token);

            ToastService.Success("Seja bem vindo, " + email);

            navigate("/");
        }
        catch (error) {
            if (error.response?.status === 401) {
                ToastService.Error("E-mail e/ou senha inválidos!");
                return;
            }
            ToastService.Error("Houve um erro no servidor ao realizar o seu login\r\nTente novamente mais tarde.");
        }
    }


    return (
        <>


            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className="login-wallpaper">
                <div className='container'>
                    <div className="input-container">
                        <div className='Logo-alinhamento'>
                            <img src={TextSysOdonto} alt="Logo" />
                        </div>
                        <p className='Texto-login'>Faça login na sua conta</p>
                        <input
                            className="login-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Digite seu E-mail' />
                        <input
                            className="login-input"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder='Digite sua Senha'
                            type={mostrarSenha ? 'text' : 'password'} />
                        <div className='alinhamento'>
                            <a
                                className='destaque'
                                onClick={toggleMostrarSenha}
                            >
                                {mostrarSenha ? 'Ocultar Senha' : 'Mostrar Senha'}
                            </a>
                        </div>

                        <button onClick={Login} className="login-button">Entrar</button>

                        <p> Não tem uma conta SysOdonto? <span onClick={Cadastrar} className='destaque'>Cadastre-se agora</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}
