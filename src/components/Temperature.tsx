import React from 'react'
import { WeatherInterface } from "../types";

interface TemperatureProps {
    weatherData: WeatherInterface | null;
    setCity: (city: string) => void;
    handleSearch: () => void;
    stats: {
        temp: number | null;
        condition: string | null;
        isDay: number | null;
        location: string | null;
        time: string | null;
    };
}

const Temperature: React.FC<TemperatureProps> = ({ weatherData, stats, setCity, handleSearch }) => {

    const handleCityChange = (e: any) => {
        setCity(e.target.value);
    }


    return (
        <>
            <div className="font-primary flex flex-col justify-between h-[100%] items-center w-[100%]">
                <div className="w-[100%] flex items-center">
                    <label className="sr-only">Search</label>
                    <div className="relative w-[100%]">
                        <input
                            type="text"
                            id="simple-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%]  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter Your City Name" required
                            onChange={handleCityChange}
                        />
                    </div>
                    <button onClick={handleSearch} type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
                {weatherData &&
                    <>
                        <div>
                            {stats.isDay !== 0 ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 h-14 text-yellow-300 cursor-pointer text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 h-14 cursor-pointer text-slate-200 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                </svg>
                            )}
                        </div>
                        <div className="text-slate-200">
                            <p className='font-semibold text-[56px] flex items-center justify-center text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer'>
                                {stats.temp}
                                <span className='text-[30px]'>°C</span>
                            </p>
                        </div>
                        <div className='flex items-center flex-col text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer'>
                            <p className='text-slate-200 text-[18px] font-medium'>{stats.condition}</p>
                            <p className='mt-[2px] text-slate-400 text-[15px]'>Today: {stats.time} | {stats.location}</p>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default Temperature;