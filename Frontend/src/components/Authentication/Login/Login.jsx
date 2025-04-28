import '../Signup/Signup';

export default function Login(){
    return(
        <div className="p-10 bg-gradient-to-br from-[#EAF2FB] to-white">
            <div id='wrapper'>
                <div>
                    <h1 className="text-5xl text-[#0A2540] font-semibold">Login</h1>
                    {/* <p className="m-4 mx-0 text-xl text-[#6B7280]">Create an account to get started.</p> */}
                </div>

                <form action="">
                    <div>
                        <input type="email" className="rounded bg-white px-3 py-2 border border-[#B0C4DE]" placeholder="Email" name="mail" />
                    </div>
                    <div>
                        <input type="password" className="rounded bg-white px-3 py-2 border border-[#B0C4DE]" placeholder="Password" name="password" />
                    </div>
                    <a className='text-blue-800 underline' href='/signup'>Don't have an account? Sign up</a>

                    <div className='mt-4'>
                        <button className="inline-block sm:w-m  text-x font-bold px-4 py-2 border rounded cursor-pointer bg-[#0A2540] text-amber-50">Sign up</button>
                    </div>
                </form>
            </div>

        </div>
    )
}