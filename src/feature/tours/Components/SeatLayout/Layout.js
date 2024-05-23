import Deck from "./Deck";
import Stops from "./Stops";
import SelectedSeatCard from "./SelectedSeatCard";
import { useBoarding } from "../../redux/selectors";

const Layout = ({ layoutData, tourId }) => {
  const BoardingPoint = useBoarding(tourId);

  return (
    <div className="seat_layout">
      <div className="layout">
        <Deck
          tourId={tourId}
          deckName="Upper"
          layout={layoutData.layout.upperDeck}
        />
        <Deck
          tourId={tourId}
          deckName="Lower"
          layout={layoutData.layout.lowerDeck}
        />
      </div>
      <div className="stops">
        <Stops tourId={tourId} pointName={"Boarding"} />
        {BoardingPoint.stopId && (
          <Stops tourId={tourId} pointName={"Dropping"} />
        )}
        <div className="continue_booking">
          <SelectedSeatCard tourId={tourId}/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
