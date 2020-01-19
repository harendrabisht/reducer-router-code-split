import React from "react";
import { connect } from 'react-redux';
const About = props => {
  const { dispatch } = props;
  return (
    <section>
      <div className="container">
        <h1 className="title">About Page</h1>
        <div className="buttons">
          <button className="button is-success" onClick={() => dispatch({type: 'INCREMENT'})} >INCREMENT</button>
          <button className="button is-danger" onClick={() => dispatch({type: 'DECREMENT'})}>DECREMENT</button>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = function (state) {
  return {
    home: state.about
  };
};

export default connect(
  mapStateToProps,
)(About);
