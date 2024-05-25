import React, { useState } from "react";
import "../../filters/styles.scss";
import { Checkbox } from "antd";

const SimpleFilter = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordian = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bus-type">
      <div className="wrap" onClick={toggleAccordian}>
        <p>{title}</p>
        <span
          className={`material-symbols-outlined down-arrow ${
            isOpen ? "up-arrow" : ""
          }`}
        >
          chevron_right
        </span>
      </div>
      {isOpen && (
        <>
          <div className="input-container">
            <span className="material-icons search-icon">search</span>
            <input type="text" placeholder="Search here" />
          </div>
          <div className="checkbox-container">
            {data.map((item, index) => (
              <Checkbox key={index}>{item}</Checkbox>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SimpleFilter;
