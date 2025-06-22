import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
// import './footer.css';

export default function Footer(){

    return(
        <footer className="bg-slate-950 p-10 px-25 text-amber-50">
            <div className="mb-4 flex justify-center sm:justify-between md:justify-around flex-wrap justify-items-center">
                <div className="me-8 mt-8">
                    <p className="text-xl font-semibold mb-1">About us</p>
                    <p className="text-sm font-medium mb-1">Who we are</p>
                    <p className="text-sm font-medium mb-1">How it works</p>
                    <p className="text-sm font-medium mb-1">Terms & Privacy</p>
                </div>
                
                <div className="me-8 mt-8">
                    <p className="text-xl font-semibold mb-1">Quick Links</p>
                    <p className="text-sm font-medium mb-1"><a href="/">Home</a></p>
                    <p className="text-sm font-medium mb-1"><a href="/book">Book Appointment</a></p>
                    <p className="text-sm font-medium mb-1"><a href="/status">Queue Status</a></p>
                </div>

                <div className="me-8 mt-8">
                    <p className="text-xl font-semibold mb-1">Contact</p>
                    <p className="text-sm font-medium mb-1"><a href="mailto: vikranttanwar124108@gmail.com">support@gmail.com</a></p>
                    <p className="text-sm font-medium mb-1"><a href="tel:9306476948">+91 93064 76948</a></p>
                    <p className="text-sm font-medium mb-1"><a href="geo:28.4267,-76.7023">Kheri Sultan, Jhajjar, India</a></p>
                </div>
            </div>

            <div className="text-sm font-medium mb-1 text-center" >&copy; 2025 ModernCut. All rights reserved.</div>

            <div className="text-center mt-4">
                <a href="" className='mx-3'><XIcon /></a>
                <a href="" className='mx-3'><InstagramIcon /></a>
                <a href="" className='mx-3'><FacebookIcon /></a>
            </div>
        </footer>
    )
}