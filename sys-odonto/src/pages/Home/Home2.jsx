import React, { useEffect, useState } from 'react';
import TextSysOdonto from '../../assets/TextSysOdonto.svg';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/AuthService';
import styles from './Home.module.css';

export default function Home() {
  const [menu, setMenu] = useState('agenda');
  const navigate = useNavigate();

  const handleTabClick = (menu) => {
    setMenu(menu);
  };

  const Dental = () => (
    <div className={styles.dental}>
      {'Nome da Clínica'}
    </div>
  );

  function VerificarLogin() {
    const usuarioEstaLogado = AuthService.VerificarSeUsuarioEstaLogado();

    if (!usuarioEstaLogado) {
      navigate('/Login');
    }
  };


  useEffect(() => {
    VerificarLogin();
  }, []);

  return (
    <div className={styles.menu}>
      <div className={styles.agenda} onClick={() => handleTabClick('agenda')}>
        <div className={styles.circle}></div>
        <Dental />
        <span className={menu === 'agenda' ? 'active' : ''}>Agenda</span>
      </div>
      <div className={styles.paciente} onClick={() => handleTabClick('pacientes')}>
        <span className={menu === 'pacientes' ? 'active' : ''}>Pacientes</span>
      </div>
      <div className={styles.financeiro} onClick={() => handleTabClick('financeiro')}>
        <span className={menu === 'financeiro' ? 'active' : ''}>Financeiro</span>
      </div>
      <div className={styles.logo}>
        <img src={TextSysOdonto} alt='Logo' />
      </div>
    </div>
  );
}
