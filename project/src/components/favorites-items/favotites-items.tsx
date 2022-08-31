import FavoritesCart from '../favorites-cart/favorites-cart';
import {FavoriteOffers} from '../../types/favorite';

type FavoritesItemsProps = {
  favorites: FavoriteOffers;
}

function FavoritesItems({favorites} : FavoritesItemsProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{favorites.city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favorites.offers.map((offer) => <FavoritesCart offer={offer} key={offer.id}/>)}
      </div>
    </li>
  );
}

export default FavoritesItems;
