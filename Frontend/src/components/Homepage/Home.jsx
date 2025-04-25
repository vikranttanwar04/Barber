import CalAppoint from "../CalAppoint/CalAppoint";
import Calender from "../Calender/Calender";
import Hero from "../Hero/Hero";
import './Home.css';
import AppointBar from "../AppointBar/AppointBar";

export default function Home() {
  return (
    <body className="bg-[#d0ebf8]">
      <Hero />
      <div className="box">
        <div className="bg-white m-4 py-1 rounded-2xl">
          <Calender />
          <CalAppoint />
        </div>
        <AppointBar />
      </div>
    </body>
  );
}
