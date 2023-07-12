import './index.css'
import {Component} from 'react'
import ReviewItem from '../ReviewItem'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onLeftClickArrow = () => {
    const {index} = this.state
    if (index === 0) {
      return this.setState({index: 0})
    }
    return this.setState(prevState => ({
      index: prevState.index - 1,
    }))
  }

  onRightClickArrow = lastIndex => {
    const {index} = this.state
    if (index === lastIndex - 1) {
      return this.setState({index: lastIndex - 1})
    }
    return this.setState(prevState => ({
      index: prevState.index + 1,
    }))
  }

  render() {
    const {index} = this.state
    //  console.log(index)
    const {reviewsList} = this.props
    const lastIndex = reviewsList.length
    // sending this lastIndex as prop for the function in reviewItem component..
    const reviewItem = reviewsList[index]
    return (
      <div className="main-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-container">
          <ReviewItem
            lastIndex={lastIndex}
            onClickRightArrow={this.onRightClickArrow}
            onClickLeftArrow={this.onLeftClickArrow}
            reviewItem={reviewItem}
          />
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
