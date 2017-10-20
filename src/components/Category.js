import React, {Component} from 'react';

class Category extends Component {
	render() {
		var {path} = this.props.match.params;

		return (
			<div>
				<h2 className="text-center">{path}</h2>
			</div>
		);
	}
}

export default Category;