import {Offers} from '../../types/offers';
import Card from '../card/card';

type OfferListProps = {
  offers: Offers;
  setMouseFocusId: (state: number) => void;
}

function OfferList({offers, setMouseFocusId} : OfferListProps): JSX.Element {
  return (
    <>
      {offers.map((offer ) => <Card key={offer.id} offer={offer} setMouseFocusId={setMouseFocusId}/>)}
    </>
  );
}

export default OfferList;
