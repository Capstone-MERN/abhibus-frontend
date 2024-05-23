import { useDispatch } from "react-redux";
import { removeBoarding, removeDropping } from "../../redux/slice";
import { useBoarding, useDropping } from "../../redux/selectors";
import { formatTime } from "../constantfuncs";

const SelectedPointCard = ({ pointName, tourId }) => {
  const Boarding = useBoarding(tourId);
  const Dropping = useDropping(tourId);
  const pointDetails = pointName === "Boarding" ? Boarding : Dropping;
  const dispatch = useDispatch();
  const handleChange = () => {
    if (pointName === "Boarding") {
      dispatch(removeBoarding({ tourId }));
    } else dispatch(removeDropping({ tourId }));
  };

  return (
    <div className="selected-point">
      <div>
        <p>{pointName} Point</p>
        <p className="point-name">{pointDetails.name}</p>
        <p className="point-direction">
          <span>{formatTime(pointDetails.time)} </span>
          {pointDetails.directions}
        </p>
      </div>
      <div>
        <button onClick={handleChange} className="change-point">
          Change
        </button>
      </div>
    </div>
  );
};

export default SelectedPointCard;
