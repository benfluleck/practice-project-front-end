import React, { Component } from 'react';
import { string, shape, arrayOf } from 'prop-types';

import ShowCard from './ShowCard';
import Header from './Header';

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
        <Header
        showSearch
        searchTerm={this.state.searchTerm}
        handleInputChange={this.handleInputChange} />
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
  title: string,
  description: string,
  string: string,
  year: string,
  imdbID: string,
  trailer: string,
  poster: string,
});

Search.defaultProps = {
  shows: []
};

Search.propTypes = {
  shows: arrayOf(show),
};

export default Search;
