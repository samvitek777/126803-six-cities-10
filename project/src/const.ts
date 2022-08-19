
export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Root = '/',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH'
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const Cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const Filters = [{type: 'Popular', title: 'Popular'}, {type: 'PriceLowToHigh', title: 'Price: low to high'}, {type: 'PriceHighToLow', title: 'Price: high to low'}, {type: 'TopRatedFirst', title: 'Top rated first'}];
