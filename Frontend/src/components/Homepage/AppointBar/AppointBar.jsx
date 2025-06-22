export default function AppointBar(){

    return(
        <div className="mx-4 my-4 p-4 bg-white rounded-2xl">
            <h1 className="mx-4 mb-5 font-bold text-4xl">Appointments</h1>
            <table className="mb-4 border border-gray-400 border-separate rounded-2xl shadow-xl">
                <thead className="border rounded-tl-xl">
                    <tr>
                        <th className="py-4 w-[20rem]">Name</th>
                        <th className="py-4 w-[20rem]">Date</th>
                        <th className="py-4 w-[20rem]">Time</th>
                        <th className="py-4 w-[20rem]">Status</th>
                    </tr>
                </thead>

                <tbody>

                <tr className="border">
                    <td className="py-4 text-center">Vikrant</td>
                    <td className="py-4 text-center">April 25</td>
                    <td className="py-4 text-center">10:00 AM</td>
                    <td className="py-4 text-center"><span className="inline-block w-[88px] border p-1 rounded bg-[#d0ebf8] text-center ">Pending</span></td>
                </tr>

                <tr className="border">
                    <td className="py-4 text-center">Arjun</td>
                    <td className="py-4 text-center">April 25</td>
                    <td className="py-4 text-center">10:00 AM</td>
                    <td className="py-4 text-center"><span className="inline-block w-[88px] border border-white p-1 rounded bg-[#073349] text-white text-center">Ongoing</span></td>
                </tr>

                <tr className="border">
                    <td className="py-4 text-center">Ananya</td>
                    <td className="py-4 text-center">April 27</td>
                    <td className="py-4 text-center">10:00 AM</td>
                    <td className="py-4 text-center"><span className="inline-block w-[88px] border p-1 rounded bg-[#13b886] text-center">Completed</span></td>
                </tr>

                <tr className="border">
                    <td className="py-4 text-center">Aman</td>
                    <td className="py-4 text-center">April 27</td>
                    <td className="py-4 text-center">10:00 AM</td>
                    <td className="py-4 text-center"><span className="inline-block w-[88px] border p-1 rounded bg-[#13b886] text-center">Completed</span></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}