import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import axios from 'axios'

const promise = axios.get('http://localhost:3001/notes')
//console.log(promise)
promise.then(response => {
  console.log(response.data)
  
//ReactDOM.createRoot(document.getElementById('root')).render(<App notes={response.data}/>)
})
const promise2 = axios.get('http://localhost:3001/persons')
//console.log(promise2)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
