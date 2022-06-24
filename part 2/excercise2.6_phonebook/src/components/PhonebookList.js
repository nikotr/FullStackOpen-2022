import PhonebookEntry from './PhonebookEntry'

const PhonebookList = (props) => {
    //console.log(props.persons)
    //console.log('moi')
    //props.persons.map(person => console.log(person.name))
    return (
<div>
    <div>
        <ul>
         { props.persons.map(person => 
         <PhonebookEntry key={person.name} name={person.name} number={person.number} removeEntry={props.removeEntry} id={person.id}/>
         )}
         </ul>
    </div>
</div>
    )
}
export default PhonebookList