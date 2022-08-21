import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Stories from "./Stories";
import Footer from "./Footer";
import CreateStory from "./CreateStory";
import UserWelcome from "./UserWelcome";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="stories" element={<Stories />} />
        <Route path="createstory" element={<CreateStory />} />
        <Route path="user" element={<UserWelcome />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
