import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextSysOdonto from "../../Assets/TextSysOdonto.svg";
import './Cadastro.css';



export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [funcao, setFuncao] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarsenha, setConfimarSenha] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const navigate = useNavigate();
    const Navegar = () => {navigate("/")}

    const toggleMostrarSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };

    const funcoes = ["Dentista", "Recepcionista", "Outro"]; // Opções para a caixa

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className="login-wallpaper">
                <div className='container'>
                    <div className="input-container">
                        <div className='Logo-alinhamento'>
                            <img src={TextSysOdonto} alt="Logo" />
                        </div>
                        <p className='Texto-Cadastro'>Cadastre-se</p>

                        <input
                            className="login-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Digite seu E-mail' />
                        <input
                            className="login-input"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder='Digite seu Nome Completo' />
                        <div class="login-select">
                            <select
                                className="funcao-input"
                                value={funcao}
                                onChange={(e) => setFuncao(e.target.value)}
                            >
                                <option value="" disabled hidden>Selecione sua função</option>
                                {funcoes.map((funcao, index) => (
                                    <option key={index} value={funcao}>{funcao}</option>
                                ))}
                            </select>
                        </div>




                        <input
                            className="login-input"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder='Digite sua Senha'
                            type={mostrarSenha ? 'text' : 'password'} />

                        <input
                            className="login-input"
                            value={confirmarsenha}
                            onChange={(e) => setConfimarSenha(e.target.value)}
                            placeholder='Confirme sua Senha'
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

                        <p> Ja possui uma conta no SysOdonto <span className='destaque' onClick={Navegar}>Login</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}
