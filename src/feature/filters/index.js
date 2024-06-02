import { useSelector } from "react-redux";
import "./filters.scss";
import { Accordion } from "./Accordion";
import { SearchItems } from "./SearchItems";
import { filterKeys } from "./redux/slice";
import { PriceRangeSelector } from "./PriceRangeSelector";
import { BusTypeSelector } from "./BusTypeSelector";
import { DepartureTimeSelector } from "./DepartureTimeSelector";
import { Drawer } from "antd";
import { useState } from "react";
import {
  boardingAndDroppingPointsSelector,
  uniqueBusPartnersSelector,
} from "./redux/selectors";

const Filters = () => {
  const { boardingPoints, droppingPoints } = useSelector(
    boardingAndDroppingPointsSelector
  );
  const buspartners = useSelector(uniqueBusPartnersSelector);

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

export const FiltersWrapper = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const screenWidth = window.innerWidth;

  return (
    <>
      {screenWidth <= 600 ? (
        <>
          <button
            className="material-icons filter-icon"
            onClick={() => setOpenDrawer(true)}
          >
            filter_list
          </button>
          <Drawer
            width={screenWidth - 20}
            title="Apply Filters"
            open={openDrawer}
            closable
            onClose={() => setOpenDrawer(false)}
            styles={{ body: { padding: 0 } }}
          >
            <Filters />
          </Drawer>
        </>
      ) : (
        <Filters />
      )}
    </>
  );
};
