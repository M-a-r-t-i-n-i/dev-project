import React from "react";
import { Link } from "react-router-dom";
// import Menu from "./Menu";
import { menu } from "./Menu";

function Home() {
  const specials = [
    { day: "Monday", dish: "Spaghetti Carbonara", picture: 6 },
    { day: "Tuesday", dish: "Mushroom Pizza", picture: 5 },
    { day: "Wednesday", dish: "Penne Arrabiata", picture: 0 },
    { day: "Thursday", dish: "Caprese Pizza", picture: 4 },
    { day: "Friday", dish: "Linguine alla Vongole", picture: 2 },
  ];

  return (
    <div className="centered-container">
      <h1>The Little Lemon</h1>
      <h2>Located in Chicago, IL</h2>
      <p className="font-size">
        We offer fresh and healthy food options made with locally-sourced
        ingredients.
      </p>
      <Link to="/reservations">
        <button>Book a Table </button>
      </Link>
      <div className="highlights">
        <h3 className="font-size">Weekly Specials</h3>
        <ul>
          {specials.map((special) => (
            <li className="specials" key={special.day}>
              {special.day}:{"   "}
              {special.dish}
              {"   "}
              <Link to="/menu">
                {/* {special.dish} */}
                <img
                  src={menu[special.picture].picture}
                  alt={menu[special.picture].name}
                  width="50"
                  height="50"
                />
              </Link>
            </li>
          ))}
        </ul>
        <Link className="link" to="/menu">
          View Our Full Menu
        </Link>
      </div>
      <p className="font-size">Specials are 20% off the standard Menu price</p>
      {/* <p>Address: 1234 N State St, Chicago, IL 60601</p> */}
    </div>
  );
}

export default Home;
