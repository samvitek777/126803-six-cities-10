import {ChangeEvent, FormEvent, useState} from 'react';
import ReviewsList from '../reviews-list/reviews-list';
import {Comments} from '../../types/comment';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchAddCommentAction} from '../../store/api-actions';
import {AuthorizationStatus} from '../../const';

type MessageFormProps = {
  comments: Comments,
  hotelId: number
}

function MessageForm({comments, hotelId} : MessageFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const [formData, setFormData] = useState({
    rating: 0,
    review: ''
  });
  const updateStateHandle = (evt: ChangeEvent) => {
    const target = evt.target as HTMLInputElement;
    const {name, value} = target;
    setFormData({...formData, [name]: value});
  };
  const submitHandle = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(fetchAddCommentAction({hotelId: hotelId, comment: formData.review, rating: formData.rating}));
  };
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ReviewsList comments={comments}/>
      {authorizationStatus === AuthorizationStatus.Auth &&
        <form className="reviews__form form" action="#" method="post" onSubmit={submitHandle}>
          <label className="reviews__label form__label" htmlFor="review">Your review</label>
          <div className="reviews__rating-form form__rating">
            <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange={updateStateHandle}/>
            <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use href="#icon-star"></use>
              </svg>
            </label>

            <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={updateStateHandle}/>
            <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
              <svg className="form__star-image" width="37" height="33">
                <use href="#icon-star"></use>
              </svg>
            </label>

            <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={updateStateHandle}/>
            <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
              <svg className="form__star-image" width="37" height="33">
                <use href="#icon-star"></use>
              </svg>
            </label>

            <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={updateStateHandle}/>
            <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
              <svg className="form__star-image" width="37" height="33">
                <use href="#icon-star"></use>
              </svg>
            </label>

            <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={updateStateHandle}/>
            <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
              <svg className="form__star-image" width="37" height="33">
                <use href="#icon-star"></use>
              </svg>
            </label>
          </div>
          <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={updateStateHandle}>
          </textarea>
          <div className="reviews__button-wrapper">
            <p className="reviews__help">
              To submit review please make sure to set <span className="reviews__star">rating</span> and
              describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
            </p>
            <button className="reviews__submit form__submit button" type="submit">Submit</button>
          </div>
        </form>}
    </section>
  );
}

export default MessageForm;
