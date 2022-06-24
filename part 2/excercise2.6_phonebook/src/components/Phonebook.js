import PhoneBookList from './PhonebookList'
import PhonebookInput from './PhonebookInput'
import PhoneBookEntryFilter from './PhonebookEntryFilter'

const PhoneBook = (props) => {
    //console.log(props.filterFunction)
    //console.log(props.persons)
    return (

       <div>
            <h2>Phonebook</h2>
           <PhonebookInput addEntry={props.addEntry} handleChangeNumber={props.handleChangeNumber} handleChangeName={props.handleChangeName} />
           <h2>Numbers</h2>
           <p>Filter:
           <PhoneBookEntryFilter filterFunction={props.filterFunction} />
           </p>
           <div>
           <PhoneBookList persons={props.persons} removeEntry={props.removeEntry} />
           </div>
       </div>
    )
}
export default PhoneBook