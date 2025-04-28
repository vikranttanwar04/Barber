import Table from "./StatusTable/Table";
import YourStatus from "./YourStatus/YourStatus";

export default function Status(){
    
    return(
        <div className="pt-8 bg-gradient-to-br from-[#EAF2FB] to-white">
            <div className="max-w-[50rem]" style={{margin: "0 auto"}}>
                <Table />
                <YourStatus />
            </div>
        </div>
    )
}