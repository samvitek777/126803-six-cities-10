import {useAppDispatch} from '../../hooks';
import {Filters} from '../../const';
import {Filter} from '../../types/filter';
import {setActiveFilter} from '../../store/app-process/app-process';
import {useState} from 'react';

type SortOptionsProps = {
  activeFilter: string;
}

function SortOptions({activeFilter} : SortOptionsProps) : JSX.Element {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(false);
  const setSelectedFilter = (filterType: string) => {dispatch(setActiveFilter(filterType));};
  return (
    <form className="places__sorting">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setVisible(true)}>
        {activeFilter}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use href="#icon-arrow-select"></use>
        </svg>
      </span>
      {
        visible &&
        <ul className="places__options places__options--custom places__options--opened">
          {Filters.map((filter: Filter) => (
            <li key={filter.type} className={`places__option ${filter.type === activeFilter && 'places__option--active'}`} tabIndex={0} onClick={() => {setSelectedFilter(filter.type);setVisible(false);}}>{filter.title}</li>)
          )}
        </ul>
      }
    </form>
  );
}

export default SortOptions;
