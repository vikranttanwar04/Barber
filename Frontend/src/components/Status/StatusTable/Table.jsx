export default function Table(){
    
    return(
        <div className="p-4 sm:px-[10%] md:px-[20%]">
            <div className="max-w-[50rem]">
                <h1 className="text-5xl mb-4 text-[#0A2540] font-semibold">People Before You</h1>
                <table className="border border-separate border-gray-500 mb-4 rounded-xl shadow w-[100%] bg-amber-50">
                    <thead>
                        <tr className="border">
                            <th className="py-2 text-center w-[6rem]">#</th>
                            <th className="py-2 text-center w-[6rem]">Name</th>
                            <th className="py-2 text-center w-[6rem]">Date</th>
                            <th className="py-2 text-center w-[6rem]">Time</th>
                            <th className="py-2 text-center w-[6rem]">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border">
                            <td className="py-2 text-center">1</td>
                            <td className="py-2 text-center">Arjun</td>
                            <td className="py-2 text-center">26 April 2025</td>
                            <td className="py-2 text-center">10:00 AM</td>
                            <td className="py-2 text-center"><span className="border  border-black p-1 rounded bg-[#13b886] text-white inline-block text-center">Ongoing</span></td>
                        </tr>

                        <tr className="border ">
                            <td className="py-2 text-center">2</td>
                            <td className="py-2 text-center">Vikrant</td>
                            <td className="py-2 text-center">26 April 2025</td>
                            <td className="py-2 text-center">10:00 AM</td>
                            <td className="py-2 text-center"><span className="border p-1 rounded bg-[#d0ebf8] inline-block text-center">Pending</span></td>
                        </tr>

                        <tr className="border">
                            <td className="py-2 text-center">3</td>
                            <td className="py-2 text-center">Ananya</td>
                            <td className="py-2 text-center">26 April 2025</td>
                            <td className="py-2 text-center">10:00 AM</td>
                            <td className="py-2 text-center"><span className="border p-1 rounded bg-[#d0ebf8] inline-block text-center">Pending</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}