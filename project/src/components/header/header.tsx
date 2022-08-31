import {AppRoute, AuthorizationStatus} from '../../const';
import {logoutAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useNavigate} from 'react-router-dom';
import {User} from '../../types/comment';
import {getAuthorizationStatus, getCurrentUser} from '../../store/user-process/selectors';
import {getCountFavorites} from '../../store/app-data/selectors';
import LogoScreen from '../logo/logo';

function HeaderScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus : AuthorizationStatus = useAppSelector(getAuthorizationStatus);
  const countFavorites : number = useAppSelector(getCountFavorites);
  const currentUser : User | undefined = useAppSelector(getCurrentUser);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <LogoScreen/>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {authorizationStatus === AuthorizationStatus.Auth &&
                  <a className="header__nav-link header__nav-link--profile" onClick={() => navigate(AppRoute.Favorites)}>
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
                    <span className="header__user-name user__name">{currentUser?.email}</span>
                    <span className="header__favorite-count">{countFavorites}</span>
                  </a>}
              </li>
              <li className="header__nav-item">
                {authorizationStatus === AuthorizationStatus.Auth &&
                  <a className="header__nav-link" onClick={() => dispatch(logoutAction())}>
                    <span className="header__signout">Log Out</span>
                  </a>}
                {authorizationStatus === AuthorizationStatus.NoAuth &&
                  <a className="header__nav-link" onClick={() => navigate(AppRoute.Login)}>
                    <span className="header__signout">Sign in</span>
                  </a>}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default HeaderScreen;
