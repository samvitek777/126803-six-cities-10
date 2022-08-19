import {getActiveFilter} from '../../store/action';
import {useAppDispatch} from '../../hooks';

function SortOptions() : JSX.Element {
  const dispatch = useAppDispatch();
  const setSelectedFilterPopular = () => {dispatch(getActiveFilter('Popular'));};
  const setSelectedFilterPriceLowToHigh = () => {dispatch(getActiveFilter('PriceLowToHigh'));};
  const setSelectedFilterPriceHighToLow = () => {dispatch(getActiveFilter('PriceHighToLow'));};
  const setSelectedFilterTopRatedFirst = () => {dispatch(getActiveFilter('TopRatedFirst'));};
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
      Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use href="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        <li className="places__option places__option--active" tabIndex={0} onClick={setSelectedFilterPopular}>Popular</li>
        <li className="places__option" tabIndex={0} onClick={setSelectedFilterPriceLowToHigh}>Price: low to high</li>
        <li className="places__option" tabIndex={0} onClick={setSelectedFilterPriceHighToLow}>Price: high to low</li>
        <li className="places__option" tabIndex={0} onClick={setSelectedFilterTopRatedFirst}>Top rated first</li>
      </ul>
    </form>
  );
}

export default SortOptions;
