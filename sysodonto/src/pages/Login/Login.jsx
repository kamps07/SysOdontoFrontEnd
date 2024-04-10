import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import TextSysOdonto from "../../Assets/TextSysOdonto.svg";
import './Login.css';


export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const navigate = useNavigate();
    const Navegar = () => {navigate("/Cadastro")}

    const toggleMostrarSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };

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

                        <button className="login-button">Entrar</button>

                        <p> Não tem uma conta SysOdonto? <span className='destaque' onClick={Navegar}>Cadastre-se agora</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}
