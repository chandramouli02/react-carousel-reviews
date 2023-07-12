import {Component} from 'react'
import './index.css'

class ReviewItem extends Component {
  render() {
    const {
      reviewItem,
      lastIndex,
      onClickRightArrow,
      onClickLeftArrow,
    } = this.props
    const {imgUrl, username, companyName, description} = reviewItem
    const onRightClickArrowWithLength = () => {
      onClickRightArrow(lastIndex)
    }

    return (
      <div className="review-item-container">
        <button
          className="left-arrow-btn"
          onClick={onClickLeftArrow}
          type="button"
        >
          <img
            className="left-arrow"
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>
        <div className="review-item">
          <img className="person-img" src={imgUrl} alt={username} />
          <p className="person-name">{username}</p>
          <p className="company-name">{companyName}</p>
          <p className="description">{description}</p>
        </div>
        <button
          className="right-arrow-btn"
          onClick={onRightClickArrowWithLength}
          type="button"
        >
          <img
            className="right-arrow"
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
    )
  }
}

export default ReviewItem
