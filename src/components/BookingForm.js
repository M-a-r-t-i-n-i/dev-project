import React, { useState } from "react";

function BookingForm() {
  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });
      if (response.ok) {
        const json = await response.json();
        console.log(json); // show response data in console
        alert("Reservation submitted successfully!");
        setBookingData({
          date: "",
          time: "",
          guests: "",
          occasion: "",
        }); // reset form data
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("Error submitting reservation:", error);
      alert("Error submitting reservation. Please try again later.");
    }
  };

  return (
    <>
      <p className="font-size">Book a table to ensure a delicous experience</p>
      <form onSubmit={handleSubmit} className="grid-container">
        <div className="grid-item">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={bookingData.date}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="grid-item">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={bookingData.time}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="grid-item">
          <label htmlFor="guests">Number of guests:</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="10"
            value={bookingData.guests}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="grid-item">
          <label htmlFor="occasion">Occasion:</label>
          <select
            id="occasion"
            name="occasion"
            value={bookingData.occasion}
            onChange={handleInputChange}
            required
          >
            <option value="">Select an occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="grid-item">
          <button type="submit">Submit reservation</button>
        </div>
      </form>
    </>
  );
}

export default BookingForm;
