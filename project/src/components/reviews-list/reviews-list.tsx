import ReviewsItem from '../reviews-item/reviews-item';
import {Comments} from '../../types/comment';

type ReviewsListProps = {
  comments: Comments;
}

function ReviewsList({comments} : ReviewsListProps): JSX.Element {
  const items = [...comments];
  items.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
  if(items.length > 10){
    items.length = 10;
  }
  return (
    <ul className="reviews__list">
      {items.map((comment, idx) => <ReviewsItem comment={comment} key={comment.id}/>)}
    </ul>
  );
}

export default ReviewsList;
