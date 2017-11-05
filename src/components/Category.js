import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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

				<ul>
					{this.props.posts.map(post => (
						<li key={post.id} className="text-center">
							<Link to={`/category/${category}/${post.id}`}><h3>{post.title}</h3></Link>
							<p><b>Author</b>: {post.author}</p>
							<p><b>Date:</b> {this.convertTimestampToDate(post.timestamp)}</p>
						</li>
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