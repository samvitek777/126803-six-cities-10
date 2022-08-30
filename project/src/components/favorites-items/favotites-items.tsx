import {Offers} from '../../types/offers';
import FavoritesCart from '../favorites-cart/favorites-cart';

type FavoritesItemsProps = {
  offers: [string, Offers],
}

function FavoritesItems({offers} : FavoritesItemsProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>offers[0]</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers[1].map((offer) => <FavoritesCart offer={offer} key={offer.id}/>)}
      </div>
    </li>
  );
}

export default FavoritesItems;
