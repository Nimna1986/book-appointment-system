const Message = (props) => {
    const showCancelBtn = props.message.isCanceled || props.message.isSuccessful;

    return (
        <div>
            {/*Successful message*/}
            {props.message.isSuccessful &&
                <section className='message'
                         style={{backgroundColor: '#4BB543'}}>
                    <h1>{props.message.successMessage}</h1>
                    <img src='/close.png'
                         alt='Close'
                         className='closeImg'
                         onClick={() => {
                             props.setMessage(prevMessage => (
                                 {
                                     ...prevMessage,
                                     isSuccessful: false,
                                 }
                                 ));
                             }}/>
                </section>
            }
            {/*Cancelled message*/}
            {props.message.isCanceled &&
                <section className='message'
                         style={{backgroundColor: 'red'}}>
                    <h1>{props.message.cancelMessage}</h1>
                    <img src='/close.png'
                         alt='Close'
                         className='closeImg'
                         onClick={() => {
                             props.setMessage(prevMessage => (
                                 {
                                     ...prevMessage,
                                     isCanceled: false,
                                 }
                                 ));
                             }}/>
                </section>
            }
        </div>
    )
}
export default Message;