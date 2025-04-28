import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Homepage/Home.jsx';
import Book from './components/Book/Book.jsx';
import './index.css'
import Status from './components/Status/Status.jsx';
import Appointment from './components/Appointment/Appointment.jsx';
import Footer from './components/Footer/Footer.jsx';
import Signup from './components/Authentication/Signup/Signup.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/book' element={<Book /> } />
        <Route path='/status' element={<Status /> } />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/signup' element={<Signup /> } />
        {/* <Route path='/thanks' element={<Thanks />} />
        <Route path='*' element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)