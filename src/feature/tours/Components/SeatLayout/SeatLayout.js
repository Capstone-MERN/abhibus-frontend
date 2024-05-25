import Deck, { DeckTypes } from "./Deck";

export const SeatLayout = ({ seatLayout }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {seatLayout.upperDeck && (
        <Deck deckName={DeckTypes.UPPER} layout={seatLayout.upperDeck} />
      )}
      <Deck deckName={DeckTypes.LOWER} layout={seatLayout.lowerDeck} />
    </div>
  );
};
