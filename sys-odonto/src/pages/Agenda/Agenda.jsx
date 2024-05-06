import 'devextreme/dist/css/dx.light.css';
import { Scheduler, View } from 'devextreme-react/scheduler'
import styles from './Agenda.module.css';
import { locale, loadMessages } from 'devextreme/localization';
import ptMessages from 'devextreme/localization/messages/pt.json';
import { EditingState } from '@devexpress/dx-react-scheduler';
import PaginaTesteVerde from '../PaginaTesteVerde/PaginaTesteVerde';
import ModalAgendamento from '../../components/ModalAgendamento/ModalAgendamento';
import { useState } from 'react';

loadMessages(ptMessages);
locale('pt-BR');

export default function Agenda() {

    const [modalAgendamentoAberto, setModalAgendamentoAberto] = useState(false);

    const eventos = [
        {
            title: "Install New Database",
            startDate: new Date("2024-04-25T20:45:00.000Z"),
            endDate: new Date("2024-04-25T21:10:00.000Z"),
        }, {
            title: "Create New Online Marketing Strategy",
            startDate: new Date("2024-04-25T21:45:00.000Z"),
            endDate: new Date("2024-04-25T22:10:00.000Z"),
        },
    ]

    async function CommitChanges(change) {
        alert('ae');
        console.log(change);
    }

    const handleAppointmentFormOpening = (e) => {
        e.cancel = true;
        const appointmentData = e.appointmentData;
        setModalAgendamentoAberto(true);
    };

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

                    defaultCurrentView="week"
                    dataSource={eventos}
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
                        startDayHour={10}
                        endDayHour={22}
                    />
                </Scheduler>
            </div>
        </div>
    );
}