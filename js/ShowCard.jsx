import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid #333;
  border-radius: 3px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width:46%;
  float: left;
  margin-left: 10px;
`;

const ShowCard = (props) => (
  <Wrapper to={`/details/${props.imdbID}`}>
    <Image
      alt={`${props.title} Show Poster`}
      src={`/public/img/posters/${props.poster}`}
    />
    <h3>{props.title}</h3>
    <h4>({props.year})</h4>
    <p>{props.description}</p>
  </Wrapper>
);

ShowCard.defaultProps = {
  imdbID: '',
};

ShowCard.propTypes = {
  poster: string.isRequired,
  imdbID: string,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired,
};

export default ShowCard;
