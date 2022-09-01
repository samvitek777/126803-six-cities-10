import {Rating} from '../../types/comment';
import {ChangeEvent} from 'react';

type RatingStarProps = {
  rating: Rating;
  ratingStar: number;
  updateState: (evt: ChangeEvent) => void;
}

function RatingStar({rating, ratingStar, updateState} : RatingStarProps): JSX.Element {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={rating.star} id={`${rating.star}-stars`} type="radio" onChange={updateState} checked={Number(ratingStar) === rating.star}/>
      <label htmlFor={`${rating.star}-stars`} className="reviews__rating-label form__rating-label" title={rating.title}>
        <svg className="form__star-image" width="37" height="33">
          <use href="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default RatingStar;
