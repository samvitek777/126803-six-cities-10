import MainScreen from '../../pages/main';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../../pages/login";
import Favorites from "../../pages/favorites";
import Property from "../../pages/property";
import {AppRoute, AuthorizationStatus} from "../../const";
import PrivateRoute from "../private-route/private-route";
import NotFoundScreen from "../../pages/not-found-screen";

type AppProps = {
  placesCount: number;
}

function App({placesCount}: AppProps): JSX.Element {
  return <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<MainScreen placesCount={placesCount}/>}
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
          </PrivateRoute>}
      />
      <Route
        path={AppRoute.Room}
        element={<Property/>}
      />
      <Route
        path="*"
        element={<NotFoundScreen/>}
      />
    </Routes>
  </BrowserRouter>
}

export default App;
