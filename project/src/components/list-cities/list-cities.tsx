import {City} from '../../types/offers';
import {Cities} from '../../const';

type ListCitiesProps = {
  setSelectedCity: (city: City) => void;
  activeCity: City
}

function ListCities ({setSelectedCity, activeCity} : ListCitiesProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Cities.map((city : City) => (
          <li className="locations__item" key={city.name}>
            <a className={`locations__item-link tabs__item ${activeCity.name === city.name && 'tabs__item--active'}`} onClick={() => setSelectedCity(city)}>
              <span>{city.name}</span>
            </a>
          </li>)
        )}
      </ul>
    </section>
  );
}

export default ListCities;
