import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, deleteComment} = props
  const {name, comment, id, date, initialClassName, isLiked} = commentDetails
  const postedTime = formatDistanceToNow(date)
  const initial = name ? name[0].toUpperCase() : ''

  const buttonClass = isLiked ? 'active-button' : 'button'

  const image = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLike = () => {
    toggleIsLiked(id)
  }

  const onClickDeleteButton = () => {
    deleteComment(id)
  }

  return (
    <li className="comment-container">
      <div className="name-container">
        <div className={initialClassName}>{initial}</div>
        <p className="name">{name}</p>
        <p className="date">{postedTime} ago</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="buttons-container">
        <div className="like-button-container">
          <img src={image} alt="like" className="image-like" />

          <button className={buttonClass} onClick={onClickLike} type="button">
            Like
          </button>
        </div>
        <button
          className={buttonClass}
          onClick={onClickDeleteButton}
          type="button"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="button"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
