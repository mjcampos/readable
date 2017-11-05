import React, {Component} from 'react';
import {connect} from 'react-redux';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';
import PostDetails from './PostDetail';

var _ = require('lodash');

class Post extends Component {
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

function mapStateToProps(state, myProps) {
	var {post_id} = myProps.match.params;

	return {
		post: state.posts.filter(post => post.id === post_id)[0]
	};
}

export default connect(mapStateToProps, null)(Post);