import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <div>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='E-mail' />

            <input
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder='Senha'
                type='Password' />

            <button onClick={Login}>Login</button>
        </div>
    )
}