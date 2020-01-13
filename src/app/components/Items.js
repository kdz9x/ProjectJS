import React, { Component } from 'react';
// import pic1 from '../../images/pic-1.png';
import addtocart from '../../images/addtocart.svg';
import StarRating from '../../../node_modules/react-star-ratings';
class Items extends Component {
    render() {
        return (
                <div className="col-sm-3">
					<div className="thumbnail">
					<img alt={this.props.index} src={this.props.image} className="items" />
					<div className="caption">
							<h3>
								{this.props.name}
							</h3>
							<p>
								{this.props.category}
							</p>
							<StarRating
							rating={this.props.rating}
							starRatedColor="black"
							changeRating={this.changeRating}
							numberOfStars={5}
							name='rating'
							starDimetion='11px'
							/>
					</div>
					<div className="buy">
							<p>
								${this.props.price}
							</p>
							<p>
								<img src={addtocart} alt="addtocart" />
							</p>
					</div>
					</div>
					</div>
        );
    }
}

export default Items;