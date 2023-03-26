import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <div className="centered-container">
        <div className="row">
          <div className="about">
            <img
              src="https://www.lifeberrys.com/img/article/cooking-together-1593235490-lb.jpg"
              alt="About us"
              className="img-fluid mb-4"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            <h2>About Our Restaurant</h2>
            <p>
              Our restaurant was founded in 2010 by Roberto and Elena Calmari, a
              husband and wife team who have a passion for fresh and healthy
              food. Roberto and Elena had been working in the food industry for
              over a decade and were frustrated by the lack of options for
              people who wanted to eat well without sacrificing taste.
            </p>
            <p>
              They decided to start their own restaurant, where they could
              source only the freshest ingredients and use traditional cooking
              methods to create delicious and healthy pizza and pasta dishes.
              They also made a commitment to using only organic and locally
              sourced ingredients whenever possible.
            </p>
            <p>
              Over the years, our restaurant has become a favorite of locals and
              visitors alike, who appreciate our commitment to quality and
              freshness. We believe that good food is essential to a happy and
              healthy life, and we're proud to provide our customers with
              delicious and nutritious meals.
            </p>
            <Link to="/testimonials">
              <Button colorScheme="blue" href="#testimonials">
                Read Testimonials
              </Button>{" "}
            </Link>
            <Link to="/reservations">
              <Button colorScheme="blue" href="#booking-form">
                Book a Table
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
