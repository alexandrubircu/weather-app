import { useEffect, useState } from 'react';
import './App.css';
import sun from './images/sun.png'
import storm from './images/storm.png'
import rain from './images/drizzle-weather-7096832-5753008.webp'
import snowfall from './images/snowfall.png'
import cloud from './images/cloud.png'
import notFound from './images/not-found.png'
import fog from './images/fog.webp'
import search from './images/search.png'
import axios from './api/axiosConfig'


function App() {
  const [region,setRegion] = useState('');
  const [country,setCountry] = useState('');
  const [weather,setWeather] = useState('');
  const [temp,setTemp] = useState('');
  const [description,setDescription] = useState('');
  const [wind,setWind] = useState('');
  const [pressure,setPressure] = useState('');
  const [humidity,setHumidity] = useState('')
  
  const handleSearch = async () => {
    try {
      const response = await axios.get('weather', {
        params: {
          q: region,
          units: 'metric' 
        }
      });
      const weatherData = response.data;
      console.log(weatherData)
      setCountry(weatherData.sys.country+": "+weatherData.name);
      setWeather(weatherData.weather[0].main);
      setTemp(weatherData.main.temp);
      setDescription(weatherData.weather[0].description);
      setWind(weatherData.wind.speed+" km/h");
      setPressure(weatherData.main.pressure);
      setHumidity(weatherData.main.humidity+"%");
      
    }catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleSearch();
    }, 600000);

    return () => clearInterval(interval);
  }, []); 
  

  const getWeatherImage = () => {
    switch (weather) {
      case 'Clear':
        return <img src={sun} alt='Sun' />;
      case 'Thunderstorm':
        return <img src={storm} alt='Thunderstorm' />;
      case 'Rain':
        return <img style={{width:'270px'}} src={rain} alt='Rain' />;  
      case 'Drizzle':
      return <img style={{width:'270px'}} src={rain} alt='Rain' />;  
      case 'Snow':
        return <img src={snowfall} alt='Snow' />;
      case 'Clouds':
        return <img src={cloud} alt='Cloud' />;
      case 'Atmosphere':
        return <img src={fog} alt='Atmosphere' />;  
      default:
        return <img src={notFound} alt='Not Found' />;
    }
  }

  const onkeypres = (e) =>{
    if(e.key == 'Enter'){
      handleSearch();
      setRegion('');
    }
  }

  return (
    <>
      <div className='search'>
        <input 
          placeholder='Search'
          value={region}
          onChange={(e)=>{
            setRegion(e.target.value)
          }}
          onKeyDown={onkeypres}
        />
        <img 
          src={search} 
          alt=''
          onClick={()=>{
            handleSearch();
            setRegion('')
          }}
        />
      </div>
      <div className="weather-app">
          <div className='waetherBlock'>
              <h1>{country}</h1>
              {getWeatherImage()}
              <h2>{temp}°</h2>
              <p>{description}</p>
          </div>
        <div className="details">
          <div className='detailsBlock'>
            <h3>Wind</h3>
            <p>{wind}</p>
          </div>
          <div className='detailsBlock'>
            <h3>Pressure</h3>
            <p>{pressure}</p>
          </div>
          <div className='detailsBlock'>
            <h3>Humidity</h3>
            <p>{humidity}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
