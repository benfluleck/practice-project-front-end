import React, { Component } from 'react';
import { string, shape, arrayOf } from 'prop-types';

import ShowCard from './ShowCard';

/**
 * @class Search
 *
 * @extends {Component}
 */
export class Search extends Component {
  state = {
    searchTerm: ''
  };

  /**
    * @description- handles change in Input
    *
    * @param {event}
    * @returns {void}
    * @memberOf Search
    */
  handleInputChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  /**
  * @description renders Search
  *
  * @method render
  *
  * @returns {Component} - Search
  *
  * @memberOf Search
  */
  render() {
    return (
      <div className="search">
        <header>
          <h1>s-video</h1>
          <input
            onChange={this.handleInputChange}
            type="text"
            value={this.state.searchTerm}
            placeholder="Search.." />
        </header>
        <div>
          {this.props.shows
            .filter(show => `${show.title} ${show.description}`.toUpperCase()
            .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

let show = shape({
  title: string.isRequired,
  description: string.isRequired,
});

Search.propTypes = {
  shows: arrayOf(show).isRequired,
};

export default Search;
