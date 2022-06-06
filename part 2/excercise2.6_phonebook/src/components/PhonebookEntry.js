const PhonebookEntry = (props) => {
    console.log(props)
    return <li>Nimi: {props.name} Numero: {props.number} </li>
}
export default PhonebookEntry