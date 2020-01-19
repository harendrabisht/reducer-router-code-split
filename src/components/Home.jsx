import React from "react";
import { connect } from "react-redux";

const Home = props => {
  const { dispatch } = props;
  return (
    <section>
      <h1 className="title">Home Page</h1>
      <div className="buttons">
        <button className="button" onClick={() => dispatch({ type: 'HOME_INCREMENT' })}>
          INCREMENT
          </button>
        <button className="button" onClick={() => dispatch({ type: 'HOME_DECREMENT' })}>
          DECREMENT
          </button>
      </div>
    </section>
  );
};

const mapStateToProps = function (state) {
  return {
    home: state.home
  };
};


export default connect(
  mapStateToProps,
)(Home);
