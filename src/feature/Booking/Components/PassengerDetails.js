import React from "react";
import { Button, Form } from "antd";
import Accordion from "./Accordion";
import { ContinueIcon } from "../../../components/icons2";
import PassengerInput from "./PassengerInput";
import "../Styles/PassengerDetails.scss";

const PassengerDetails = ({ seats, totalAmount, handleSubmition }) => {
  return (
    <Form className="passenger-form" onFinish={handleSubmition}>
      <Accordion title="Passenger Details">
        <div className="passengers-details">
          {seats.map((seat) => (
            <PassengerInput key={seat.seatNumber} seat={seat} />
          ))}
        </div>
      </Accordion>
      <Button htmlType="submit" className="continue-btn">
        Continue to Pay
        <span className="material-icons">currency_rupee</span>
        <span>{totalAmount}</span>
        <ContinueIcon />
      </Button>
    </Form>
  );
};

export default PassengerDetails;
