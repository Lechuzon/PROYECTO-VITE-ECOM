import React from "react";
import "../src/App.css"
import Home from "../src/pages/Home";
import OurStore from "./pages/OurStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/components/Layout";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import Wishlist from "./pages/Wishlist";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="product" element={<OurStore />}/>
            <Route path="blogs" element={<Blog />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="wishlist" element={<Wishlist />}/>
            <Route path="login" element={<Login />}/>
            <Route path="forgot-password" element={<Forgotpassword />}/>
            <Route path="signup" element={<Signup />}/>
            <Route path="reset-password" element={<Resetpassword />}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
