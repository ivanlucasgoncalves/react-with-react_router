import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
	<div className='nav-menu'>
		<ul>
			<li>
				<NavLink exact to='/'>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink to='/about'>About</NavLink>
			</li>
			<li>
				<NavLink to='/topics'>Topics</NavLink>
			</li>
		</ul>
	</div>
)

export default Header
