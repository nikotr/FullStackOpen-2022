/*
Exercises 2.6-2.10 + 2.11 + 2.15-2.18
*/

import DebugInfo from './components/DebugInfo'
import PhoneBook from './components/Phonebook'
import ErrorNotification from './components/ErrorNotification'
import SuccessNotification from './components/SuccessNotification'

import PhonebookService from './services/PhonebookService'


import { useState,useEffect } from 'react'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [listFilter, setListFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [notificationMessage, setNotification] = useState(null)
  const hook = () => {
    console.log('effect')
    PhonebookService.getPersons().then(response => {setPersons(response)})

  }
  useEffect(hook, [])
  console.log('render', persons.length, 'notes')

const removeEntry=(entry) => {
  //event.preventDefault()
  if (window.confirm(`Do you really want to delete phonebook entry for ${entry.name}`)) {
  PhonebookService.removeEntry(entry.id).then(response => {
    if(response.status === 200 ){
      setPersons(persons.filter(person => person.id !== entry.id))
      setNotification(`Successfully removed entry for ${entry.name}`)
      setTimeout(() => setNotification(null),3000)
    } else {
      const tempErrorMessage=`Something went wrong deleting message ${entry.id}. Error code: ${response.status}`
      setErrorMessage(tempErrorMessage)
    }

  })
}
}

const addEntry=(event) => {
  event.preventDefault()
  //console.log(newName)
  const onkoJo = persons.find(person => person.name === newName)
  //console.log(onkoJo.length)
  //console.log(onkoJo)
  if (onkoJo) {
     //alert(`Henkilö ${newName} on jo listalla!`)
     //console.log(`Henkilö ${newName} on jo listalla!`)
     if (window.confirm(`Henkilö ${newName} on jo listalla! Korvataanko numero?`)) {
       const uusi={...onkoJo,number:newNumber}
       PhonebookService.updateEntry(onkoJo.id, uusi).then(response => {
         setPersons(persons.map(person => person.id !== onkoJo.id ? person : response))
       })
     }
  }else if(newName !== "") {
    const personObject={
      name: newName,
      number: newNumber
    }
    PhonebookService.addEntry(personObject).then(response => {
      setPersons(persons.concat(response))
      setNotification(`Successfully added entry for ${response.name}`)
      setTimeout(() => setNotification(null),5000)
    })
    
    //console.log(persons.concat(personObject))
     
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

  return (
    <div>
      <div className='debug'>
      <DebugInfo fields={[newName,newNumber,listFilter]} />
      </div>
      <SuccessNotification message={notificationMessage} />
      <ErrorNotification message={errorMessage} dismissFunction={() => setErrorMessage(null)}/>
      <PhoneBook addEntry={addEntry} removeEntry={removeEntry} handleChangeNumber={handleChangeNumber} handleChangeName={handleChangeName} filterFunction={setSearchFilter} persons={getFilter(persons,listFilter)} />
    </div>
  )
}

export default App