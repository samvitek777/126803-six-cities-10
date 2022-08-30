import {City, Offers} from '../../types/offers';
import FavoritesCart from '../favorites-cart/favorites-cart';

type FavoritesItemsProps = {
  favorites: Offers,
  city: City
}

function FavoritesItems({favorites, city} : FavoritesItemsProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <FavoritesCart/>
      </div>
    </li>
  );
}

export default FavoritesItems;
