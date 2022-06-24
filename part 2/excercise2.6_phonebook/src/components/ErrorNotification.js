const ErrorNotification = ({message, dismissFunction }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='error'>
        {message} <button onClick={() => {dismissFunction()}}  type="submit">dismiss error</button>
      </div>
    )
  }
  export default ErrorNotification