import {FormEvent, useEffect, useRef} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks';
import {useNavigate} from 'react-router-dom';
import {AuthData} from '../types/auth-data';
import {loginAction} from '../store/api-actions';
import {AppRoute, AuthorizationStatus} from '../const';
import {toast} from 'react-toastify';
import {getAuthorizationStatus} from '../store/user-process/selectors';
import Logo from '../components/logo-screen/logo-screen';

function Login(): JSX.Element {
  const navigate = useNavigate();
  const authorizationStatus = (useAppSelector(getAuthorizationStatus));
  useEffect(() => {
    if(authorizationStatus === AuthorizationStatus.Auth){
      navigate(AppRoute.Main);
    }
  }, []);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const PASSWORD_REGEXP = /^[^ ]*$/iu;

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const submitLogin = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null &&
      EMAIL_REGEXP.test(loginRef.current.value) && PASSWORD_REGEXP.test(passwordRef.current.value)) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
      navigate(AppRoute.Main);
    } else {
      if(loginRef.current === null || !EMAIL_REGEXP.test(loginRef.current.value)){
        toast.error('Ошибка логина');
      } else if(passwordRef.current === null || !PASSWORD_REGEXP.test(passwordRef.current.value)){
        toast.error('Ошибка пароля');
      }
    }
  };
  return (
    <>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path>
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path
              d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"
            >
            </path>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
            >
            </path>
          </symbol>
        </svg>
      </div>

      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <Logo/>
            </div>
          </div>
        </header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post" onSubmit={submitLogin}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" type="email" name="email" placeholder="Email" ref={loginRef} required />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password" name="password" placeholder="Password" ref={passwordRef}
                    required
                  />
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default Login;
