import React from 'react';
import PropTypes from 'prop-types';

import { getImageUrl, getSrcSet } from '../../helpers/cloudinary.helper';

const ImageSet = ({
  srcSet, src, alt, wrapperClass, className,
}) => (
  <picture className={wrapperClass}>
    <source media="(min-width: 992px)" srcSet={getSrcSet(srcSet)} />
    <img className={className} src={getImageUrl(src)} alt={alt} />
  </picture>
);

ImageSet.propTypes = {
  className: PropTypes.string,
  wrapperClass: PropTypes.string,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

ImageSet.defaultProps = {
  className: '',
  wrapperClass: '',
};

export default ImageSet;
