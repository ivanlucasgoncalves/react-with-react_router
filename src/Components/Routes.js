import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './App.scss'
import Header from './Header/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Topics from './Pages/Topics/Topics'
import ReadMore from './Pages/Topics/ReadMore/ReadMore'

const Routes = () => (
	<Router>
		<div className='App'>
			<Header />
			<Route
				render={({ location }) =>
					console.log(location) || (
						<TransitionGroup component={null}>
							<CSSTransition key={location.key} timeout={450} classNames='fade'>
								<div className='content-page'>
									<Switch location={location}>
										<Route exact path='/' component={Home} />
										<Route path='/about' component={About} />
										<Route exact={true} path='/topics' component={Topics} />
										<Route
											exact={true}
											path={`/topics/:slug`}
											component={ReadMore}
										/>
									</Switch>
								</div>
							</CSSTransition>
						</TransitionGroup>
					)
				}
			/>
		</div>
	</Router>
)

export default Routes
