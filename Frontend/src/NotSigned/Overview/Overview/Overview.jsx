import Image from "../Image/Image";
import './overview.css';
import customer from './../../../assets/customer.jpg'
import Chairs from './../../../assets/Chairs.jpg'
import Chairs2 from './../../../assets/Chairs2.jpg'
import Chairs3 from './../../../assets/Chairs3.jpg'
import customer_mirror from './../../../assets/customer_mirror.jpg'
import customer2 from './../../../assets/customer2.jpg'
import Left from "../Sections/Left";
import Right from "../Sections/Right";


export default function Overview(){
    
    return(
        <div className="overview-container bg-gradient-to-br from-[#EAF2FB] to-white min-h-screen">
            <div className="wrapper max-w-[512px] p-2">
                <div className="overview-header">
                    <h1 className="text-5xl text-[#0A2540] text-center font-bold mb-4">Overview</h1>
                    <p id="overview-brief" className="text-xl mb-4">Welcome to our barbershop! We offer a range <br/>of grooming services in a modern and comfortable setting.</p>

                    <a href="#services" className="inline-block bg-[#E74C3C] text-white text-xl px-4 py-2 rounded">View Services</a>
                </div>

                <div className="images flex justify-around">
                    <div className="flex justify-between">
                        <Image imgSrc={customer} />
                        <Image imgSrc={Chairs} />
                    </div>
                </div>

                <div className="images flex justify-around mb-2">
                    <div className="flex justify-between">
                        <Image imgSrc={Chairs2} />
                        <Image imgSrc={customer_mirror} />
                    </div>
                </div>
            </div>
            
            <div id="services">
                <div className="left-right flex justify-around m-5 mt-7">
                    <Left imgSrc={customer2} />
                    <Right head="Our Services" desc="We provide a variety of services including haircuts, beard trims, manicures and padicures. Our experienced barbers are here to help you look your best." />
                </div>

                <div className="left-right flex justify-around m-5 mt-7">
                    <Right head="About Us" desc="Our barbershop offers a modern, wellcoming environment where you can relax and enjoy exceptional grooming services in comfort." />
                    <Left imgSrc={Chairs3}/>
                </div>
            </div>

        </div>
    )
}