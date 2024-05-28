import { Slider } from "antd";

export const PriceRangeSelector = () => {
  const min = 400,
    max = 1500;
  const selectedMin = 600,
    selectedMax = 900;

  const onChangeRange = (e) => {
    console.log(e);
  };

  return (
    <div className="section">
      <span className="title">Price Range</span>
      <div style={styles.fraic}>
        <span>{selectedMin}</span>
        <span>{selectedMax}</span>
      </div>
      <Slider
        min={min}
        max={max}
        defaultValue={[selectedMin, selectedMax]}
        onChange={onChangeRange}
        onChangeComplete={(val) => console.log(val)}
      />
      <div style={styles.fraic}>
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

const styles = {
  fraic: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#000",
  },
};
