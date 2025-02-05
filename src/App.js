import React, { useEffect, useState } from 'react';
import './App.css';
import './components/rain.css';
import { MdSunny } from "react-icons/md";
import { IoPartlySunnyOutline } from "react-icons/io5";
import Weather from './components/Weather';


function App() {
  const [weather, setWeather] = useState({});
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState({});
  let API = process.env.REACT_APP_API_KEY;
  let city = 'Somanya';

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => {
          setLocation({
            latitude: null,
            longitude: null,
            error: error.message,
          });
        }
      );
    } else {
      setLocation({
        latitude: null,
        longitude: null,
        error: "Geolocation is not supported by this browser.",
      });
    }
  };

  // useEffect(() => {
  //   getLocation();
  // },[])

  useEffect(() => {
    if (search) {
      setTimeout(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API}`)
        .then(res => res.json())
        .then(res => setWeather(res))
        .catch(err => console.log(err))
      }, 1000);
    }else {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`)
      .then(res => res.json())
      .then(res => setWeather(res))
      .catch(err => console.log(err))
    }
  },[search])

  function format_time(s) {
    const dtFormat = new Intl.DateTimeFormat('en-GH', {
      hour12: false,
      timeStyle: 'short',
      timeZone: 'UTC'
    });
    
    if (s) {
      return dtFormat.format(new Date(s * 1e3));
    }
  }
  // console.log(weather)
  return (
    <div className={`App weather-container-${weather.weather?.length > 0 ? weather.weather[0]?.main?.toLowerCase(): ''}`}>
      <div className='content-container' style={{paddingTop: '12px'}}>
        <div style={{marginBottom:' 12px'}}>
          {/* <label htmlFor='search' className='form-label'>Serch</label> */}
          <input id='search' type='text' className='form-control' value={search} onChange={e => setSearch(e.target.value)} placeholder='search city here' />
        </div>
        <div>
          <h1 className='w-name'>{weather.name}, <span>{weather.sys?.country}</span></h1>
          <div>{new Date(weather.dt * 1e3).toDateString()}</div>
          <div className='weather row m-0'>
            <div className='col-sm-12 col-lg-6 p-0 m-0'>
              <div className='left-side'>
                <img width={250} src={`https://openweathermap.org/img/wn/${weather.weather?.length > 0 ? weather.weather[0]?.icon: ''}@2x.png`} />
                <div style={{marginLeft: '14px'}}>
                  <div className='temp'>
                    <h2 className='w-name'>{parseFloat(weather.main?.temp - 273.15).toFixed(0)}</h2>
                    <span className='degree'>o</span>
                  </div>
                  <div>{weather.weather?.length > 0 ? weather.weather[0]?.description: ''}</div>
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-lg-6 p-0 m-0  '>
              <div className='right-side row m-0'>
                  <div className='col-3'>
                    <div className='temp-container'>
                      <div>
                        <div className='temp'>
                          <h3>{parseFloat(weather.main?.feels_like - 273.15).toFixed(0)}</h3>
                          <span className='degree-sm'>o</span>
                        </div>
                          <span>Feels like</span>
                      </div>
                      <div>
                        <div className='temp'>
                          <h3>{parseFloat(weather.wind?.speed / 100).toFixed(2)}<span style={{fontSize: '16px'}}>Km/h</span></h3>
                        </div>
                          <span>Wind</span>
                      </div>
                    </div>
                  </div>
                  <div className='col-3'>
                    <div className='temp-container'>
                      <div>
                        <div className='temp'>
                          <h3>{parseFloat(weather.main?.temp_max -273.15).toFixed(0)}</h3>
                          <span className='degree-sm'>o</span>
                        </div>
                          <span>High</span>
                      </div>
                      <div>
                        <div className='temp'>
                          <h3>{parseFloat(weather.main?.temp_min -273.15).toFixed(0)}</h3>
                          <span className='degree-sm'>o</span>
                        </div>
                          <span>Low</span>
                      </div>
                    </div>
                  </div>
                  <div className='col-3'>
                    <div className='temp-container'>
                      <div>
                        <div className='temp'>
                          <h3>{format_time(weather.sys?.sunrise)}</h3>
                        </div>
                          <span>Sunrise</span>
                      </div>
                      <div>
                        <div className='temp'>
                          <h3>{format_time(weather.sys?.sunset)}</h3>
                        </div>
                          <span>Sunset</span>
                      </div>
                    </div>
                  </div>
                  <div className='col-3'>
                    <div className='temp-container'>
                      <div>
                        <div className='temp'>
                          <h3>{weather.main?.humidity}<span style={{fontSize: '16px'}}>%</span></h3>
                        </div>
                          <span>Humidity</span>
                      </div>
                      <div>
                        <div className='temp'>
                          <h3>{weather.main?.pressure / 100}<span style={{fontSize: '16px'}}>Pa</span></h3>
                        </div>
                          <span>Pressure</span>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Weather condition={weather.weather?.length > 0 ? weather.weather[0]?.main: ''} />
    </div>
  );
}

export default App;
