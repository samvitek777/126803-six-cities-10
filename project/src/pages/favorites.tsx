import HeaderScreen from '../components/header/header';
import {City, Offers} from '../types/offers';
import {useAppDispatch, useAppSelector} from '../hooks';
import {getFavorites} from '../store/app-data/selectors';
import {useEffect} from 'react';
import {fetchFavoritesByIdAction} from '../store/api-actions';
import {Cities} from '../const';
import FavoritesItems from '../components/favorites-items/favotites-items';

function Favorites(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoritesByIdAction());
  }, []);
  const favorites : Offers = useAppSelector(getFavorites);
  const myMapFavorites = new Map<City, Offers>();
  Cities.forEach( (city) => {
    const favoritesOffers = favorites.filter((offer) => offer.city.name === city.name);
    if(favoritesOffers.length > 0){
      myMapFavorites.set(city, favoritesOffers);
    }
  });
  return (
    <>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path>
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path>
          </symbol>
        </svg>
      </div>

      <div className="page">
        <HeaderScreen/>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {myMapFavorites.forEach((value : Offers, city : City) => {<FavoritesItems city={city} favorites={value} key={city.name}/>;})};
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </a>
        </footer>
      </div>
    </>
  );
}

export default Favorites;
