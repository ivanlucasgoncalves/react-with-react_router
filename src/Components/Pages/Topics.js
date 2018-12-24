import React from 'react'
import { Link } from 'react-router-dom'

const Topics = () => {
	return (
		<React.Fragment>
			<h1>Topics</h1>
			<hr />
			<h4>React Router</h4>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
			</p>
			<Link to={`/topics/react-router`}>Read more...</Link>
		</React.Fragment>
	)
}

export default Topics
