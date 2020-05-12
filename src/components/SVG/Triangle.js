import React from 'react';
import PropTypes from 'prop-types';

const Triangle = ({ className, style }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
    <polygon points="250,0 500,250 250,500" />
  </svg>
);

Triangle.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

Triangle.defaultProps = {
  className: 'fill-current text-black w-24 h-24',
  style: {},
};

export default Triangle;
