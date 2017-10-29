import React, {Component} from 'react';
import {connect} from 'react-redux';
import {importPostDetails, postVote} from '../actions/posts';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';
import PostDetails from './PostDetail';

var _ = require('lodash');

class Post extends Component {
	componentWillMount() {
		var {post_id} = this.props.match.params;

		this.props.importPostDetails(post_id);
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
							<PostDetails post={post}/>
							<CommentCreate parentId={post.id}/>
							<CommentList parentId={post.id}/>
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

export default connect(mapStateToProps, {importPostDetails, postVote})(Post);