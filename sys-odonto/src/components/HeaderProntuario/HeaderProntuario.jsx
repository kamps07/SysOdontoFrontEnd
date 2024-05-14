import styles from './HeaderProntuario.module.css'
import TextSysOdonto from '../../assets/TextSysOdonto.svg';
import AuthService from '../../services/AuthService'


export default function HeaderProntuario({ paginaSelecionada, setPaginaSelecionada }) {
  return (
    
    <div className={styles.container}>

<div className={styles.quadro}>

        <div>
            <span> Nome do paciente </span>
        </div>

        

      <div className={styles.paginas}>
        <div
          onClick={() => setPaginaSelecionada("Evolucoes")}
          className={paginaSelecionada === "Evolucoes"
            ? styles.paginaSelecionada
            : styles.pagina}
        >
          <span >Evoluções</span>
        </div>
        <div
          className={paginaSelecionada === "Anamnese"
            ? styles.paginaSelecionada
            : styles.pagina}
          onClick={() => setPaginaSelecionada("Anamnese")}
        >
          <span >Anamnese</span>
        </div>
        <div
          className={paginaSelecionada === "Tratamentos"
            ? styles.paginaSelecionada
            : styles.pagina}
          onClick={() => setPaginaSelecionada("Tratamentos")}
        >
          <span >Tratamentos</span>
        </div>

        <div
          className={paginaSelecionada === "Documentos"
            ? styles.paginaSelecionada
            : styles.pagina}
          onClick={() => setPaginaSelecionada("Documentos")}
        >
          <span >Documentos</span>
        </div>
      
      </div>
    </div>

    </div>
    
  );
}