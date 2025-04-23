import { useState } from 'react';
import Calendar from 'react-calendar';

export default function Calender(){
    const [date, setDate] = useState(new Date());

    return(
        <div>
            <Calendar className="bg-white text-center no-underline m-4 p-1 rounded-xl" onChange={setDate} value={date} />
            <p className='m-4 py-1 text-center bg-red-300'>Selected date: {date.toDateString()}</p>
        </div>
    )
}

// import moment from 'moment';
// import { useState } from 'react';


// const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// export default function Calender(){

//     const getDaysInMonth = (monthMoment) =>{
//         const monthCopy = monthMoment.clone();
//         monthCopy.startOf('month');

//         let days = [];

//         while(monthCopy.month() === monthMoment.month()){
//             days.push(monthCopy.clone());
//             monthCopy.add(1, 'days');
//         }

//         return days;
//     }

//     const segmentIntoWeeks = (daysMoments) =>{
//         let weeks = [];
//         let currentWeek = [];

//         for(let day of daysMoments) {
//             currentWeek.push(day.clone());

//             if(day.format('dddd') === 'Saturday'){
//                 weeks.push(currentWeek);
//                 currentWeek = [];
//             }

//             if(currentWeek.length > 0){
//                 weeks.push(currentWeek);
//             }

//             return weeks;
//         }

//     }

//     const today = moment();
//     const [currentMonthMoment, setCurrentMonthMoment] = useState(today);
//     const weeks = segmentIntoWeeks(getDaysInMonth(currentMonthMoment));

//     const incrementMonth = () =>{
//         setCurrentMonthMoment(moment(currentMonthMoment.add(1, 'months')));
//     }

//     const decrementMonth = () =>{
//         setCurrentMonthMoment(moment(currentMonthMoment.subtract(1, 'months')));
//     }

//     return(
//         <div>
//             <h1>{currentMonthMoment.format('MMMM YYYY')}</h1>
//             <button onClick={decrementMonth}>Prev</button>
//             <button onClick={incrementMonth}>Next</button>
//         </div>
//     )
// }