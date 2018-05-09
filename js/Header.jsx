import React from 'react';
import { Link } from 'react-router-dom';
import { string, bool, func } from 'prop-types';

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
  handleInputChange: function noop() {},
  searchTerm: '',
};

Header.propTypes = {
  showSearch: bool,
  handleInputChange: func,
  searchTerm: string,
};

export default Header;
