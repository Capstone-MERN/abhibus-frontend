import { useDispatch } from "react-redux";
import { setBoarding, setDropping } from "../../redux/slice";
import { formatTime } from "../constantfuncs";

const Points = ({ stop, pointName, tourId }) => {
  const dispatch = useDispatch();
  const handleChange = () => {
    if (pointName === "Boarding") {
      dispatch(setBoarding({ tourId, stop }));
    } else dispatch(setDropping({ tourId, stop }));
  };
  return (
    <div className="point">
      <div className="check">
        <label htmlFor={stop.name} className="material-icons">
          check_box_outline_blank
        </label>
        <input type="checkbox" onChange={handleChange} id={stop.name} />
        <label htmlFor={stop.name}>
          <div>
            <p className="point-name">{stop.name}</p>
            <p className="point-direction">{stop.directions}</p>
          </div>
        </label>
      </div>
      <div className="time">
        <p>{formatTime(stop.time)}</p>
      </div>
    </div>
  );
};

export default Points;
