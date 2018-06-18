import React from 'react';
import PropTypes from 'prop-types';

const imgWithClick = { cursor: 'pointer' };

const Photo = ({ index, onClick, photo, margin,onMouseOver,onMouseOut }) => {
  const imgStyle = { display: 'block', float: 'left', margin: margin };

  const handleClick = event => {
    onClick(event, { photo, index });
  };
  
  const handleMouseOver = event => {
	  onMouseOver(event, { photo, index });
	  };
	  
	  
  const handleMouseOut = event => {
	  onMouseOut(event, { photo, index });
  	};	  
  
  	

  return (
    <img
      style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
      {...photo}
      onClick={onClick ? handleClick : null} onMouseOver={onMouseOver ? handleMouseOver : null} onMouseOut={onMouseOut ? handleMouseOut : null}
    />
  );
};

export const photoPropType = PropTypes.shape({
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  srcSet: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  sizes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
});

Photo.propTypes = {
  index: PropTypes.number,
  onClick: PropTypes.func,
  photo: photoPropType,
};

export default Photo;
