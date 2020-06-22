import React from 'react';
import PropTypes from 'prop-types';

const Triangle = ({ className, style }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 40">
    <polygon points="0,0 160,0 180,20 160,40 0,40" />
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
