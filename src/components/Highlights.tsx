import React from 'react'

interface StatsInterface {
    title: string;
    value: number;
    unit: string;
    direction?: string;
}

interface HighlightsProps {
    stats: StatsInterface;
}

const Highlights: React.FC<HighlightsProps> = ({ stats }) => {
    return (
        <div className='cursor-pointer text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out bg-slate-600 text-slate-200 flex flex-col justify-normal items-center rounded-md p-[10px]'>
            <div className='text-sm  font-medium'>{stats.title}</div>
            <div className='mt-[2px]'>
                <span className='text-4xl font-bold'>{stats.value}</span>
                <span className='text-2xl'>{stats.unit}</span>
            </div>
            {stats.direction ? (
                <div className='mt-5 flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>

                    <div className='ms-2 text-slate-200'>{stats.direction}</div>
                </div>
            ) : null}
            {stats.title === "Humidity" && (
                <div className="mt-5 w-[100%] bg-[#1F2E43] rounded-full h-1.5 mb-2 dark:bg-gray-700">
                    <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{ width: `${stats.value}%` }}></div>
                </div>
            )}
        </div>
    )
}

export default Highlights;