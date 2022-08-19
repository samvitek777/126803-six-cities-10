import {City, Offers} from '../types/offers';
import OfferList from '../components/offer-list/offer-list';
import Map from '../components/map/map';
import {useAppDispatch, useAppSelector} from '../hooks';
import ListCities from '../components/list-cities/list-cities';
import {useState} from 'react';
import {getActiveCity} from '../store/action';
import SortOptions from '../components/sort-options/sort-options';

function MainScreen(): JSX.Element {
  const activeCity : string = useAppSelector((state) => state.activeCity);
  const offers : Offers = useAppSelector((state) => state.offers);
  const offersActiveCity : Offers = offers.filter((offer) => offer.city.name === activeCity);
  switch (useAppSelector((state) => state.activeFilter)){
    case 'PriceLowToHigh':
      offersActiveCity.sort((a, b) => (a.price - b.price));
      break;
    case 'PriceHighToLow':
      offersActiveCity.sort((a, b) => (b.price - a.price));
      break;
    case 'TopRatedFirst':
      offersActiveCity.sort((a, b) => (b.rating - a.rating));
      break;
  }
  const city : City = offersActiveCity[0].city;
  const dispatch = useAppDispatch();
  const [mouseFocusId, setMouseFocusId] = useState(0);
  const setSelectedCityHandler = (cityName: string) => {dispatch(getActiveCity(cityName));};
  return (
    <>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path>
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path
              d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"
            >
            </path>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
            >
            </path>
          </symbol>
        </svg>
      </div>

      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">3</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <ListCities setSelectedCityHandler={setSelectedCityHandler} activeCity={city}/>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersActiveCity.length} places to stay in {city.name}</b>
                <SortOptions/>
                <div className="cities__places-list places__list tabs__content">
                  <OfferList offers={offersActiveCity} setMouseFocusId={setMouseFocusId}/>
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map city={city} offers={offersActiveCity} selectedCardId={mouseFocusId}></Map>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default MainScreen;
