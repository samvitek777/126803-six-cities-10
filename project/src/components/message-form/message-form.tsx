import {ChangeEvent, FormEvent, useState} from 'react';
import ReviewsList from '../reviews-list/reviews-list';
import {User} from '../../types/comment';
import {comments} from '../../mocks/comments';

function MessageForm(): JSX.Element {
  const user : User = {
    'id': 18,
    'isPro': true,
    'name': 'Sophie',
    'avatarUrl': 'https://10.react.pages.academy/static/avatar/9.jpg'
  };
  const [formData, setFormData] = useState({
    rating: 0,
    review: ''
  });
  const [messages, setMessages] = useState(comments);
  const updateStateHandle = (evt: ChangeEvent) => {
    const target = evt.target as HTMLInputElement;
    const {name, value} = target;
    setFormData({...formData, [name]: value});
  };
  const submitHandle = (evt: FormEvent) => {
    evt.preventDefault();
    setMessages([...messages, {id: 1, user: user, rating: formData.rating, comment: formData.review, date: '2022-05-25T12:25:36.939Z'}]);
  };
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{messages.length}</span></h2>
      <ReviewsList comments={messages}/>
      <form className="reviews__form form" action="#" method="post" onSubmit={submitHandle}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars"
            type="radio" onChange={updateStateHandle}
          />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use href="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars"
            type="radio" onChange={updateStateHandle}
          />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use href="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars"
            type="radio" onChange={updateStateHandle}
          />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label"
            title="not bad"
          >
            <svg className="form__star-image" width="37" height="33">
              <use href="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars"
            type="radio" onChange={updateStateHandle}
          />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label"
            title="badly"
          >
            <svg className="form__star-image" width="37" height="33">
              <use href="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star"
            type="radio" onChange={updateStateHandle}
          />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label"
            title="terribly"
          >
            <svg className="form__star-image" width="37" height="33">
              <use href="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review"
          placeholder="Tell how was your stay, what you like and what can be improved" onChange={updateStateHandle}
        >
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and
            describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default MessageForm;
