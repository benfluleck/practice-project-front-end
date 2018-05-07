import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 3px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width:46%;
  float: left;
  margin-left: 10px;
`;

const ShowCard = (props) => (
  <Wrapper>
    <Image
      alt={`${props.title} Show Poster`}
      src={`/public/img/posters/${props.poster}`}
    />
    <h3>{props.title}</h3>
    <h4>({props.year})</h4>
    <p>{props.description}</p>
  </Wrapper>
);

ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired,
};

export default ShowCard;