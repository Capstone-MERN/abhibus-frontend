import { useDispatch } from "react-redux";
import { ACIcon, NonAC } from "../../components/Icons";
import { filterKeys, updateStop } from "./redux/slice";

const busTypes = [
  {
    title: "AC",
    identifier: "AC",
    icon: <ACIcon />,
  },
  {
    title: "Non AC",
    identifier: "NON_AC",
    icon: <NonAC />,
  },
  // TODO: add below types also in future
  // {
  //   title: "Seater",
  //   identifier: "SEATER",
  //   icon: <Seater />,
  // },
  // {
  //   title: "Sleeper",
  //   identifier: "SLEEPER",
  //   icon: <Sleeper />,
  // },
];

export const BusTypeSelector = () => {
  const dispatch = useDispatch();

  const updateBusTypeFilter = (add, value) => {
    dispatch(
      updateStop({ identifier: filterKeys.BUS_TYPE, stopId: value, add })
    );
  };

  return (
    <div className="section">
      <span className="title">Bus Type</span>
      <div className="boxes">
        {busTypes.map((busType) => {
          return (
            <div className="box" key={busType.identifier}>
              <input
                type="checkbox"
                id={busType.identifier}
                className="select-box"
                onChange={(e) => {
                  updateBusTypeFilter(e.target.checked, busType.identifier);
                }}
              />
              <label htmlFor={busType.identifier}>
                {busType.icon}
                <span>{busType.title}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
