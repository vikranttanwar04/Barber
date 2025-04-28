export default function Current(){

    return(
        <div className="mb-10">
            <h1 className="text-5xl mb-10 text-[#0A2540] font-semibold">My Appointments</h1>
            <div className="border border-gray-500 rounded-xl p-4 px-8 bg-amber-50 shadow-xl">
                <h2 className="text-3xl mb-4 font-semibold">Current Appointment</h2>
                <p className="mb-4 text-xl">Haircut - Beared - Manicure</p>
                <p className="mb-4 text-xl">April 26, 2025</p>
                <div className="text-end">
                    <a href="#" className="inline-block mb-2 text-x font-bold px-4 py-2 border border-black rounded hover:bg-red-500 hover:text-white">Cancel</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#" className="inline-block sm:w-m  text-x font-bold px-4 py-2 border rounded hover:bg-slate-950 hover:text-white">Reschedule</a>
                </div>
            </div>
        </div>
    )
}