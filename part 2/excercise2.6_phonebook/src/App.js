import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [listFilter, setListFilter] = useState('')
  
const addEntry=(event) => {
  event.preventDefault()
  //console.log(newName)
  const onkoJo = persons.filter(person => person.name === newName)
  //console.log(onkoJo.length)
  //console.log(onkoJo)
  if (onkoJo.length>=1) {
     alert(`Henkilö ${newName} on jo listalla!`)
     console.log(`Henkilö ${newName} on jo listalla!`)
  }else if(newName != "") {
    const personObject={
      name: newName,
      number: newNumber
    }
    //console.log(persons.concat(personObject))
    setPersons(persons.concat(personObject))
  }
  persons.map(person => console.log(person.name))
}
const handleChangeName=(event)=> {
  setNewName(event.target.value)
}
const handleChangeNumber=(event)=> {
  setNewNumber(event.target.value)
}
const setSearchFilter =(event)=> {
setListFilter(event.target.value)
}

const getFilter = (persons,filter) => {

  //console.log(persons)
  //console.log(filter)
  const filterResult=persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  return filterResult
}


const persons_filtered = getFilter(persons,listFilter)
//const persons_filtered = persons
  return (
    <div>
      <div>debug name: {newName}</div>
      <div>debug number: {newNumber}</div>
      <div>debug filter: {listFilter}</div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleChangeName}/>
          number: <input onChange={handleChangeNumber}/>
        </div>
        <div>
          <button onClick={addEntry} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <input onChange={setSearchFilter} />
        <ul>
          {persons_filtered.map(person => <li key={person.name}>Nimi: {person.name} Numero: {person.number}</li>)}
        </ul>
      </div>
      
    </div>
  )
}

export default App