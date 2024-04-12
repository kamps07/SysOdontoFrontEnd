import React, { useEffect, useState } from 'react';
import './Menu.css';
import TextSysOdonto from "../../Assets/TextSysOdonto.svg";
import { useNavigate } from 'react-router-dom';
import AuthService from '../../Services/AuthService';

export default function Home () {
  const [menu, setMenu] = useState('agenda');
  const navigate = useNavigate();

  const handleTabClick = (menu) => {
    setMenu(menu);
  };

  const Dental = () => (
    <div className="dental">
      {'Nome da Clínica'}
    </div>
  );

  function VerificarLogin() {
    const usuarioEstaLogado = AuthService.VerificarSeUsuarioEstaLogado();

    if (!usuarioEstaLogado) {
        navigate("/Login");
    }
  };
  

  useEffect(() => {
    VerificarLogin();
}, []);

  return (
    <div className="menu">
      <div className="agenda" onClick={() => handleTabClick('agenda')}>
        <div className="circle"></div>
        <Dental />
        <span className={menu === 'agenda' ? 'active' : ''}>Agenda</span>
      </div>
      <div className="paciente" onClick={() => handleTabClick('pacientes')}>
        <span className={menu === 'pacientes' ? 'active' : ''}>Pacientes</span>
      </div>
      <div className="financeiro" onClick={() => handleTabClick('financeiro')}>
        <span className={menu === 'financeiro' ? 'active' : ''}>Financeiro</span>
      </div>
      <div className="logo">
        <img src={TextSysOdonto} alt="Logo" />
      </div>
    </div>
  );
}
