import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";

export default function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const [show, setShow] = useState(false);

  const barHandle = () => {
    show ? setShow(false) : setShow(true);
  };

  const signOut = () =>{
    setIsLoggedIn(false);
  }

  const selectedLink = ({isActive}) =>{
    return{
      color: isActive ? 'orange': ''
    }
  }

  return (
    <>
      <nav className="flex justify-between md:items-center p-4 bg-slate-950 text-white font-bold">
        <div className="hidden md:flex">
          <NavLink to="/" style={selectedLink} >Home</NavLink>
        </div>
        <ul className="hidden md:flex">

        {(() => {
          if(!isLoggedIn){
            return(
              <li className="mx-4">
                <NavLink to="/overview" style={selectedLink} >Overview</NavLink>
              </li>
            )
        }})()}

          <li className="mx-4">
            <NavLink to="/book" style={selectedLink} >Book Appointment</NavLink>
          </li>

          {(() => {
            if(isLoggedIn){
              return(
                <li className="mx-4">
                  <NavLink to="/status" style={selectedLink} >Queue Status</NavLink>
                </li>
              )
          }})()}

          {(() => {
            if(isLoggedIn){
              return(
                <li className="mx-4">
                  <NavLink to="/appointment" style={selectedLink} >My Appointmets</NavLink>
                </li>
              )
          }})()}

          {(() => {
            if(!isLoggedIn){
              return(
                <li className="mx-4">
                  <NavLink to="/signup" style={selectedLink} >Signup</NavLink>
                </li>
              )}else{
                return(
                  <li className="mx-4">
                    <NavLink to="/" onClick={signOut}>Sign out</NavLink>
                  </li>
                )
              }
              })()}
        </ul>

        <div className="md:hidden">
          {(() => {
            if (show) {
              return (
                <ul>
                  <li className="mb-2"><NavLink to="/" style={selectedLink} >Home</NavLink></li>
                  {(() => {
                    if(!isLoggedIn){
                      return(
                        <li className="mb-2">
                          <NavLink to="/overview" style={selectedLink} >Overview</NavLink>
                        </li>
                      )
                  }})()}
                  <li className="mb-2"><NavLink to="/book" style={selectedLink} >Book Appointment</NavLink></li>
                  {(() => {
                    if(isLoggedIn){
                      return(
                        <li className="mb-2">
                          <NavLink to="/status" style={selectedLink} >Queue Status</NavLink>
                        </li>
                      )
                  }})()}
                  {(() => {
                    if(isLoggedIn){
                      return(
                        <li className="mb-2">
                          <NavLink to="/appointment" style={selectedLink} >My Appointments</NavLink>
                        </li>
                      )
                  }})()}

                  {(() => {
                    if(!isLoggedIn){
                      return(
                        <li className="mb-2">
                          <NavLink to="/signup" style={selectedLink} >Signup</NavLink>
                        </li>
                      )}else{
                        return(
                          <li className="mb-2">
                            <NavLink to="/" onClick={signOut}>Sign out</NavLink>
                          </li>
                        )
                      }
                      })()}

                </ul>
              );
            }
          })()}
        </div>

        <div className="text-2xl cursor-pointer md:hidden" onClick={barHandle}>
          &#9776;
        </div>
      </nav>
    </>
  );
}