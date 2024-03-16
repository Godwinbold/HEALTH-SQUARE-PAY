import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateAccount from "../pages/auth/CreateAccount";
import WelcomeBack from "../pages/auth/WelcomeBack";
import ForgottenPassword from "../pages/auth/ForgottenPassword";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/welcomeback" element={<WelcomeBack />} />
        <Route path="/forgottenpassword" element={<ForgottenPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
