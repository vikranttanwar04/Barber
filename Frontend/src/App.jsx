import { use, useState } from "react";
import "./App.css";
import HomeNotSigned from "./NotSigned/Home/HomeNotSigned.jsx";
import HomeSigned from "./components/Homepage/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Book from "./components/Book/Book.jsx";
import { useAuth } from "./Context/AuthContext.jsx";

function App() {
  const {isLoggedIn, setIsLoggedIn} = useAuth();

  return (
    <>
      {(isLoggedIn) ? <HomeSigned /> : <HomeNotSigned />}
    </>
  );
}

export default App;
