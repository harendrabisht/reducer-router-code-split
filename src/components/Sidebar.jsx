import React from 'react'
import { connect } from 'react-redux';

const Sidebar = ({ homeCounter, aboutCounter }) => {
	return (
		<nav className="panel">
			<p className="panel-heading">
				Counters
				</p>
			{homeCounter > 0 && (
				<div className="panel-block is-active">
					<span className="panel-icon">
						<i className="fas fa-book" aria-hidden="true"></i>
					</span>
					Home - {homeCounter}
				</div>
			)}

			{aboutCounter > 0 && (
				<div className="panel-block is-active">
					<span className="panel-icon">
						<i className="fas fa-book" aria-hidden="true"></i>
					</span>
					About - {aboutCounter}
				</div>
			)}
		</nav>
	);
}

function mapStateToProps(state) {
	return {
		homeCounter: state.home,
		aboutCounter: state.about,
	};
}

export default connect(mapStateToProps)(Sidebar);
