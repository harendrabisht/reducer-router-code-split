import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import initStore from './store/store';
import Sidebar from './components/Sidebar';
import 'bulma';
import './styles.css';
const store = initStore();

// ./modules/home file exports reducer under "reducer" named export
const Home = lazy(() =>
	import('./modules/Home').then(module => {
		store.injectReducer('home', module.reducer);
		return import('./components/Home');
	})
);

// ./modules/about file exports reducer under "reducer" named export
const About = lazy(() =>
	import('./modules/About').then(module => {
		store.injectReducer('about', module.aboutReducer);
		return import('./components/About');
	})
);

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Router>
					<Suspense fallback={<div>loading</div>}>
						<nav
							className="navbar"
							role="navigation"
							aria-label="main navigation">
							<div className="navbar-brand">
								<Link className="navbar-item" to="/">
									<img
										src="https://bulma.io/images/bulma-logo.png"
										width="112"
										height="28"
									/>
								</Link>
								<div
									id="navbarBasicExample"
									className="navbar-menu">
									<div className="navbar-start">
										<Link to="/" className="navbar-item">
											Home
										</Link>
										<Link
											to="/about"
											className="navbar-item">
											About
										</Link>
									</div>
								</div>
							</div>
						</nav>

						<div className="tile is-ancestor">
							<div className="tile is-8 is-vertical is-parent">
								<div className="tile is-child box">
									<Switch>
										<Route
											exact
											path="/"
											component={Home}
										/>
										<Route
											path="/about"
											component={About}
										/>
									</Switch>
								</div>
							</div>
							<div className="tile is-4 is-parent">
								<div className="tile is-child box"><Sidebar/></div>
							</div>
						</div>
					</Suspense>
				</Router>
			</div>
		</Provider>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
