import { useState, useEffect} from 'react'
import axios from 'axios'
const Country = (props) => {
      const [viewDetails,setDetailedView] = useState(false)
      const [weatherInfo, setWeatherInfo] = useState([])
      const [haveWeather, setHaveWeather] = useState(false)
      const apiKey=process.env.REACT_APP_API_KEY
      

//console.log(props)
//console.log(props.infoLevel)
//console.log(props.country.name.common)
const country = props.country
//console.log(country.languages)
console.log(country)

const endpoint_url="https://api.openweathermap.org/data/2.5/weather?lat="+country.latlng[0]+"&lon="+country.latlng[1]+"&appid="+apiKey


const hookWeather = () => {
    console.log('getting weather')
    axios
      .get(endpoint_url)
      .then(response => {
        console.log('weather got')
        setWeatherInfo(response.data)
        setHaveWeather(true)
      })
  }
  useEffect(hookWeather, [])
  //console.log(weatherInfo)

const getLanguagesList = (country) => {
    const languages=country.languages
    const keys = Object.keys(languages)
    //console.log(keys)

    const values = keys.map(lang => (
            {
                name: languages[lang],
                id:lang
            }

    )
        )
    //console.log(values)
    return (
<ul>
    {values.map(language => <li key={language.id}>{language.name}</li>)}
</ul>

    )
}

const toggleDetails = (event) => {
    setDetailedView(!viewDetails)
}

const getWeather = () => {

if (!haveWeather) {
return (
    <p>
        Weather info not yet loaded!
    </p>
)
}

    console.log(weatherInfo)
//console.log(weatherInfo.main.temp)
const celsiusTemp=(weatherInfo.main.temp - 273.15).toFixed(2)
const weathericon=weatherInfo.weather[0].icon
const weatherUrl="http://openweathermap.org/img/wn/"+weathericon+"@2x.png"
return (
    <p>
        temperature: {celsiusTemp}
        <br />
        {weatherInfo.weather[0].description} <br/>
        <img src={weatherUrl} />
        <br />
        wind: {weatherInfo.wind.speed} m/s
    </p>
)

    }


if (viewDetails || props.infoLevel==='detailed') {
    return (
    <div>
       { country.name.common } 
       { props.infoLevel === 'detailed' ? "": (<button onClick={toggleDetails} type="submit">View simplified info</button>) }
               <h2>{country.name.official}</h2>
        <h3>Information</h3>
        <p>
            Capital: {country.capital}<br />
            Area: {country.area}
        </p>
        <div> <h3>Languages</h3>
            {getLanguagesList(country)}
            </div>
            <div>
        <img src={country.flags.png} width="20%" />
        </div>
        <div>
            <h3>Weather in {country.capital}</h3>
        { props.infoLevel === 'detailed' ? (getWeather()) :  (<p>Weather info only available in single view!</p>) }
        </div>
    </div>
    )
} else {
    return (<p>{country.name.common}  <button onClick={toggleDetails} type="submit">View detailed info</button></p>
    )
}
}

export default Country