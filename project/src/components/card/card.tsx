import {Offer} from '../../types/offers';
import {Link, useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchAddFavoritesAction, fetchDeleteFavoritesAction} from '../../store/api-actions';
import {useEffect, useState} from 'react';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {AppRoute, AuthorizationStatus, ratingNum} from '../../const';

type CardProps = {
  offer: Offer;
  setMouseFocusId: (state: number) => void;
}


function Card({offer, setMouseFocusId} : CardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(offer.isFavorite);
  }, []);
  const setStatusFavorites = () => {
    if(authorizationStatus !== AuthorizationStatus.Auth){
      navigate(AppRoute.Login);
    }
    if(active){
      dispatch(fetchDeleteFavoritesAction(offer.id));
    } else {
      dispatch(fetchAddFavoritesAction(offer.id));
    }
    setActive(!active);
  };
  return (
    <article className="cities__card place-card" onMouseOver={() => {setMouseFocusId(offer.id);}}>
      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button${active && '--active'} button`} type="button" onClick={() => setStatusFavorites()}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offer.rating * ratingNum}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default Card;
