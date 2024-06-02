import { useDispatch } from "react-redux";
import { AfterNoon, Evening, Morining, Night } from "../../components/Icons";
import { departureTimeKeys, filterKeys, updateStop } from "./redux/slice";

const departureTimes = [
  {
    title: "Before 10AM",
    identifier: departureTimeKeys.MORNING,
    icon: <Morining />,
  },
  {
    title: "10AM - 5PM",
    identifier: departureTimeKeys.AFTERNOON,
    icon: <AfterNoon />,
  },
  {
    title: "5PM - 11PM",
    identifier: departureTimeKeys.EVENING,
    icon: <Evening />,
  },
  {
    title: "After 11PM",
    identifier: departureTimeKeys.NIGHT,
    icon: <Night />,
  },
];

export const DepartureTimeSelector = () => {
  const dispatch = useDispatch();
  const updateDipartureTime = (add, value) => {
    dispatch(
      updateStop({
        add,
        stopId: value,
        identifier: filterKeys.DEPARTURE_TIME,
      })
    );
  };

  return (
    <div className="section">
      <span className="title">Departure Time</span>
      <div className="boxes">
        {departureTimes.map((departureTime) => {
          return (
            <div className="box" key={departureTime.identifier}>
              <input
                type="checkbox"
                id={departureTime.identifier}
                className="select-box"
                onChange={(e) => {
                  updateDipartureTime(
                    e.target.checked,
                    departureTime.identifier
                  );
                }}
              />
              <label htmlFor={departureTime.identifier}>
                {departureTime.icon}
                <span>{departureTime.title}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
