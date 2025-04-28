import Current from "./Current/Current";
import Past from "./Past/Past";

export default function Appointment(){

    return(
        <div className="p-10 sm:px-[20%] bg-gradient-to-br from-[#EAF2FB] to-white min-h-screen">
            <div className="max-w-[50rem]" style={{margin: "0 auto"}} >
                <Current />
                <Past />
            </div>
        </div>

    )
}