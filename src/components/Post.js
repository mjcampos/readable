import React, {Component} from 'react';
import {connect} from 'react-redux';
import {importPostDetails, postVote} from '../actions/posts';
import {importComments} from '../actions/comments';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';
import PostDetails from './PostDetail';

var _ = require('lodash');

class Post extends Component {
	componentWillMount() {
		var {post_id} = this.props.match.params;

		this.props.importPostDetails(post_id);
		this.props.importComments(post_id);
	}

	render() {
		var {post, comments} = this.props;
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
							<PostDetails post={post}/>
							<CommentCreate/>
							<CommentList comments={comments}/>
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
		post: state.posts[0],
		comments: state.comments
	};
}

export default connect(mapStateToProps, {importPostDetails, importComments, postVote})(Post);