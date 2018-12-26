import React from 'react'
import { Helmet } from 'react-helmet'
import logo from './logo.svg'

const Home = () => (
	<React.Fragment>
		<Helmet>
			<title>Home</title>
		</Helmet>
		<h1>Home</h1>
		<hr />
		<img src={logo} className='App-logo' alt='logo' />
		<p>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry.
			Lorem Ipsum has been the industry's standard dummy text ever since the
			1500s, when an unknown printer took a galley of type and scrambled it to
			make a type specimen book. It has survived not only five centuries, but
			also the leap into electronic typesetting, remaining essentially
			unchanged.
		</p>
	</React.Fragment>
)

export default Home
