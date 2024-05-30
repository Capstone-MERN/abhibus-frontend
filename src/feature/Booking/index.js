import Auth from "../Auth";
import Header from "./Components/Header";
import TripDetails from "./Components/TripDetails";
import PassengerDetails from "./Components/PassengerDetails";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "./Components/Accordion";
import FareDetails from "./Components/FareDetails";
import { useState } from "react";
import { bookTour } from "./redux/slice";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import "./Styles/index.scss";

const Booking = () => {
  const [totalAmount, setTotalAmount] = useState("");

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const booking = useSelector((state) => state.booking);

  localStorage.setItem("booking", JSON.stringify(booking));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const bookCurrentTour = async (bookingData) => {
    const result = await dispatch(bookTour(bookingData));
    if (bookTour.fulfilled.match(result)) {
      message.success("Booking Successful!");
      navigate("/home");
    } else {
      message.error(result.payload || "Booking Failed");
    }
  };

  const setAmount = (amount) => setTotalAmount(amount);

  const handleSubmition = (data) => {
    const map = new Map();

    Object.keys(data).map((key) => {
      const [seatNumer, val] = key.split("_");
      map[seatNumer] = map[seatNumer] ? map[seatNumer] : {};
      if (val === "gender") {
        map[seatNumer][val] = data[key] ?? "M";
      } else map[seatNumer][val] = data[key];
      map[seatNumer]["seatNumber"] = seatNumer;
    });

    const seats = [];
    for (let value of Object.values(map)) {
      seats.push(value);
    }

    const bookingData = {
      tourId: booking.service.tourId,
      seats,
    };
    bookCurrentTour(bookingData);
  };

  return (
    <>
      {!isLoggedIn && <Auth />}
      <div className="booking-container">
        <Header
          sourceCity={booking.sourceCity}
          destCity={booking.destCity}
          travelTime={booking.service.startTime}
        />
        <div className="container">
          <div className="left-container">
            <Accordion title="Trip Details" open={false}>
              <TripDetails booking={booking} />
            </Accordion>

            <PassengerDetails
              seats={booking.seats}
              totalAmount={totalAmount}
              handleSubmition={handleSubmition}
            />
          </div>
          <div className="right-container">
            <FareDetails seats={booking.seats} setAmount={setAmount} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
