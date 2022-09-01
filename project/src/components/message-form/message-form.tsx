import {ChangeEvent, FormEvent, useState} from 'react';
import ReviewsList from '../reviews-list/reviews-list';
import {Comments} from '../../types/comment';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchAddCommentAction} from '../../store/api-actions';
import {AuthorizationStatus, Ratings} from '../../const';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getIsCommentLoaded} from '../../store/app-data/selectors';
import RatingStar from '../rating-star/rating-star';

type MessageFormProps = {
  comments: Comments,
  hotelId: number
}

function MessageForm({comments, hotelId} : MessageFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isCommentLoaded = useAppSelector(getIsCommentLoaded);
  const [formData, setFormData] = useState({
    rating: 0,
    review: ''
  });
  const isSubmitDisabled = formData.review.length < 50 || formData.review.length > 300 || Number(formData.rating) === 0;
  const updateState = (evt: ChangeEvent) => {
    const target = evt.target as HTMLInputElement;
    const {name, value} = target;
    setFormData({...formData, [name]: value});
  };
  const submitHandle = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(fetchAddCommentAction({hotelId: hotelId, comment: formData.review, rating: formData.rating}));
    setFormData({
      rating: 0,
      review: ''
    });
  };
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ReviewsList comments={comments}/>
      {authorizationStatus === AuthorizationStatus.Auth &&
        <form className="reviews__form form" action="#" method="post" onSubmit={submitHandle}>
          <label className="reviews__label form__label" htmlFor="review">Your review</label>
          <div className="reviews__rating-form form__rating">
            {
              Ratings.map((rating) => (<RatingStar key={rating.star} rating={rating} ratingStar={formData.rating} updateState={updateState}/>))
            }
          </div>
          <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={updateState} value={formData.review}>
          </textarea>
          <div className="reviews__button-wrapper">
            <p className="reviews__help">
              To submit review please make sure to set <span className="reviews__star">rating</span> and
              describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
            </p>
            <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisabled || isCommentLoaded}>Submit</button>
          </div>
        </form>}
    </section>
  );
}

export default MessageForm;
