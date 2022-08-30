import {Offers, Offer, City} from '../types/offers';
import {useParams} from 'react-router-dom';
import MessageForm from '../components/message-form/message-form';
import OfferList from '../components/offer-list/offer-list';
import Map from '../components/map/map';
import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks';
import {fetchCommentsByIdAction, fetchHotelByIdAction, fetchHotelByIdNearbyAction} from '../store/api-actions';
import {Comments} from '../types/comment';
import HeaderScreen from '../components/header/header';
import {getComments, getNearby, getOffer} from '../store/app-data/selectors';
import {getActiveCity} from '../store/app-process/selectors';

function Room(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchHotelByIdAction(Number(id)));
    dispatch(fetchHotelByIdNearbyAction(Number(id)));
    dispatch(fetchCommentsByIdAction(Number(id)));
  }, []);
  const offer : Offer | undefined = useAppSelector(getOffer);
  const nearby : Offers = useAppSelector(getNearby);
  const comments : Comments = useAppSelector(getComments);
  const city : City = useAppSelector(getActiveCity);
  const [mouseFocusId, setMouseFocusId] = useState(0);
  let nearbyMap = nearby;
  if(offer !== undefined){
    nearbyMap = [...nearby, offer];
  }
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

      <div className="page">
        <HeaderScreen/>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer?.images.map((image : string) => (
                  <div className="property__image-wrapper" key={id}>
                    <img className="property__image" src={image} alt="Photo studio"/>
                  </div>
                )
                )}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {offer?.isPremium &&
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer?.title}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use href="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${(offer?.rating === undefined ? 0 : offer.rating) * 20}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer?.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer?.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer?.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {offer?.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{offer?.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {offer?.goods.map((good : string) => (
                      <li className="property__inside-item" key={good}>{good}</li>
                    )
                    )}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper ${offer?.host.isPro && 'property__avatar-wrapper--pro'} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={offer?.host.avatarUrl} width="74"
                        height="74" alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">
                      {offer?.host.name}
                    </span>
                    {offer?.host.isPro &&
                      <span className="property__user-status">
                        Pro
                      </span>}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {offer?.description}
                    </p>
                  </div>
                </div>
                <MessageForm comments={comments} hotelId={Number(id)}/>
              </div>
            </div>
            <section className="property__map map">
              <Map city={city} offers={nearbyMap} selectedCardId={offer === undefined ? mouseFocusId : offer.id}></Map>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <OfferList offers={nearby} setMouseFocusId={setMouseFocusId}/>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default Room;
