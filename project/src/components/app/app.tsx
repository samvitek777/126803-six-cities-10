import MainScreen from '../../pages/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import Property from '../../pages/property';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import NotFoundScreen from '../../pages/not-found-screen';
import {CityPoint, Offers, Points} from '../../types/offers';

type AppProps = {
  placesCount: number;
  offers: Offers;
  points: Points;
  cityPoint: CityPoint;
}

function App({placesCount, offers, points, cityPoint}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen placesCount={placesCount} offers={offers} points={points} cityPoint={cityPoint}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<Property offers={offers}/>}
        />
        <Route
          path="*"
          element={<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
