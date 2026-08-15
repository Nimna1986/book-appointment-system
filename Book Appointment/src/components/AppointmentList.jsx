const AppointmentList = (props) => {
  return (
      <div className='fullCard'>
          <div className='AppointmentCard'>
              <h2 className='cardTitle'>{props.name}</h2>
              <div className='timeDate'>
                  <p className='time'>{props.time}</p>
                  <p className='date'>{props.date}</p>
              </div>
              <p className='reason'>{props.reason}</p>
          </div>
          <button className={'cancelBtn'}
                  onClick={() => props.cancelAppointment(props.id)}>
              Cancel
          </button>
      </div>
  )
}
export default AppointmentList;