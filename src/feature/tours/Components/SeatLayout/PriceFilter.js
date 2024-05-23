import { usePriceFilter, useSelectedSeats } from "../../redux/selectors";

const PriceFilter = ({ prices, handlePriceChange, tourId }) => {
  const selectedPrice = usePriceFilter(tourId);
  const selectedSeats = useSelectedSeats(tourId);

  const countSelectedSeat = (price) => {
    let count = 0;

    selectedSeats.forEach((seat) => {
      if (seat.price == price) count++;
    });
    return count;
  };
  return (
    <div className="price_filter_container">
      <button
        className={`filter-button ${
          !selectedPrice || selectedPrice === "all" ? "selected" : ""
        }`}
        onClick={() => handlePriceChange("all")}
      >
        All
      </button>
      {prices.map((price, index) => {
        const countSeat = countSelectedSeat(price);
        return (
          <button
            key={index}
            className={`filter-button ${
              selectedPrice === price ? "selected" : ""
            }`}
            onClick={() => handlePriceChange(price)}
          >
            <span className="material-icons">currency_rupee</span>
            {price}
            {countSeat > 0 ? " x " + countSeat : ""}
          </button>
        );
      })}
    </div>
  );
};

export default PriceFilter;
