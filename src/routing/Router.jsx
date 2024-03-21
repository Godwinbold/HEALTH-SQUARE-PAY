import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import CreateAccount from "../pages/auth/CreateAccount";
import WelcomeBack from "../pages/auth/WelcomeBack";
import ForgottenPassword from "../pages/auth/ForgottenPassword";
import Profile from "../pages/profile/Profile";
import AboutUs from '../pages/AboutUs'; 
import ContactUs from '../pages/ContactUs';
import FAQ from '../pages/FAQ';
import Homepage from '../pages/Homepage';
import NotFound from '../pages/NotFound';
export default function Router() {
  return (
    <BrowserRouter>
          <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
         <Route index element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/welcomeback" element={<WelcomeBack />} />
        <Route path="/forgottenpassword" element={<ForgottenPassword />} />
    </BrowserRouter>
  );
}
