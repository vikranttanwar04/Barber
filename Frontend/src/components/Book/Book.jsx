import { useState } from "react";
import "./Book.css";
import { useAuth } from "../../Context/AuthContext";

export default function Book() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const [showDialogBox, setShowDialogBox] = useState(false);
  const [checkList, setCheckList] = useState([]);

  const dateHandler = () =>{
    let inputedDate = document.getElementById("date").value;
    let inputedTime = document.getElementById("time").value;

    let combinedDateTime = new Date(`${inputedDate}T${inputedTime}`);
    const now = new Date();
    if(combinedDateTime <= now){
      return false;
    }
    return true;
  }

  const isChecked = (event) =>{
    if(event.target.checked){
    setCheckList([...checkList,event.target.value]);      
    }else{
      setCheckList(checkList.filter((item) => item!=event.target.value));
    } 
  }

  const handleSubmit = async (event) => {
    
    const isDateValid = dateHandler();
    
    if(!isLoggedIn){
      event.preventDefault();
      setShowDialogBox(true);
    }else if(!isDateValid){
      event.preventDefault();
      alert("Selected date and time must not be in the past!");
    }else if(checkList.length===0){
      event.preventDefault();
      alert("Select atleast one service!");
    }else{
      alert("Appointment Booked Successfully!");
    }
  };

  const hideBox = () =>{
    setShowDialogBox(false);
  }

  return (
    <div onClick={hideBox}>
      <div
        id="book-body"
        className="p-10 sm:ps-[20%] bg-gradient-to-br from-[#EAF2FB] to-white min-h-screen"
      >
        <h1 className="text-5xl text-[#0A2540] font-bold">Book Appointment</h1>
        <p className="m-4 mx-0 text-xl text-[#6B7280]">
          Please fill out the form to schedule an appointment.
        </p>

        <form
          id="form"
          action="http://localhost:8080/book"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="my-4">
            <label htmlFor="name" className="text-xl text-[#0A2540]">
              Name
            </label>
            <br />
            <input
              id="name"
              className="rounded bg-white px-3 py-2 border border-[#B0C4DE]"
              type="text"
              placeholder="Name"
              name="user"
              required
            />
          </div>

          {/* Login Dialog Box  */}
          {(() => {
            if (showDialogBox) {
              return (
                <div id="dialog-box" className="p-[3rem] text-center font-semibold rounded-2xl bg-gradient-to-br from-[#6f9dd3] to-white bg-transparent">
                    <h1>You need to <a href="/login" className="text-blue-800 underline">Login</a> First.</h1>
                </div>
              );
            }
          })()}

          <div className="my-4">
            <label htmlFor="date" className="text-xl text-[#0A2540]">
              Date
            </label>
            <br />
            <input
              id="date"
              className="rounded bg-white px-3 py-2 border border-[#B0C4DE]"
              type="date"
              placeholder="Date"
              name="date"
              required
            />
          </div>

          <div className="my-4">
            <label htmlFor="time" className="text-xl text-[#0A2540]">
              Time
            </label>
            <br />
            <input
              id="time"
              className="rounded bg-white px-3 py-2 border border-[#B0C4DE]"
              type="time"
              placeholder="Time"
              name="time"
              required
            />
          </div>

          <div className="my-4">
            <h2 className="text-xl mb-2 text-[#0A2540]">
              What all do you want:{" "}
            </h2>
            <div className="flex justify-between justify-items-center flex-wrap">
              <div>
                <label htmlFor="haircut" className="text-xl text-[#0A2540]">
                  Haircut
                </label>
                &nbsp;&nbsp;
                <input
                  type="checkbox"
                  id="haircut"
                  name="service"
                  value="haircut"
                  onChange={isChecked}
                  className="w-4 h-4 text-blue-600 bg-gray-10  0 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
              </div>
              <div>
                <label htmlFor="beard" className="text-xl text-[#0A2540]">
                  Beared
                </label>
                &nbsp;&nbsp;
                <input
                  type="checkbox"
                  id="beard"
                  name="service"
                  value="beard"
                  onChange={isChecked}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
              </div>
              <div>
                <label htmlFor="manicure" className="text-xl text-[#0A2540]">
                  Manicure
                </label>
                &nbsp;&nbsp;
                <input
                  type="checkbox"
                  id="manicure"
                  name="service"
                  value="manicure"
                  onChange={isChecked}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
              </div>
              <div>
                <label htmlFor="padicure" className="text-xl text-[#0A2540]">
                  Padicure
                </label>
                &nbsp;&nbsp;
                <input
                  type="checkbox"
                  id="padicure"
                  name="service"
                  value="padicure"
                  onChange={isChecked}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
              </div>
            </div>
          </div>

          <button
            className="px-6 py-2 text-white bg-[#0A2540] border rounded cursor-pointer"
          >
            Schedule Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
