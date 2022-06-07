import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'

/*

exercises 2.12-2.14

*/

const App = () => {
  const [countries, setCountries] = useState([])
  const [filteredResults,setFilteredResult] = useState([])
  const endpoint_countries="https://restcountries.com/v3.1/all"

  const hook = () => {
    console.log('effect')
    axios
      .get(endpoint_countries)
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
        setFilteredResult(response.data)
      })
  }
  useEffect(hook, [])
  console.log('render', countries.length, 'notes')
console.log(filteredResults)


const filterFunction = (event) => {
  const value=event.target.value
  console.log(value)
  if(value != 0) {
    setFilteredResult(countries.filter(country => country.name.common.toLowerCase().includes(value.toLowerCase())))
  } else {
    setFilteredResult(countries)
  }
  console.log(filteredResults.length)
}

const getListing = () => {
  console.log(filteredResults)
  if(filteredResults.length >= 10){
    return <p>Too many matches, try with another filter</p>
  } else if(filteredResults.length === 1){
    console.log(filteredResults)
    return <Country country={filteredResults[0]} infoLevel='detailed' />
  } else {
    return filteredResults.map(country => <Country country={country} infoLevel='default' />)
  }
}

    return (
      <div>
        <h2>Countries</h2>
        <input onChange={filterFunction} />
        <hr />
        { 
        getListing()
        }
      </div>
      )
  }
  
  export default App