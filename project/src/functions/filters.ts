import {Offers} from '../types/offers';

function getSortOffers(offers : Offers, activeFilter: string){
  switch (activeFilter){
    case 'PriceLowToHigh':
      offers.sort((a, b) => (a.price - b.price));
      break;
    case 'PriceHighToLow':
      offers.sort((a, b) => (b.price - a.price));
      break;
    case 'TopRatedFirst':
      offers.sort((a, b) => (b.rating - a.rating));
      break;
  }
}

export default getSortOffers;
