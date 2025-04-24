export default function Book(){
    return(
        <div className="p-4 md:ps-[20%] bg-gradient-to-br from-[#EAF2FB] to-white min-h-screen">
            <h1 className="text-5xl text-[#0A2540] font-bold">Book Appointment</h1>
            <p className="m-4 mx-0 text-xl text-[#6B7280]">Please fill out the form to schedule an appointment.</p>

            <form action="" method="post" >
                <div className="my-4">
                    <label htmlFor="name" className="text-xl text-[#0A2540]">Name</label><br />
                    <input id="name" className="rounded-[10px] bg-white px-3 py-2 border border-[#B0C4DE] max-w-3xl" type="text" placeholder="Name" name="user"/>
                </div>

                <div className="my-4">
                    <label htmlFor="date" className="text-xl text-[#0A2540]">Date</label><br />
                    <input id="date" className="rounded-[10px] bg-white px-3 py-2 border border-[#B0C4DE] max-w-3xl" type="date" placeholder="Date" name="date"/>
                </div>

                <div className="my-4">
                    <label htmlFor="time" className="text-xl text-[#0A2540]">Time</label><br />
                    <input id="time" className="rounded-[10px] bg-white px-3 py-2 border border-[#B0C4DE] max-w-3xl" type="time" placeholder="Time" name="time"/>
                </div>

                <button className="px-6 py-2 text-white bg-[#0A2540] border rounded-[10px] cursor-pointer">Schedule Appointment</button>
            </form>
        </div>
    )
}