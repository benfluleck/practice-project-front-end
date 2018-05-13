import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { string, func, object } from 'prop-types';
import { connect } from 'react-redux';
import { setSearchTermAction } from './actions/actionCreator';

/**
 * @class Landing
 *
 * @extends Component
 */
class Landing extends Component {

  gotoSearch = (event) => {
    event.preventDefault();
    this.props.history.push('/search');
  }
  /**
  * @description renders Landing
  *
  * @method render
  *
  * @returns {Component} - Landin
  *
  * @memberOf Search
  */
  render() {
    return (<div className="landing">
      <h1>s-video</h1>
      <form onSubmit={this.gotoSearch}>
        <input
          type="text"
          onChange={this.props.handleInputChange}
          value={this.props.searchTerm}
          placeholder="Search"
        />
      </form>
      <Link to="/search">or Browse All</Link>
    </div>);
  }
}

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = (dispatch) => ({
  handleInputChange(event) {
    dispatch(setSearchTermAction(event.target.value));
  }
});

Landing.defaultProps = {
  handleInputChange: function noop() { },
  searchTerm: '',
};

Landing.propTypes = {
  handleInputChange: func,
  searchTerm: string,
  history: object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
