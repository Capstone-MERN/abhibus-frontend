import Seat from "./Seat";

const Row = ({ row }) => {
  return (
    <div className="row">
      {row.map((seat) => (
        <Seat key={seat.seatNumber} seat={seat} />
      ))}
    </div>
  );
};

export default Row;
