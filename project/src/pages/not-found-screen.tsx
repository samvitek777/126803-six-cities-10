import {Link} from 'react-router-dom';
import HeaderScreen from '../components/header-screen/header-screen';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <HeaderScreen/>
      <div style={{textAlign: 'center'}}>
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </div>
    </>
  );
}
export default NotFoundScreen;
