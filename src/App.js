import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { connect, useDispatch } from "react-redux"

import { AdminTools, LoginForm, RegisterForm } from "./container"
import { Ymaps as Maps } from "./component"
import { coupActions, oporaActions } from "./redux/actions"

const App = (props) => {
	const { isAuth, access } = props
	const { fetchCoup } = coupActions
	const { fetchOpora } = oporaActions
	const dispatch = useDispatch()

	React.useEffect(() => {
		dispatch(fetchCoup())
		dispatch(fetchOpora())
	})
	return (
		<div className='App'>
			<Switch>
				<Route
					exact
					path='/'
					render={() => (isAuth === true ? <Maps /> : <Redirect to='/login' />)}
				/>
				<Route exact path='/login' component={LoginForm} />
				<Route exact path='/register' component={RegisterForm} />
				<Route
					exact
					path='/admin'
					render={() => (access >= 5 ? <AdminTools /> : <Redirect to='/' />)}
				/>
			</Switch>
		</div>
	)
}

export default connect(({ auth }) => ({
	isAuth: auth.auth,
	access: auth.items.access,
}))(App)
