import Calender from "../Calender/Calender";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  return (
    <body className="bg-[#d0ebf8]">
      <Hero />
      <div className="flex">
        <Calender />
      </div>
    </body>
  );
}
