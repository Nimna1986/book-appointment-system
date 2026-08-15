import axios from "axios";

const Appointment = (props) => {
    const today = new Date().toISOString().split('T')[0];

    // When Submit button clicked
    const submit = (formData) => {
        props.setMessage(prevMessage =>(
            {...prevMessage,
                isSuccessful:  true}
            )
        )
        const data = Object.fromEntries(formData);

        // Making an api call to book an appointment
        axios.post('http://localhost:5500/api/v1/appointments', {
            name : data.nameTxt,
            date : data.bookingDate,
            time : data.bookingTime,
            reason : data.bookingReason,
        })
            .then(res => {
                props.setAppointmentDetails(prevState => [...prevState, res.data]);
            })
        props.setToggle(!props.toggle);

    }

    return (
        <div className='appointment'>
            <form action={submit}>
                <div className={'formEl'}>
                    <label htmlFor='nameTxt'>Name</label>
                    <input id='nameTxt' name='nameTxt' type='text' required placeholder="Peter Parker"/>
                </div>
                <div className={'formEl'}>
                    <label htmlFor='bookingDate'>Date & Time</label>
                    <input id='bookingDate' name='bookingDate' type='date' min={today} required />
                    <input id='bookingTime' name={'bookingTime'} type='time' step="900" min='09:00' max='18:00'  required/>
                </div>
                <div className={'formEl'}>
                    <label htmlFor='bookingReason'>The reason for this appointment</label>
                    <textarea id='bookingRaeson' name='bookingReason' required ></textarea>
                </div>
                <button className={'submitBtn'}>Submit</button>
            </form>
        </div>
    )
}
export default Appointment;