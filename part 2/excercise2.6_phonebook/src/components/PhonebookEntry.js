const PhonebookEntry = (props) => {
    console.log(props)
    return <li>Nimi: {props.name} Numero: {props.number} <button onClick={() => {props.removeEntry(props)}} value={props.id} type="submit">Delete Entry {props.id}</button></li>
}
export default PhonebookEntry