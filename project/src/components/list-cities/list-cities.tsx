import {getHotelsByName} from '../../store/action';
import {AppDispatch} from '../../types/state';
import {City} from '../../types/offers';
import {Cities} from '../../const';

type ListCitiesProps = {
  dispatch: AppDispatch
  activeCity: City
}

function ListCities ({dispatch, activeCity} : ListCitiesProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Cities.map((city : string) => (
          <li className="locations__item" key={city}>
            <a className={`locations__item-link tabs__item ${activeCity.name === city && 'tabs__item--active'}`} onClick={() => dispatch(getHotelsByName({cityName : city}))}>
              <span>{city}</span>
            </a>
          </li>)
        )}
      </ul>
    </section>
  );
  /*return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        <li className="locations__item">
          <a className="locations__item-link tabs__item" onClick={() => dispatch(getHotelsByName({cityName : 'Paris'}))}>
            <span>Paris</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item" onClick={() => dispatch(getHotelsByName({cityName : 'Cologne'}))}>
            <span>Cologne</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item" onClick={() => dispatch(getHotelsByName({cityName : 'Brussels'}))}>
            <span>Brussels</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item tabs__item--active" onClick={() => dispatch(getHotelsByName({cityName : 'Amsterdam'}))}>
            <span>Amsterdam</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item" onClick={() => dispatch(getHotelsByName({cityName : 'Hamburg'}))}>
            <span>Hamburg</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item" onClick={() => dispatch(getHotelsByName({cityName : 'Dusseldorf'}))}>
            <span>Dusseldorf</span>
          </a>
        </li>
      </ul>
    </section>
  );*/
}

export default ListCities;
