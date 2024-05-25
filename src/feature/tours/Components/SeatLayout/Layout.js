import Deck, { DeckTypes } from "./Deck";
import Stops from "./Stops";
import SelectedSeatCard from "./SelectedSeatCard";
import { useBoarding } from "../../redux/selectors";
import { SeatLayout } from "./SeatLayout";
import { StopSelection } from "./StopSelection";

const Layout = ({ layout, tourId }) => {
  // const BoardingPoint = useBoarding(tourId);

  return (
    <div className="seat_layout">
      {/* <div className="layout">
        {layout?.upperDeck && (
          <Deck deckName={DeckTypes.UPPER} layout={layout.upperDeck} />
        )}
        <Deck deckName={DeckTypes.LOWER} layout={layout.lowerDeck} />
      </div> */}
      <SeatLayout />
      {/* <div className="stops">
        <Stops pointName={"Boarding"} />
        {BoardingPoint.stopId && (
          <Stops tourId={tourId} pointName={"Dropping"} />
        )}
        <div className="continue_booking">
          <SelectedSeatCard tourId={tourId} />
        </div>
      </div> */}
      <StopSelection />
    </div>
  );
};

export default Layout;
