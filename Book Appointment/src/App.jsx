import './App.css'
import {useEffect, useState} from "react";
import Appointment from "./components/AppointmentForm.jsx";
import Header from "./components/header.jsx";
import AppointmentList from "./components/AppointmentList.jsx";
import Message from "./components/message.jsx";
import axios from "axios";

const App = () => {
    const [appointmentDetails, setAppointmentDetails] = useState([])
    const [isNewAppointment, setIsNewAppointment] = useState(true)
    const [toggle, setToggle] = useState(true)

    // Making an api call to get all  the details of booked appointments
    useEffect(() => {
        axios.get('http://localhost:5500/api/v1/appointments')
        .then(res => {
            console.log(res.data.data);
            setAppointmentDetails(res.data.data);
        })

    }, [toggle]);

    const [message, setMessage] = useState({
        isSuccessful: false,
        successMessage: 'You have placed your appointment successfully!',
        isCanceled: false,
        cancelMessage: 'You have canceled your appointment!',
    })

    // Cancelling appointment
    const cancelAppointment = (id) => {
        axios.delete(`http://localhost:5500/api/v1/appointments/${id}`)
        setToggle(!toggle)
        setMessage(prevMessage => (
            {...prevMessage,
                isCanceled: true
            }
            )
        )
    }
    // Mapping Appointment list
    const listOfAppointments = appointmentDetails.map((appointment) =>
        <AppointmentList
            name={appointment.name}
            date={new Date(appointment.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })}
            time={appointment.time}
            reason={appointment.reason}
            id={appointment._id}
            key={appointment._id}
            cancelAppointment={cancelAppointment}
        />
    )



    return (
        <main>
            <Header isNewAppointment={isNewAppointment} setIsNewAppointment={setIsNewAppointment} />
            <div className={'main'}>
                <Message message={message} setMessage={setMessage} />
                <section>
                    {isNewAppointment ?
                        <Appointment
                            setAppointmentDetails={setAppointmentDetails}
                            setMessage={setMessage}
                            setToggle={setToggle}
                            toggle={toggle}
                        /> :
                        <div className={'AppointmentList'}>
                            {listOfAppointments}
                        </div>
                    }
                </section>
            </div>
        </main>
    )
}

export default App
