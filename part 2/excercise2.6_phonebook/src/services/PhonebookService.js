import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getPersons = () => {
    const request=axios.get(baseUrl)
      return request.then(response => {
        console.log('promise fulfilled')
        return response.data
      })
}

const addEntry = (newEntry) => {
    const request = axios.post(baseUrl, newEntry)
    return request.then(response => {
        console.log(response.data)
        return response.data
    })

}

const removeEntry = (id) => {
    console.log(id)
    const personUrl=`${baseUrl}/${id}`
    const request=axios.delete(personUrl)
    return request.then(response => {
        console.log(response)
        return response
    }).catch(error => {
        console.log(error)
        
        return error.response
    }
    )

}

const updateEntry = (id,newEntry) => {
    console.log(id)
    const personUrl=`${baseUrl}/${id}`
    const request=axios.put(personUrl,newEntry)
    return request.then(response => {
        console.log(response)
        return response.data
    })

}

const exports = {
    getPersons,
    addEntry,
    removeEntry,
    updateEntry
}
export default exports;