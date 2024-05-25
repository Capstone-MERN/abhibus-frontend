import { SquareIcon, formatTime } from "./constantfuncs";

const Points = ({ stop, handleChange }) => {
  return (
    <div className="point">
      <div className="check">
        <label htmlFor={stop.name}>
          <SquareIcon fill="white" />
        </label>
        <input
          type="checkbox"
          onChange={() => handleChange(stop)}
          id={stop.name}
        />
        <label htmlFor={stop.name}>
          <div>
            <p className="point-name">{stop.name}</p>
            <p className="point-direction">{stop.directions}</p>
          </div>
        </label>
      </div>
      <div className="time">
        <p>{formatTime(stop.arrivalTime)}</p>
      </div>
    </div>
  );
};

export default Points;
