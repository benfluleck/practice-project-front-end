import React, { Component } from 'react';
import { string, shape } from 'prop-types';
import axios from 'axios';

import Header from './Header';
import Loader from './Loader';

/**
 * @class Details
 *
 * @extends Component
 */
class Details extends Component {

  /**
   * @description - handles axios requests for data
   *
   * @param {}
   *
   * @returns {void}
   *
   * @memberOf Details
   */
  componentDidMount() {
    axios.get(`http://localhost:3000/${this.props.show.imdbID}`)
      .then(({ data: { rating } }) => {
        this.setState({ apiData: { rating } });
      });
  }

  state = {
    apiData: { rating: '' }
  };

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
    ratingComponent = this.state.apiData.rating ?
      <h3>{this.state.apiData.rating}</h3> :
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
          src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
          frameBorder="0"
          width="1280" height="640"
          title={`Trailer for ${title}`} />
      </div>
    );
  }
}


Details.defaultProps = {
  show: {}
};

Details.propTypes = {
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

export default Details;
