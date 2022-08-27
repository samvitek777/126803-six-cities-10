import MainScreen from '../../pages/main';
import {Route, Routes} from 'react-router-dom';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import Room from '../../pages/room';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route/private-route';
import NotFoundScreen from '../../pages/not-found-screen';
import {useAppSelector} from '../../hooks';
import LoadingSpinner from '../loading-screen/spinner';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import {getLoadedDataStatus} from '../../store/app-data/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

function App(): JSX.Element {
  const isDataLoaded = useAppSelector(getLoadedDataStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  if (isDataLoaded) {
    return (
      <LoadingSpinner />
    );
  }
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<Room/>}
        />
        <Route
          path="*"
          element={<NotFoundScreen/>}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
