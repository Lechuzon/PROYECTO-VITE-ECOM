import React from "react";
import "../src/App.css"
import Home from "../src/pages/Home";
import OurStore from "./pages/OurStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/components/Layout";



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="product" element={<OurStore />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
