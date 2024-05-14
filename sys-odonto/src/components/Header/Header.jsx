import styles from './Header.module.css'
import TextSysOdonto from '../../assets/TextSysOdonto.svg';
import AuthService from '../../services/AuthService'
import { useEffect, useState } from 'react';


export default function Header({ paginaSelecionada, setPaginaSelecionada }) {

  const [logoClinica, setLogoClinica] = useState("");

  function carregarLogo() {
    const userData = AuthService.PegarDadosUsuario();
    setLogoClinica(userData.ImgUrl);
  }

  useEffect(() => {
    carregarLogo();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.logoClinica}>
        <img src={logoClinica} alt='Logo' />
      </div>
      <div className={styles.paginas}>
        <div
          onClick={() => setPaginaSelecionada("Agenda")}
          className={paginaSelecionada === "Agenda"
            ? styles.paginaSelecionada
            : styles.pagina}
        >
          <span >Agenda</span>
        </div>
        <div
          className={paginaSelecionada === "Pacientes"
            ? styles.paginaSelecionada
            : styles.pagina}
          onClick={() => setPaginaSelecionada("Pacientes")}
        >
          <span >Pacientes</span>
        </div>
        <div
          className={paginaSelecionada === "Financeiro"
            ? styles.paginaSelecionada
            : styles.pagina}
          onClick={() => setPaginaSelecionada("Financeiro")}
        >
          <span >Financeiro</span>
        </div>

        <div
          className={paginaSelecionada === "Prontuário"
            ? styles.paginaSelecionada
            : styles.pagina}
          onClick={() => setPaginaSelecionada("Prontuário")}
        >
          <span >Prontuário</span>
        </div>

      </div>
      <div className={styles.containerLogo}>
        <div className={styles.logo}>
          <img src={TextSysOdonto} alt='Logo' />
        </div>
      </div>
    </div>
  );
}