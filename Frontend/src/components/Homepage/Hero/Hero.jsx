import './hero.css';

export default function Hero(){
    return(
        <div id="hero" className="bg-[#FFF] p-12 m-4 rounded">
            <div className="md:w-[40%] mb-4">
                <h1 className="text-4xl font-bold mb-4">ModernCut : Keep your style updated with the time </h1>
                <p className="text-xl mb-4">No need to worry about the turn just get the appointment</p>
                <a href="/book" className="inline-block bg-[#E74C3C] text-white text-xl px-4 py-2 rounded">Book Appointment</a>
            </div>
            <div className="max-w-[50%] min-w-[262px] p-5 shadow rounded">
                <h1 className="font-medium mb-0.5">Queue Status</h1>
                <p className="mb-2 bg-[#d0ebf8] text-xl px-4 py-2 rounded font-bold">5</p>
                <h1 className="font-medium mb-0.5">Estimated Wait Time</h1>
                <p className="bg-[#E74C3C] text-white text-xl px-4 py-2 mb-2 rounded">20 Minutes</p>
                <h3 className="font-medium">Your Appointment</h3>
                <h2 className="font-medium">Vikrant Tanwar</h2>
                <p className="text-gray-700 mb-1">April 28,2024</p>
                <div>
                    <a href="#" className="inline-block mb-2 text-x font-bold px-4 py-2 border rounded hover:bg-[#d0ebf8]">Cancel</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#" className="inline-block sm:w-m  text-x font-bold px-4 py-2 border rounded hover:bg-[#d0ebf8]">Reschedule</a>
                </div>
            </div>
        </div>
    )
}