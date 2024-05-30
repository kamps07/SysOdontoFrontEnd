import styles from './HeaderProntuario.module.css'
import TextSysOdonto from '../../assets/TextSysOdonto.svg';
import AuthService from '../../services/AuthService'


export default function HeaderProntuario({ paginaSelecionada, setPaginaSelecionada, paciente}) {
  return (
    
    <div className={styles.quadro}>

       

        <div className={styles.nomePaciente}>
            <span> {paciente.nome} </span>
        </div>


      <div className={styles.paginas}>

        <div
          className={paginaSelecionada === "DadosPessoais"
            ? styles.paginaSelecionada
            : styles.pagina}
          onClick={() => setPaginaSelecionada("DadosPessoais")}
        >
          <span >Dados Pessoais</span>
        </div>
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
          className={paginaSelecionada === "Documentos"
            ? styles.paginaSelecionada
            : styles.pagina}
          onClick={() => setPaginaSelecionada("Documentos")}
        >
          <span >Documentos</span>
        </div>
      
      </div>
    </div>

    
    
  );
}