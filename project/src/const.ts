
export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Main = '/',
  Room = '/offer/:id',
  NotFount = '/404_not_fount',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const Cities = [
  {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  },
  {
    'name': 'Cologne',
    'location': {
      'latitude': 50.938361,
      'longitude': 6.959974,
      'zoom': 13
    }
  },
  {
    'name': 'Brussels',
    'location': {
      'latitude': 50.846557,
      'longitude': 4.351697,
      'zoom': 13
    }
  },
  {
    'name': 'Amsterdam',
    'location': {
      'latitude': 52.37454,
      'longitude': 4.897976,
      'zoom': 13
    }
  },
  {
    'name': 'Hamburg',
    'location': {
      'latitude': 53.550341,
      'longitude': 10.000654,
      'zoom': 13
    }
  },
  {
    'name': 'Dusseldorf',
    'location': {
      'latitude': 51.225402,
      'longitude': 6.776314,
      'zoom': 13
    }
  }
];

export const Filters = [{type: 'Popular', title: 'Popular'}, {type: 'PriceLowToHigh', title: 'Price: low to high'}, {type: 'PriceHighToLow', title: 'Price: high to low'}, {type: 'TopRatedFirst', title: 'Top rated first'}];

export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
  HotelById = '/hotels',
  Nearby = '/nearby',
  Comments = '/comments',
  Favorites = '/favorite',
  StatusFavorites = '/favorite',
}

export enum NameSpace {
  Data = 'DATA',
  App = 'APP',
  User = 'USER',
}

export const MonthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const Rating = [
  {
    star: 5,
    title: 'perfect'
  },
  {
    star: 4,
    title: 'good'
  },
  {
    star: 3,
    title: 'not bad'
  },
  {
    star: 2,
    title: 'badly'
  },
  {
    star: 1,
    title: 'terribly'
  }
];


