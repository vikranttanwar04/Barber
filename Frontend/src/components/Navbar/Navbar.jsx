export default function Navbar(){
    return(
        <nav className="flex justify-between items-center p-4 bg-slate-950 text-white font-bold">
            <div>Home</div>
            <ul className="hidden md:flex">
                <li className="mx-4">Book Appointment</li>
                <li className="mx-4">Queue Status</li>
                <li className="mx-4">My Appointmets</li>
                <li className="mx-4">Logout</li>
            </ul>
            <div className=" text-2xl md:hidden">&#9776;</div>
        </nav>
    )
}