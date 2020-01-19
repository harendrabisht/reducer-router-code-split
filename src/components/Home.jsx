import React from "react";
import { connect } from "react-redux";
import { incrementHome, decrementHome } from "./../modules/Actions";

const Home = props => {
  return (
    <section>
      <div className="container">
        <h1 className="title">This is home page</h1>
        <div className="tag">{props.home}</div>
        <div className="buttons">
          <button className="button" onClick={props.increment}>
            +
          </button>
          <button className="button" onClick={props.decrement}>
            -
          </button>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = function(state) {
  return {
    home: state.home
  };
};

const mapDispatchToProps = {
  increment: incrementHome,
  decrement: decrementHome
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
