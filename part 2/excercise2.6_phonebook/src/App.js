/*
Exercises 2.6-2.10 + 2.11
*/

import DebugInfo from './components/DebugInfo'
import PhoneBook from './components/Phonebook'

import { useState,useEffect } from 'react'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [listFilter, setListFilter] = useState('')
  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  useEffect(hook, [])
  console.log('render', persons.length, 'notes')

  
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
  //console.log(event.target.value)
  setListFilter(event.target.value)
  //console.log(listFilter)
}

const getFilter = (persons,filter) => {

  //console.log(persons)
  //console.log(filter)
  const filterResult=persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  return filterResult
}


const persons_filtered = getFilter(persons,listFilter)
  return (
    <div>
      <DebugInfo fields={[newName,newNumber,listFilter]} />
      <PhoneBook addEntry={addEntry} handleChangeNumber={handleChangeNumber} handleChangeName={handleChangeName} person={persons} filterFunction={setSearchFilter} persons={persons_filtered} />
    </div>
  )
}

export default App