import Table from "./StatusTable/Table";
import axios from 'axios';
import YourStatus from "./YourStatus/YourStatus";
import { useState, useEffect } from "react";

export default function Status(){

    const [userData, setUserData] = useState();
    // const userData;

    useEffect(() => {
        axios
            .get("http://localhost:8080/status")
            .then((res) => {
                setUserData(res.data);
                // userData = res.data;
            }).catch((err) => {
                console.log(err);
        })
    }, []);
    
    return(
        <div className="bg-gradient-to-br from-[#EAF2FB] to-white min-h-screen">
            <Table />
            <YourStatus data={userData} />
        </div>
    )
}