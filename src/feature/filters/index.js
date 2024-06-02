import { useSelector } from "react-redux";
import "./filters.scss";
import { Accordion } from "./Accordion";
import { SearchItems } from "./SearchItems";
import { filterKeys } from "./redux/slice";
import { PriceRangeSelector } from "./PriceRangeSelector";
import { BusTypeSelector } from "./BusTypeSelector";
import { DepartureTimeSelector } from "./DepartureTimeSelector";

export const Filters = () => {
  const { boardingPoints, droppingPoints } = useSelector(
    (state) => state.tours?.tours?.data
  );
  const buspartners = useSelector((state) => {
    return new Set(
      state.tours?.tours?.data?.tours?.map(({ busPartner }) => busPartner)
    );
  });

  return (
    <div className="filters-container">
      <BusTypeSelector />
      <PriceRangeSelector />
      <DepartureTimeSelector />
      <Accordion className="section" title="Bus Partner">
        <SearchItems
          placeholder="Search Bus partner"
          list={[...buspartners].map((i) => ({ stopId: i, name: i }))}
          identifier={filterKeys.BUS_PARTNER}
        />
      </Accordion>
      <Accordion className="section" title="Boarding Points">
        <SearchItems
          placeholder="Search boarding points"
          list={boardingPoints}
          identifier={filterKeys.BOARDING_POINTS}
        />
      </Accordion>
      <Accordion className="section" title="Dropping Points">
        <SearchItems
          placeholder="Search dropping points"
          list={droppingPoints}
          identifier={filterKeys.DROPPING_POINTS}
        />
      </Accordion>
    </div>
  );
};
