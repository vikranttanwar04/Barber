import WatchLaterIcon from '@mui/icons-material/WatchLater';

export default function YourStatus(){

    return(
        <div className="p-4 sm:px-[10%] md:px-[20%]">
            <div className="max-w-[50rem] p-4 px-[5rem] rounded-2xl bg-amber-50 border border-gray-500 shadow">
                <h1 className="text-4xl mb-4 text-[#0A2540] font-semibold">Your Appointment</h1>
                <div className="max-w-[20rem] mb-4">
                    <div className="flex justify-between mb-2">
                        <div className="text-xl"><strong>Name:</strong></div>
                        <div className="text-xl text-justify">Vikrant</div>
                    </div>
                    <div className="flex justify-between mb-2">
                        <div className="text-xl"><strong>Date:</strong></div>
                        <div className="text-xl text-justify">April 26, 2025</div>
                    </div>
                    <div className="flex justify-between mb-2">
                        <div className="text-xl"><strong>Time:</strong></div>
                        <div className="text-xl text-justify">11:30 AM</div>
                    </div>
                </div>

                <div className="max-w-[20rem] flex">
                    <WatchLaterIcon className='me-1 mt-2 text-2xl' sx={{fontSize: '2rem'}} />
                    <div>
                        <h3 className="text-xl font-medium"> Estimated Wait Time</h3>
                        <p className="text-1 font-medium">20 minutes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}