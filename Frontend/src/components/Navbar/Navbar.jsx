import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const barHandle = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <>
      <nav className="flex justify-between md:items-center p-4 bg-slate-950 text-white font-bold">
        <div className="hidden md:flex">
          <Link to="/">Home</Link>
        </div>
        <ul className="hidden md:flex">
          <li className="mx-4">
            <Link to="/book">Book Appointment</Link>
          </li>
          <li className="mx-4">
            <Link to="/status">Queue Status</Link>
          </li>
          <li className="mx-4">
            <Link to="/appointment">My Appointmets</Link>
          </li>
          <li className="mx-4">
            <Link to="/signup">Signup</Link>
          </li>
        </ul>

        {(() => {
          if (show) {
            return (
              <ul>
                <li className="mb-2"><Link to="/">Home</Link></li>
                <li className="mb-2"><Link to="/book">Book Appointment</Link></li>
                <li className="mb-2"><Link to="/status">Queue Status</Link></li>
                <li className="mb-2"><Link to="/appointment">My Appointments</Link></li>
                <li className="mb-2"><Link to="/logout">Logout</Link></li>
              </ul>
            );
          }
        })()}

        <div className="text-2xl cursor-pointer md:hidden" onClick={barHandle}>
          &#9776;
        </div>
      </nav>
    </>
  );
}
