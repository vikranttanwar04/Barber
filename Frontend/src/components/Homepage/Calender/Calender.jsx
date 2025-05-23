import { useState } from 'react';
import Calendar from 'react-calendar';

export default function Calender(){
    const [date, setDate] = useState(new Date());

    return(
        <div>
            <Calendar className="bg-white text-center no-underline m-4 p-1 rounded-xl border border-gray-400 shadow" onChange={setDate} value={date} />
            <p className='m-4 py-1 text-center bg-red-300 rounded'>Selected date: {date.toDateString()}</p>
        </div>
    )
}