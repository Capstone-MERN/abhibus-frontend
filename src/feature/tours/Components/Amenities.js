import { Dropdown, Space } from "antd";
import { useState } from "react";

const Amenities = () => {
  const [amenitiesArrow, setAmenitiesArrow] = useState(false);
  const handleAmenitiesClick = (e) => {
    e.preventDefault();
    setAmenitiesArrow(!amenitiesArrow);
  };
  const Amenities = [
    {
      label: "Amenities",
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: "2nd menu item",
      key: "1",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];
  return (
    <div>
      <Dropdown
        menu={{
          items: Amenities,
        }}
        trigger={["click"]}
      >
        <a
          style={{ color: amenitiesArrow ? "#ce6683" : "#8a99a5" }}
          onClick={handleAmenitiesClick}
        >
          <Space>Amenities</Space>
          <span className="material-icons">
            {amenitiesArrow ? "keyboard_arrow_up" : "keyboard_arrow_down"}
          </span>
        </a>
      </Dropdown>
    </div>
  );
};

export default Amenities;
