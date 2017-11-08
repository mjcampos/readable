import {connect} from 'react-redux';
import React, {Component} from 'react';
import PostSummary from './PostSummary';
import '../styles/styles.css';

class Category extends Component {
	convertTimestampToDate(timestamp) {
		var d = new Date(timestamp);

		return d.toDateString();
	}

	render() {
		var {category} = this.props.match.params;

		return (
			<div className="container">
				<h2 className="text-center">Category: {category}</h2>

				<ul className="text-center">
					{this.props.posts.map(post => (
						<PostSummary key={post.id} post={post}/>
					))}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state, myProps) {
	var {category} = myProps.match.params;

	return {
		posts: state.posts.filter(post => post.category === category)
	};
}

export default connect(mapStateToProps, null)(Category);