import { useEffect, useState } from "react";
import Current from "./Current/Current";
import Past from "./Past/Past";
import axios from "axios";

export default function Appointment(){

    const [userData, setUserData] = useState();

    useEffect(() =>{
        axios.get("http://localhost:8080/status")
        .then((res) => {
            setUserData(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    return(
        <div className="p-10 sm:px-[20%] bg-gradient-to-br from-[#EAF2FB] to-white min-h-screen">
            <Current data={userData} />
            <Past />
        </div>

    )
}