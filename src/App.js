import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import BookingForm from "./components/BookingForm";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/About";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";
import Testimonials from "./components/Testimonials";
// import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
// import { ChakraTheme } from "@chakra-ui/react";
// import {
//   Box,
//   Button,
//   Heading,
//   SimpleGrid,
//   Text,
//   VStack,
// } from "@chakra-ui/react";

function App() {
  return (
    <>
      {/* <ChakraBaseProvider> */}
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<BookingForm />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>

        <Footer />
      </div>
      {/* </ChakraBaseProvider> */}
    </>
  );
}

export default App;
