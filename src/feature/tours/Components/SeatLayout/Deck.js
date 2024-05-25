import "../../Styles/hierarchy.scss";

export const DeckTypes = {
  LOWER: "LOWER",
  UPPER: "UPPER",
};

const Deck = ({ deckName, layout }) => {
  let rows = 0,
    cols = 0;
  layout.forEach((seat) => {
    rows = Math.max(seat.row, rows);
    cols = Math.max(seat.column, cols);
  });
  rows++;
  cols++;
  const grid = Array(rows).fill([]);

  for (let i = 0; i < grid.length; i++) {
    grid[i] = Array(cols).fill(null);
  }
  layout.forEach((seat) => {
    grid[seat.row][seat.column] = seat;
  });

  return (
    <div className="seat-layout">
      <b>{deckName}</b>
      <div className="hierarchy">
        {grid.map((row) => {
          return (
            <div className="row">
              {row.map((seat) => {
                return <div className="seat">{seat?.seatNumber}</div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Deck;
