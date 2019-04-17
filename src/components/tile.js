import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';


const Tile = ({ title, copy, image, vertical }) => (
  <div className={`tile is-child ${ vertical ? 'is-vertical' : '' }`}>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <h4>{title}</h4>
    <p>{copy}</p>
  </div>
);

Tile.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
  vertical: PropTypes.bool
};

export default Tile;

// <div className={`tile is-child ${ vertical ? 'is-vertical' : '' }`}>
