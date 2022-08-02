import {Offers} from '../../types/offers';
import Card from '../card/card';
import {useState} from 'react';

type OfferListProps = {
  offers: Offers;
}

function OfferList({offers} : OfferListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mouseFocusId, setMouseFocusId] = useState(0);
  return (
    <>
      {offers.map((offer ) => <Card key={offer.id} offer={offer} setMouseFocusId={setMouseFocusId}/>)}
    </>
  );
}

export default OfferList;
