import React from 'react';
import PropTypes from 'prop-types';

import { getImageUrl } from '../../helpers/cloudinary.helper';

const Image = ({ className, src, alt }) => (
  <img className={className} src={getImageUrl(src)} alt={alt} />
  );

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Image.defaultProps = {
  className: '',
};

export default Image;
