const Header = (props) => {
    return (
        <header className="header">
            <div className='logo'>
                <img src='appointment.png' className={'date-logo'}/>
                <h1 className={'title'}>Book Your Appointment</h1>
            </div>
            <div>
                {/*To book new appointment*/}
                <button className='menu' onClick={() => props.setIsNewAppointment(true)}>
                    New Appointment
                </button>

                {/*To see the booked appoinments*/}
                <button className='menu' onClick={() => props.setIsNewAppointment(false)}>
                    Booked Appointments
                </button>
            </div>
        </header>
    )
}
export default Header;