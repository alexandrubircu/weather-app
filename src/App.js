import { useState } from 'react';
import './App.css';
import sun from './images/sun.png'
import rain from './images/storm.png'
import snowfall from './images/snowfall.png'
import cloud from './images/cloud.png'
import notFound from './images/not-found.png'
import search from './images/search.png'

const KEY = 'e6a16a7208ed6692c250eb5d6e84e684'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'


function App() {
  const [weather,setWeather] = useState('rain')
  
  const getWeather = () => {
    switch(weather){
      case 'sun': return <img src={sun} alt=''/>
      case 'rain': return <img src={rain} alt=''/>
      case 'snowfall': return <img src={snowfall} alt=''/>
      case 'cloud': return <img src={cloud} alt=''/>
      default: return <img src={notFound} alt=''/>
    }
  }

  return (
    <>
      <div className='search'>
        <input placeholder='Search'/>
        <img src={search} alt=''/>
      </div>
      <div className="weather-app">
          {/* <input placeholder='Search'/> */}
          <div className='waetherBlock'>
              <h1>ameriuca</h1>
              {getWeather()}
              <h2>21°</h2>
              <p>Angled Rain</p>
          </div>
        <div className="details">
          <div className='detailsBlock'>
            <h3>Wind</h3>
            <p>12 km/h</p>
          </div>
          <div className='detailsBlock'>
            <h3>Change</h3>
            <p>82%</p>
          </div>
          <div className='detailsBlock'>
            <h3>Humidity</h3>
            <p>27%</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
