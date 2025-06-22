import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Book from './components/Book/Book.jsx';
import './index.css'
import Status from './components/Status/Status.jsx';
import Appointment from './components/Appointment/Appointment.jsx';
import Footer from './components/Footer/Footer.jsx';
import Signup from './components/Authentication/Signup/Signup.jsx';
import Login from './components/Authentication/Login/Login.jsx';
import App from './App.jsx';
import Overview from './NotSigned/Overview/Overview/Overview.jsx';
import { AuthProvider } from './Context/AuthContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App /> } />
        <Route path='/overview' element={<Overview />} />
        <Route path='/book' element={<Book /> } />
        <Route path='/status' element={<Status /> } />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/signup' element={<Signup /> } />
        <Route path='/login' element={<Login /> } />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)