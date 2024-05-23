import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import Points from "./Points";
import SelectedPointCard from "./SelectedPointCard";
import {
  useBoarding,
  useBoardingStops,
  useDropping,
  useDroppingStops,
} from "../../redux/selectors";

const Stops = ({ pointName, tourId }) => {
  const boardingStops = useBoardingStops();
  const droppingStops = useDroppingStops();
  const boarding = useBoarding(tourId);
  const dropping = useDropping(tourId);

  const stopsArray = pointName === "Boarding" ? boardingStops : droppingStops;
  const selectedStop = pointName === "Boarding" ? boarding : dropping;

  const [searchQuery, setSearchQuery] = useState("");

  const filteredStops = useMemo(() => {
    return stopsArray.filter((stop) =>
      stop.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [stopsArray, searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return !selectedStop.stopId ? (
    <div className="stops_container">
      <div>
        <div className="search_bar">
          <span className="material-icons">search</span>
          <input
            type="text"
            onChange={handleSearch}
            placeholder={`Search ${pointName} Point`}
          />
        </div>
      </div>
      <div className="point-list">
        {filteredStops.map((stop) => (
          <Points
            key={stop.stopId}
            tourId={tourId}
            stop={stop}
            pointName={pointName}
          />
        ))}
      </div>
    </div>
  ) : (
    <SelectedPointCard tourId={tourId} pointName={pointName} />
  );
};

Stops.propTypes = {
  pointName: PropTypes.string.isRequired,
  tourId: PropTypes.string.isRequired,
};

export default Stops;
