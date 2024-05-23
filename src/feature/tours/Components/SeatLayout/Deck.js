import { SteeringIcon } from "../constantfuncs";
import Row from "./Row";
import PropTypes from "prop-types";

const Deck = ({ deckName, tourId, layout }) => {
  const rows = new Array(3).fill().map(() => []);

  layout.forEach((item) => {
    rows[item.row].push(item);
  });

  return (
    <div className="deck">
      <div className="deck-name">
        {deckName === "Lower" && <SteeringIcon />}
        <h3>{deckName}</h3>
      </div>
      <div className="seats">
        {rows.map((row, index) =>
          row.length > 0 ? <Row key={index} tourId={tourId} row={row} /> : null
        )}
      </div>
    </div>
  );
};

Deck.propTypes = {
  deckName: PropTypes.string.isRequired,
  tourId: PropTypes.string.isRequired,
  layout: PropTypes.arrayOf(
    PropTypes.shape({
      row: PropTypes.number.isRequired,
      seatNumber: PropTypes.string.isRequired,
      seatType: PropTypes.string,
      gender: PropTypes.string,
      price: PropTypes.number,
    })
  ).isRequired,
};

export default Deck;
