import React from "react";
import { Routes, Route } from "react-router-dom";

// import components
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Reservations from "./Reservations";
import OrderOnline from "./OrderOnline";
import Login from "./Login";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/reservations" component={Reservations} />
        <Route exact path="/order-online" component={OrderOnline} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/testimonials" component={Testimonials} />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
