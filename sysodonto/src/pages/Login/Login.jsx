import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import TextSysOdonto from "../../Assets/TextSysOdonto.svg"

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <>
            <div className="login-wallpaper">
                <div className='container'>

                    <div className="input-container">
                        <img src={TextSysOdonto} />
                        <input
                            className="login-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='E-mail' />
                        <input
                            className="login-input"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder='Senha'
                            type='password' />
                        <div>
                            <button onClick={Login} className="login-button">Entrar</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

