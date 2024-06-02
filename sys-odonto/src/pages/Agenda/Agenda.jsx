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
            const response = await ApiService.get('/Agendamento/ListarAgendamentos?dia=29&mes=05&ano=2024');

            const ag = response.data[0];
            console.log(ag.servico.duracao)

            const startDate = moment(`${ag.dataDaConsulta} ${ag.horario}`, 'YYYY-MM-DD HH:mm');
            const endDate = moment(startDate).add(ag.servico.duracao, 'minutes');
            console.log(startDate.toISOString());
            console.log(endDate.toISOString());
            const agenda = response.data.map(agendamento => {
                const startDate = moment(`${agendamento.dataDaConsulta} ${agendamento.horario}`, 'YYYY-MM-DD HH:mm');
                const endDate = moment(startDate).add('minutes', agendamento.servico.duracao);

                return {
                    "title": `${agendamento.servico.nome} - ${agendamento.paciente.nome}`,
                    "startDate": startDate.toISOString(),
                    "endDate": endDate.toISOString(),
                };
            });

            console.log(agenda);
            setAgendamentos(agenda);
        } catch (error) {
            console.error("Erro ao listar os agendamentos:", error);
        }
    }


    useEffect(() => {
        ListarAgendamentos();
    }, [])


    return (
        <div className={styles.container}>
            <ModalAgendamento
                modalAberto={modalAgendamentoAberto}
                setModalAberto={setModalAgendamentoAberto}
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
                >
                    <View
                        type="day"
                        startDayHour={1}
                        endDayHour={24}
                    />
                    <View
                        type="week"
                        startDayHour={4}
                        endDayHour={22}
                    />
                </Scheduler>
            </div>
        </div>
    );
}