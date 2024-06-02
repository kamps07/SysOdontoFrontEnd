import styles from './Header.module.css'
import TextSysOdonto from '../../assets/TextSysOdonto.svg';
import AuthService from '../../services/AuthService'
import { useEffect, useState } from 'react';
import ModalCadastroClinica from '../ModalCadastroClínica/ModalCadastroClínica';


export default function Header({ paginaSelecionada, setPaginaSelecionada }) {

  const [logoClinica, setLogoClinica] = useState("");
  const [modalAberto, setModalAberto] = useState(false);

  function carregarLogo() {
    const userData = AuthService.PegarDadosUsuario();
    setLogoClinica(userData.ImgUrl);
  }

  useEffect(() => {
    carregarLogo();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.logoClinica} onClick={() => setModalAberto(true)}> {/* Adiciona o evento de clique para abrir o modal */}
        <img src={logoClinica} alt='Logo' />
      </div>
      <ModalCadastroClinica modalAberto={modalAberto} setModalAberto={setModalAberto} /> {/* Renderiza o modal de cadastro de clínica */}
      
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
          <span >Prontuários</span>
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