import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import "./home.css";

export default function HomeNotSigned() {

  return (
    <>
      <div id="hero" className="bg-gradient-to-br from-[#EAF2FB] to-white p-12 m-4 rounded min-h-screen">
        <div className="md:w-[60%] mb-4">
          <h1 className="text-4xl font-bold mb-4">ModernCut : Keep your style updated with the time </h1>
          <p className="text-xl mb-4">
            No need to worry about the turn just get the appointment
          </p>
          <a
            href="/signup"
            className="inline-block bg-[#E74C3C] text-white text-xl px-4 py-2 rounded"
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
}
