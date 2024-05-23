export const PassengerDetails = ({ seatsInfo }) => {
  return (
    <div>
      {seatsInfo?.map((seat) => {
        return (
          <div>
            <p>Add passanger details for : {seat}</p>
            <form></form>
          </div>
        );
      })}
    </div>
  );
};
