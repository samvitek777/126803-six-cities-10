import ReviewsItem from '../reviews-item/reviews-item';
import {Comments} from '../../types/comment';

type ReviewsListProps = {
  comments: Comments;
}

function ReviewsList({comments} : ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {comments.map((comment, idx) => <ReviewsItem comment={comment} key={comment.id}/>)}
    </ul>
  );
}

export default ReviewsList;
