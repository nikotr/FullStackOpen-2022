import PhonebookEntry from './PhonebookEntry'

const PhonebookList = (props) => {
    //console.log(props.persons)
    //console.log('moi')
    //props.persons.map(person => console.log(person.name))
    return (
<div>
    <p>
        <ul>
         { props.persons.map(person => 
         <PhonebookEntry key={person.name} name={person.name} number={person.number} />
         )}
         </ul>
    </p>
</div>
    )
}
export default PhonebookList