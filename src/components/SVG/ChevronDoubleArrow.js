import React from 'react';
import PropTypes from 'prop-types';

const ChevronDoubleArrow = ({ className, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} viewBox="0 0 612 612">
    <path d="M325.402,0.296h-57.912L554.088,306L267.491,611.704h57.912L612,306L325.402,0.296z M57.912,0.296H0L286.597,306     L0,611.704h57.912L344.509,306L57.912,0.296z" />
  </svg>
);

ChevronDoubleArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

ChevronDoubleArrow.defaultProps = {
  className: 'fill-current text-black w-24 h-24',
  style: {},
};

export default ChevronDoubleArrow;
