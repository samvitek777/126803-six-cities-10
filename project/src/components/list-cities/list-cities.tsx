import {City} from '../../types/offers';
import {Cities} from '../../const';

type ListCitiesProps = {
  setSelectedCityHandler: (city: City) => void;
  activeCity: City
}

function ListCities ({setSelectedCityHandler, activeCity} : ListCitiesProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Cities.map((city : City) => (
          <li className="locations__item" key={city.name}>
            <a className={`locations__item-link tabs__item ${activeCity.name === city.name && 'tabs__item--active'}`} onClick={() => setSelectedCityHandler(city)}>
              <span>{city.name}</span>
            </a>
          </li>)
        )}
      </ul>
    </section>
  );
}

export default ListCities;
