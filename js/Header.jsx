import React from 'react';
import { Link } from 'react-router-dom';
import { string, bool, func } from 'prop-types';
import { connect } from "react-redux";

import { setSearchTermAction } from "./actions/actionCreator";

const Header = (props) => {
  let utilSpace = props.showSearch ?
    (<input
      onChange={props.handleInputChange}
      type="text"
      value={props.searchTerm}
      placeholder="Search.." />) :
    <h2><Link to="/search">Back</Link></h2>;
  return (
    <header>
      <h1>
        <Link to="/">
          s-video
        </Link>
      </h1>
      { utilSpace }
    </header>
  );
};

Header.defaultProps = {
  showSearch: false,
  searchTerm: '',
  handleInputChange: () => {},
};

Header.propTypes = {
  showSearch: bool,
  searchTerm: string,
  handleInputChange: func,
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = dispatch => ({
  handleInputChange(event) {
    dispatch(setSearchTermAction(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
