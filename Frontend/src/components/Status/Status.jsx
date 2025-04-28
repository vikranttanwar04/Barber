import Table from "./StatusTable/Table";
import YourStatus from "./YourStatus/YourStatus";

export default function Status(){
    
    return(
        <div className="bg-gradient-to-br from-[#EAF2FB] to-white min-h-screen">
            <Table />
            <YourStatus />
        </div>
    )
}