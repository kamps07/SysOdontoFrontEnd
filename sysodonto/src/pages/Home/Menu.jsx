import React, { useState } from 'react';
import './Menu.css';
import TextSysOdonto from "../../Assets/TextSysOdonto.svg";

const Menu = () => {
  const [menu, setMenu] = useState('agenda');

  const handleTabClick = (menu) => {
    setMenu(menu);
  };

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
};

const Dental = () => (
  <div className="dental">
    {'Nome da Clínica'}
  </div>
);

export default Menu;
