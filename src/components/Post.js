import React, {Component} from 'react';
import {connect} from 'react-redux';
import {importPostDetails} from '../actions/posts';

var _ = require('lodash');

class Post extends Component {
	componentWillMount() {
		var {post_id} = this.props.match.params;

		this.props.importPostDetails(post_id);
	}

	convertTimestampToDate(timestamp) {
		var d = new Date(timestamp);

		return d.toDateString();
	}

	render() {
		var {post} = this.props;
		var noPostFound = () => {
			return (
				<div>
					<h4 className="text-center">No Post Found</h4>
				</div>
			);
		}

		return (
			<div className="container">
				{!_.isEmpty(post) ?
						<div>
							<h4 className="text-center">{post.title}</h4>
							<p><b>Date:</b> {this.convertTimestampToDate(post.timestamp)}</p>
							<p>{post.body}</p>
							<p><b>Vote Score:</b> {post.voteScore}</p>
						</div>
					:
						noPostFound()
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		post: state.posts[0]
	};
}

export default connect(mapStateToProps, {importPostDetails})(Post);