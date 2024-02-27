import React, { useState } from 'react';
import Temperature from './components/Temperature';
import Highlights from './components/Highlights';
import { WeatherInterface } from './types';

function App() {

  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherInterface | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false); // New state for loading indicator

  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=29e4d83dfcdc479290450330242702&q=${city}&aqi=no`;

  const handleSearch = () => {
    setIsLoading(true);
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json(); 
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      })
      .finally(() => {
        setIsLoading(false); 
      });
  };

  return (
    <>
       <div className={`bg-[#1F2E43] h-[100%] gap-[20px] w-[100vw] flex ${weatherData ? 'flex-col md:flex-row' : 'flex-col'} justify-center items-center`}>
        <div className='pt-[40px] md:p-0 w-[90%] lg:w-1/4 h-[330px]'>
          <Temperature
            weatherData={weatherData}
            setCity={setCity}
            handleSearch={handleSearch}
            stats={{
              temp: weatherData?.current.temp_c ?? null,
              condition: weatherData?.current.condition.text ?? null,
              isDay: weatherData?.current.is_day ?? null,
              location: weatherData?.location.name ?? null,
              time: weatherData?.location.localtime ?? null
            }}
          />
        </div>
        {isLoading ? (
          <div className='text-slate-100 font-medium text-xl'>
          </div>
        ) : (
          weatherData && (
            <div className='p-10  w-[100%] lg:w-1/2 h-[330px]'>
              <h1 className='text-slate-200 font-semibold text-2xl'>Today's Highlights</h1>
              <div className='grid grid-cols-2 gap-3 lg:gap-6 mt-[20px]'>
                <Highlights stats={{
                  title:'Wind Status',
                  value: weatherData.current.wind_mph,
                  unit:"mph",
                  direction:weatherData.current.wind_dir
                }} />
                <Highlights stats={{
                  title:'Humidity',
                  value: weatherData.current.humidity,
                  unit:"%",
                }}
                />
                <Highlights  stats={{
                  title:'Visibility',
                  value: weatherData.current.vis_miles,
                  unit:"miles",
                }} />
                <Highlights  stats={{
                  title:'Air Pressure',
                  value: weatherData.current.pressure_mb,
                  unit:"mb",
                }} />
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default App;