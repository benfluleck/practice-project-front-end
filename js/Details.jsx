import React, { Component } from 'react';
import { string, shape, func } from 'prop-types';
// import axios from 'axios';
import { connect } from 'react-redux';

import Header from './Header';
import Loader from './Loader';
import { getAPIDetails } from './actions/actionCreator';


/**
 * @class Details
 *
 * @extends Component
 */
class Details extends Component {

  /**
   * @description - handles axios requests for data
   *
   * @param {void}
   *
   * @returns {void}
   *
   * @memberOf Details
   */
  componentDidMount() {
    if (!this.props.rating) {
      this.props.getAPIData();
    }
  }


  /**
  * @description renders Details
  *
  * @method render
  *
  * @returns {Component} - Search
  *
  * @memberOf Details
  */
  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    let ratingComponent;
    ratingComponent = this.props.rating ?
      <h3>{this.props.rating}</h3> :
      <Loader />;
    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>{(year)}</h2>
          {ratingComponent}
          <img
            src={`/public/img/posters/${poster}`}
            alt={`Poster for ${title}`} />
          <p>{description}</p>
        </section>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${trailer}
          ?rel=0&amp;controls=0&amp;showinfo=0`}
          frameBorder="0"
          width="1280" height="640"
          title={`Trailer for ${title}`} />
      </div>
    );
  }
}


Details.defaultProps = {
  show: {},
};

Details.propTypes = {
  rating: string.isRequired,
  getAPIData: func.isRequired,
  show: shape({
    title: string,
    description: string,
    string: string,
    year: string,
    imdbID: string,
    trailer: string,
    poster: string,
  }),
};

const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.show.imdbID] ?
    state.apiData[ownProps.show.imdbID] : {};
  return {
    rating: apiData.rating
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAPIData() {
    dispatch(getAPIDetails(ownProps.show.imdbID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
