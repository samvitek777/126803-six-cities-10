import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {City} from '../../types/offers';

export const getActiveCity = (state: State): City => state[NameSpace.App].activeCity;
export const getActiveFilter = (state: State): string => state[NameSpace.App].activeFilter;
