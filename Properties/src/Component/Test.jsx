import React, { Component } from "react";

export default class Test extends Component {
	render() {
		const { title, content } = this.props;
		return (
			<div>
				{title} - {content}
			</div>
		);
	}
}
