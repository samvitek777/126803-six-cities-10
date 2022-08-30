import {AppRoute, AuthorizationStatus} from '../../const';
import {logoutAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useNavigate} from 'react-router-dom';
import {User} from '../../types/comment';
import {getAuthorizationStatus, getCurrentUser} from '../../store/user-process/selectors';

function HeaderScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus : AuthorizationStatus = useAppSelector(getAuthorizationStatus);
  const currentUser : User | undefined = useAppSelector(getCurrentUser);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {authorizationStatus === AuthorizationStatus.Auth &&
                  <a className="header__nav-link header__nav-link--profile" onClick={() => navigate(AppRoute.Favorites)}>
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
                    <span className="header__user-name user__name">{currentUser?.name}</span>
                    <span className="header__favorite-count">3</span>
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
