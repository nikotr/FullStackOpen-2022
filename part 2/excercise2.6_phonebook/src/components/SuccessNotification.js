const SuccessNotification = ({message, dismissFunction }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='success'>
        {message}
      </div>
    )
  }
  export default SuccessNotification