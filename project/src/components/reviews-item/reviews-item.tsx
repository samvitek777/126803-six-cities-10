import {Comment} from '../../types/comment';
import {MonthNames, ratingNum} from '../../const';

type ReviewsItemProps = {
  comment: Comment;
}

function ReviewsItem({comment} : ReviewsItemProps): JSX.Element{
  const date = new Date(comment.date);
  return (
    <li className="reviews__item" key={comment.id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user?.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {comment.user?.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${(comment?.rating) * ratingNum}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime={date.toISOString().slice(0, 10)}>{MonthNames.at(date.getMonth())} {date.getFullYear()}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
