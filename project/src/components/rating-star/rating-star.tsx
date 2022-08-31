import {Rating} from '../../types/comment';
import {ChangeEvent} from 'react';

type RatingStarProps = {
  rating: Rating;
  ratingStar: number;
  updateStateHandle: (evt: ChangeEvent) => void;
}

function RatingStar({rating, ratingStar, updateStateHandle} : RatingStarProps): JSX.Element {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={rating.star} id={`${rating.star}-stars`} type="radio" onChange={updateStateHandle} checked={Number(ratingStar) === rating.star}/>
      <label htmlFor={`${rating.star}-stars`} className="reviews__rating-label form__rating-label" title={rating.title}>
        <svg className="form__star-image" width="37" height="33">
          <use href="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default RatingStar;
