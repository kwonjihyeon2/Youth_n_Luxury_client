import ReviewUI from './Review.presenter'

export default function Review(props) {
  return <ReviewUI isReviewIWrite={props.pageNum === 4} />
}
