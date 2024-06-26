import 'devextreme/dist/css/dx.light.css';
import { AppointmentDragging, Scheduler, View } from 'devextreme-react/scheduler'
import styles from './Agenda.module.css';
import { locale, loadMessages } from 'devextreme/localization';
import ptMessages from 'devextreme/localization/messages/pt.json';
import ModalAgendamento from '../../components/ModalAgendamento/ModalAgendamento';
import { useEffect, useState } from 'react';
import ApiService from '../../services/ApiService';
import moment from 'moment';

loadMessages(ptMessages);
locale('pt-BR');

export default function Agenda() {

    const [agendamentos, setAgendamentos] = useState([]);
    const [dataSelecionada, setDataSelecionada] = useState();

    const [modalAgendamentoAberto, setModalAgendamentoAberto] = useState(false);

    async function CommitChanges(change) {
        alert('ae');
        console.log(change);
    }

    const handleAppointmentFormOpening = (e) => {
        e.cancel = true;
        const appointmentData = e.appointmentData;
        setModalAgendamentoAberto(true);
    };


    async function ListarAgendamentos() {
        try {
            const dataAtual = dataSelecionada ? dataSelecionada : moment();

            const dataMoment = moment(dataAtual, 'DD/MM/YYYY');
            const diaSemana = dataMoment.day();
            const primeiroDiaSemana = dataMoment.clone().subtract(diaSemana, 'days');
            const ultimoDiaSemana = dataMoment.clone().add(6 - diaSemana, 'days');
            const primeiraData = primeiroDiaSemana.format('DD/MM/YYYY').split('/');
            const ultimaData = ultimoDiaSemana.format('DD/MM/YYYY').split('/');

            const rota = `/Agendamento/ListarAgendamentos?diaInicial=${primeiraData[0]}&mesInicial=${primeiraData[1]}&anoInicial=${primeiraData[2]}&diaFinal=${ultimaData[0]}&mesFinal=${ultimaData[1]}&anoFinal=${ultimaData[2]}`

            const response = await ApiService.get(rota);

            const ag = response.data[0];

            const startDate = moment(`${ag.dataDaConsulta} ${ag.horario}`, 'YYYY-MM-DD HH:mm');
            const endDate = moment(startDate).add(ag.servico.duracao, 'minutes');
            
            const agenda = response.data.map(agendamento => {
                const startDate = moment(`${agendamento.dataDaConsulta} ${agendamento.horario}`, 'YYYY-MM-DD HH:mm');
                const endDate = moment(startDate).add('minutes', agendamento.servico.duracao);

                return {
                    "title": `${agendamento.paciente.nome}`,
                    "startDate": startDate.toISOString(),
                    "endDate": endDate.toISOString(),
                };
            });
            setAgendamentos(agenda);
        } catch (error) {
            console.error("Erro ao listar os agendamentos:", error);
        }
    }


    useEffect(() => {
        ListarAgendamentos();
    }, [])


    useEffect(() => {
        ListarAgendamentos();
    }, [dataSelecionada])

    return (
        <div className={styles.container}>
            <ModalAgendamento
                modalAberto={modalAgendamentoAberto}
                setModalAberto={setModalAgendamentoAberto}
                refresh={ListarAgendamentos}
            ></ModalAgendamento>

            <div className={styles.sidebar}>
                <div className={styles.botaoContainer}>
                    <button className={styles.botaoAgenda} onClick={() => setModalAgendamentoAberto(true)}> + Novo Agendamento</button>
                </div>
            </div>
            <div className={styles.scheduler}>
                <Scheduler
                    id="scheduler"
                    textExpr="title"
                    defaultCurrentView="week"
                    dataSource={agendamentos}
                    timeZone="America/Sao_Paulo"
                    onAppointmentAdded={CommitChanges}
                    onAppointmentFormOpening={handleAppointmentFormOpening}
                    onCurrentDateChange={(e) => setDataSelecionada(e)}
                >
                    <View
                        type="day"
                        startDayHour={1}
                        endDayHour={24}
                    />
                    <View
                        type="week"
                        startDayHour={7}
                        endDayHour={19}
                    />
                </Scheduler>
            </div>
        </div>
    );
}