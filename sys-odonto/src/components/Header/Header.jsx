import styles from './Header.module.css'
import AuthService from '../../services/AuthService'


export default function Header({ paginaSelecionada, setPaginaSelecionada }) {
  return (
    <div className={styles.container}>
      <div className={styles.logoClinica}>

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
      </div>
      <div className={styles.logo}>

      </div>
    </div>
  );
}