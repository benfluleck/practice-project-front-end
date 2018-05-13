import React from 'react';
import { string, shape, arrayOf } from 'prop-types';
import { connect } from 'react-redux';

import ShowCard from './ShowCard';
import Header from './Header';

/**
 * @class Search
 *
 * @extends {Component}
 */
const Search = (props) =>
  (<div className="search">
    <Header showSearch />
    <div>
      {props.shows
            .filter(show => `${show.title} ${show.description}`.toUpperCase()
            .indexOf(props.searchTerm.toUpperCase()) >= 0)
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </div>
    );

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm
});

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
  shows: [],
  searchTerm: '',

};

Search.propTypes = {
  shows: arrayOf(show),
  searchTerm: string,
};

export default connect(mapStateToProps)(Search);
