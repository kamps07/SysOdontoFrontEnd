
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Importe o arquivo CSS onde você irá definir os estilos

export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <div className="login-container">
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

            <button onClick={Login}>Login</button>
        </div>
    );
}
