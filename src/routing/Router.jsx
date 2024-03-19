import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateAccount from "../pages/auth/CreateAccount";
import WelcomeBack from "../pages/auth/WelcomeBack";
import ForgottenPassword from "../pages/auth/ForgottenPassword";
import Profile from "../pages/profile/Profile";
import Dashboard from "../pages/dashboard/Dashboard";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/welcomeback" element={<WelcomeBack />} />
        <Route path="/forgottenpassword" element={<ForgottenPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
