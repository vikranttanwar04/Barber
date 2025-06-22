import './CalAppoint.css';

export default function CalAppoint(){

    return(
        <div className="cal-appoint m-4 :hidden">
            <h1 className="mb-2 font-black text-2xl">Appointments</h1>
            <table className="mb-4 border border-gray-400 border-separate rounded-xl shadow">
                <tbody>
                    <tr className="border ">
                        <td className="py-2 w-[20rem] text-center">Vikrant</td>
                        <td className="py-2 w-[20rem] text-center">10:00 AM</td>
                        <td className="py-2 w-[20rem] text-center">10:00 AM</td>
                        <td className="py-2 w-[20rem] text-center"><span className="border p-1 rounded bg-[#d0ebf8] inline-block w-[5.5rem] text-center">Pending</span></td>
                    </tr>

                    <tr className="border">
                        <td className="py-2 w-[20rem] text-center">Arjun</td>
                        <td className="py-2 w-[20rem] text-center">10:00 AM</td>
                        <td className="py-2 w-[20rem] text-center">10:00 AM</td>
                        <td className="py-2 w-[20rem] text-center"><span className="border p-1 rounded bg-[#073349] text-white inline-block w-[5.5rem] text-center">Ongoing</span></td>
                    </tr>

                    <tr className="border">
                        <td className="py-2 w-[20rem] text-center">Ananya</td>
                        <td className="py-2 w-[20rem] text-center">10:00 AM</td>
                        <td className="py-2 w-[20rem] text-center">10:00 AM</td>
                        <td className="py-2 w-[20rem] text-center"><span className="border p-1 rounded bg-[#13b886] inline-block w-[5.5rem] text-center">Completed</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}