import React, { useState, useEffect } from "react";
import "../../filters/styles.scss";

const BusTypeFilter = () => {
  const [selectedBusTypes, setSelectedBusTypes] = useState({
    AC: false,
    "NON AC": false,
    SEATER: false,
    SLEEPER: false,
  });

  const [filteredBuses, setFilteredBuses] = useState([]);
  const buses = [
    { id: 1, name: "Bus A", type: "AC" },
    { id: 2, name: "Bus B", type: "NON AC" },
    { id: 3, name: "Bus C", type: "SEATER" },
    { id: 4, name: "Bus D", type: "SLEEPER" },
    { id: 5, name: "Bus E", type: "AC" },
    { id: 6, name: "Bus F", type: "SLEEPER" },
  ];

  const handleSelect = (type) => {
    setSelectedBusTypes((prevSelected) => ({
      ...prevSelected,
      [type]: !prevSelected[type],
    }));
  };

  useEffect(() => {
    const selectedTypes = Object.keys(selectedBusTypes).filter(
      (type) => selectedBusTypes[type]
    );

    if (selectedTypes.length === 0) {
      setFilteredBuses(buses);
    } else {
      setFilteredBuses(buses.filter((bus) => selectedTypes.includes(bus.type)));
    }
  }, [selectedBusTypes]);

  return (
    <div className="bus-type">
      <p>Bus Type</p>
      <div className="wrapper">
        <div
          className={`bus-option ${selectedBusTypes.AC ? "selected" : ""}`}
          onClick={() => handleSelect("AC")}
        >
          <span className="material-symbols-outlined">ac_unit</span>
          <span>AC</span>
        </div>
        <div
          className={`bus-option ${
            selectedBusTypes["NON AC"] ? "selected" : ""
          }`}
          onClick={() => handleSelect("NON AC")}
        >
          <span className="material-symbols-outlined">mode_fan</span>
          <span>NON AC</span>
        </div>
        <div
          className={`bus-option ${selectedBusTypes.SEATER ? "selected" : ""}`}
          onClick={() => handleSelect("SEATER")}
        >
          <span className="material-symbols-outlined">
            airline_seat_recline_normal
          </span>
          <span>SEATER</span>
        </div>
        <div
          className={`bus-option ${selectedBusTypes.SLEEPER ? "selected" : ""}`}
          onClick={() => handleSelect("SLEEPER")}
        >
          <span className="material-symbols-outlined">bed</span>
          <span>SLEEPER</span>
        </div>
      </div>

      <div className="bus-list">
        <h2>Available Buses</h2>
        {filteredBuses.length > 0 ? (
          <ul>
            {filteredBuses.map((bus) => (
              <li key={bus.id}>
                {bus.name} - {bus.type}
              </li>
            ))}
          </ul>
        ) : (
          <p>No buses available</p>
        )}
      </div>
    </div>
  );
};

export default BusTypeFilter;
