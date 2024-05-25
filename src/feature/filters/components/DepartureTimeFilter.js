import React, { useState } from "react";
import "../../filters/styles.scss";

const DepartureTimeFilter = () => {
  const [selectedTimes, setSelectedTimes] = useState({
    MORNING: false,
    AFTERNOON: false,
    EVENING: false,
    NIGHT: false,
  });

  const handleSelect = (time) => {
    setSelectedTimes((prevSelected) => ({
      ...prevSelected,
      [time]: !prevSelected[time],
    }));
  };
  console.log(selectedTimes);

  return (
    <div className="departure-time">
      <p>Departure Time</p>
      <div className="time-wrapper">
        <div
          className={`time-option ${
            selectedTimes["MORNING"] ? "selected" : ""
          }`}
          onClick={() => handleSelect("MORNING")}
        >
          <span className="material-symbols-outlined">water_lux</span>
          <span>Before 10 AM</span>
        </div>
        <div
          className={`time-option ${
            selectedTimes["AFTERNOON"] ? "selected" : ""
          }`}
          onClick={() => handleSelect("AFTERNOON")}
        >
          <span className="material-symbols-outlined">light_mode</span>
          <span>10 AM - 5 PM</span>
        </div>
        <div
          className={`time-option ${
            selectedTimes["EVENING"] ? "selected" : ""
          }`}
          onClick={() => handleSelect("EVENING")}
        >
          <span className="material-symbols-outlined">light_mode</span>
          <span>5 PM - 11 PM</span>
        </div>
        <div
          className={`time-option ${selectedTimes["NIGHT"] ? "selected" : ""}`}
          onClick={() => handleSelect("NIGHT")}
        >
          <span className="material-symbols-outlined">nights_stay</span>
          <span>After 11 PM</span>
        </div>
      </div>
    </div>
  );
};

export default DepartureTimeFilter;
