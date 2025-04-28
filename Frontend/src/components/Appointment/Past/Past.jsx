export default function Past(){

    return(
        <div>
            <h1 className="text-3xl mb-4 font-semibold">Past Appointments</h1>
            <table className="border border-separate border-gray-500 mb-4 rounded-xl shadow w-[100%] bg-amber-50">
                    <thead>
                        <tr className="border">
                            <th className="py-2 text-center w-[6rem]">Name</th>
                            <th className="py-2 text-center w-[6rem]">Date</th>
                            <th className="py-2 text-center w-[6rem]">Time</th>
                            <th className="py-2 text-center w-[6rem]">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border">
                            <td className="py-2 text-center">Arjun</td>
                            <td className="py-2 text-center">26 April 2025</td>
                            <td className="py-2 text-center">10:00 AM</td>
                            <td className="py-2 text-center"><span className="border  border-black p-1 rounded bg-[#13b886] inline-block text-center">Completed</span></td>
                        </tr>

                        <tr className="border ">
                            <td className="py-2 text-center">Vikrant</td>
                            <td className="py-2 text-center">26 April 2025</td>
                            <td className="py-2 text-center">10:00 AM</td>
                            <td className="py-2 text-center"><span className="border p-1 rounded bg-[#13b886] inline-block text-center">Completed</span></td>
                        </tr>

                        <tr className="border">
                            <td className="py-2 text-center">Ananya</td>
                            <td className="py-2 text-center">26 April 2025</td>
                            <td className="py-2 text-center">10:00 AM</td>
                            <td className="py-2 text-center"><span className="border p-1 rounded  bg-[#13b886] inline-block text-center">Completed</span></td>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
}