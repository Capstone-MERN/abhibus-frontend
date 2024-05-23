import { Dropdown, Space } from "antd";
import { useState } from "react";

const BoardingsAndDroppings = () => {
  const [pointsArrow, setPointsArrow] = useState(false);
  const handlePointsClick = (e) => {
    e.preventDefault();
    setPointsArrow(!pointsArrow);
  };

  const BoardingsAndDroppings = [
    {
      label: "Boarding Points",
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
          items: BoardingsAndDroppings,
        }}
        trigger={["click"]}
      >
        <a
          style={{ color: pointsArrow ? "#ce6683" : "#8a99a5" }}
          onClick={handlePointsClick}
        >
          <Space>Boarding & Dropping Points</Space>
          <span className="material-icons">
            {pointsArrow ? "keyboard_arrow_up" : "keyboard_arrow_down"}
          </span>
        </a>
      </Dropdown>
    </div>
  );
};

export default BoardingsAndDroppings;
