import {City, Offers} from '../types/offers';
import OfferList from '../components/offer-list/offer-list';
import Map from '../components/map/map';
import {useAppDispatch, useAppSelector} from '../hooks';
import ListCities from '../components/list-cities/list-cities';
import {useState} from 'react';
import SortOptions from '../components/sort-options/sort-options';
import filterSort from '../functions/filter';
import HeaderScreen from '../components/header/header';
import {getActiveCity, getActiveFilter} from '../store/app-process/selectors';
import {getOffers} from '../store/app-data/selectors';
import {setActiveCity} from '../store/app-process/app-process';

function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity : City = useAppSelector(getActiveCity);
  const activeFilter : string = useAppSelector(getActiveFilter);
  const offers : Offers = useAppSelector(getOffers);
  const offersActiveCity : Offers = offers.filter((offer) => offer.city.name === activeCity.name);
  filterSort(offersActiveCity, activeFilter);
  const [mouseFocusId, setMouseFocusId] = useState(0);
  const setSelectedCityHandler = (city : City) => {dispatch(setActiveCity(city));};
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
        <HeaderScreen/>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <ListCities setSelectedCityHandler={setSelectedCityHandler} activeCity={activeCity}/>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersActiveCity.length} places to stay in {activeCity.name}</b>
                <SortOptions activeFilter={activeFilter}/>
                <div className="cities__places-list places__list tabs__content">
                  <OfferList offers={offersActiveCity} setMouseFocusId={setMouseFocusId}/>
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map city={activeCity} offers={offersActiveCity} selectedCardId={mouseFocusId}></Map>
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
