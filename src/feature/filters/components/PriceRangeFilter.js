import React, { useState } from "react";
import { Slider } from "antd";
import "../../filters/styles.scss";

const PriceRangeFilter = () => {
  const [range, setRange] = useState([750, 3875]);

  const onChange = (value) => {
    setRange(value);
  };

  return (
    <div className="bus-type">
      <p>Price Range</p>
      <div style={{ width: 240, margin: "0 0", padding: "0 0" }}>
        <div className="slider-count">
          <span>{range[0]}</span>
          <span>{range[1]}</span>
        </div>
        <Slider
          style={{ color: "red" }}
          range
          min={750}
          max={3875}
          value={range}
          onChange={onChange}
        />
        <div className="slider-count">
          <span>
            <b>750</b>
          </span>
          <span>
            <b>3875</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
