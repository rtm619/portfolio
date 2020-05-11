import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ className, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" style={style} className={className} viewBox="0 0 1000.000000 750.000000" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,750.000000) scale(0.100000,-0.100000)">
      <path d="M4605 4840 l-1150 -1150 1017 -1017 1018 -1018 152 153 153 152 -865 865 -865 865 935 935 935 935 1730 0 1730 0 215 215 215 215 -2035 0 -2035 0 -1150 -1150z" />
      <path d="M270 5755 l205 -205 1910 0 1910 0 -350 -350 -350 -350 -1210 0 -1210 0 1872 -1872 1873 -1873 152 153 153 152 -1515 1515 -1515 1515 790 0 790 0 760 760 760 760 -2615 0 -2615 0 205 -205z" />
    </g>
  </svg>
);

Logo.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

Logo.defaultProps = {
  className: 'fill-current text-black w-28 h-auto',
  style: {},
};

export default Logo;
