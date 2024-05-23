import Seat from "./Seat";

const Row = ({ row, tourId }) => {
  return (
    <div className="row">
      {row.map((seat) => (
        <Seat key={seat.seatNumber} tourId={tourId} seat={seat} />
      ))}
    </div>
  );
};

export default Row;
