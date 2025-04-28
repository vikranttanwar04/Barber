import './Book.css';

export default function Book(){

    const handleSubmit = (event) =>{
        event.preventDefault();
    }


    return(
        <div id="book-body" className="p-10 sm:ps-[20%] bg-gradient-to-br from-[#EAF2FB] to-white min-h-screen">
            <h1 className="text-5xl text-[#0A2540] font-bold">Book Appointment</h1>
            <p className="m-4 mx-0 text-xl text-[#6B7280]">Please fill out the form to schedule an appointment.</p>

            <form id='form' action="/server" method="post" >
                <div className="my-4">
                    <label htmlFor="name" className="text-xl text-[#0A2540]">Name</label><br />
                    <input id="name" className="rounded bg-white px-3 py-2 border border-[#B0C4DE]" type="text" placeholder="Name" name="user" required />
                </div>

                <div className="my-4">
                    <label htmlFor="date" className="text-xl text-[#0A2540]">Date</label><br />
                    <input id="date" className="rounded bg-white px-3 py-2 border border-[#B0C4DE]" type="date" placeholder="Date" name="date" required />
                </div>

                <div className="my-4">
                    <label htmlFor="time" className="text-xl text-[#0A2540]">Time</label><br />
                    <input id="time" className="rounded bg-white px-3 py-2 border border-[#B0C4DE]" type="time" placeholder="Time" name="time" required />
                </div>

                <div className="my-4">
                    <h2 className="text-xl mb-2 text-[#0A2540]">What all do you want: </h2>
                    <div className='flex justify-between justify-items-center flex-wrap'>
                        <div>
                            <label htmlFor="haircut" className="text-xl text-[#0A2540]">Haircut</label>&nbsp;&nbsp;
                            <input type="checkbox" id='haircut' name='service' value="haircut" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500' />
                        </div>
                        <div>
                            <label htmlFor="beard" className="text-xl text-[#0A2540]">Beared</label>&nbsp;&nbsp;
                            <input type="checkbox" id='beard' name='service' value="beard" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'/>
                        </div>
                        <div>
                            <label htmlFor="manicure" className="text-xl text-[#0A2540]">Manicure</label>&nbsp;&nbsp;
                            <input type="checkbox" id='manicure' name='service' value="manicure" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'/>
                        </div>
                        <div>
                            <label htmlFor="padicure" className="text-xl text-[#0A2540]">Padicure</label>&nbsp;&nbsp;
                            <input type="checkbox" id='padicure' name='service' value="padicure" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'/>
                        </div>
                    </div>
                </div>

                <button className="px-6 py-2 text-white bg-[#0A2540] border rounded cursor-pointer" onSubmit={handleSubmit}>Schedule Appointment</button>
            </form>
        </div>
    )
}