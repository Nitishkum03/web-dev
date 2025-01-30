import './Weather.css'
import search_icon from '../assets/search.png'
import sun_icon from '../assets/sun.png'
import humidity_icon from '../assets/humidity.png'
import wind_icon from '../assets/wind.png'
import cloudy_icon from '../assets/cloudy.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import { useEffect,  useState } from 'react'
const apikey = "9fd80aa4757031a3a8125942787b790b";
const Weather = () => {
    const inputref = useState(null);
    const [Weather , setWeather]= useState(false);
    const allIcon= {
        "01d":sun_icon,
        "01n":sun_icon,
        "02d":cloudy_icon,
        "02n":cloudy_icon,        
        "03d":cloudy_icon,
        "03n":cloudy_icon,        
        "04n":rain_icon,        
        "04d":rain_icon,
        "09d":rain_icon,
        "09n":rain_icon,        
        "10d":snow_icon,
        "10n":snow_icon,        
    }
    const search = async (city) =>{
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
            const response = await fetch(url);
            const data = await response.json();
            //console.log(data)
            const icon = allIcon[data.weather[0].icon];
            setWeather({
                latlon:data.coord.lat,
                lon:data.coord.lon,
                humidity: data.main.humidity,
                windspeed: data.wind.speed,
                temprature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon
            })
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        search();
    },[])
    return (
        <div className='Weather'>
            <div className="search">
             <input id='input' type="text" placeholder='Enter your Location' ref={inputref}/>
                <img src={search_icon} alt="hii this is search image" />
            </div>
            <img src={Weather.icon} alt="" className='Weather_icon' onClick={()=>{search((inputref.current.value))}} />
            <div className='latlon'>
                <p>latitude: {Weather.latlon}</p>
                <p>longitude: {Weather.lon}</p>
            </div>
            <p className='temperature'>{Weather.temprature}°c</p>
            <p className='location'>{Weather.location}</p>
            <div className="weather_data">
                <div className="coloum">
                    <img src={humidity_icon} alt="" />
                    <div>
                        <p>{Weather.humidity}%</p>
                        <span>Humidity</span>
                    </div>
                </div>
                <div className="coloum">
                    <img src={wind_icon} alt="" />
                    <div>
                        <p>{Weather.windspeed} km/h</p>
                        <span>Wind</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather