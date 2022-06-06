const PhoneBookInput = (props) => {

    return (
        <form>
        <div>
          name: <input onChange={props.handleChangeName}/>
          <br />
          number: <input onChange={props.handleChangeNumber}/>
        </div>
        <div>
          <button onClick={props.addEntry} type="submit">add</button>
        </div>
      </form>

    )
}
export default PhoneBookInput