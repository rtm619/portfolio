import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/Banner.twstyle';
import ImageSet from '../Media/ImageSet';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';

const Banner = ({
  title,
  shortDescription,
  desktopImage,
  mobileImage,
  variant,
  link,
}) => {
  let componentStyle = styles.default;
  if (styles[variant]) {
    componentStyle = styles[variant];
  }
  return (
    <div className={componentStyle.wrapper}>
      <ImageSet
        className={componentStyle.img}
        wrapperClass={componentStyle.imgWrapper}
        srcSet={desktopImage.file && desktopImage.file.url}
        src={mobileImage.file && mobileImage.file.url}
        alt={mobileImage.title}
      />
      <div className={componentStyle.contentWrapper}>
        {title && (
          <Typography className={componentStyle.title}>{title.body}</Typography>
        )}
        {shortDescription && (
          <Typography className={componentStyle.shortDescription}>
            {shortDescription.body}
          </Typography>
        )}
        {link && (
          <Button className={componentStyle.link} component="Link" />
        )}
      </div>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.object,
  shortDescription: PropTypes.object,
  desktopImage: PropTypes.object.isRequired,
  mobileImage: PropTypes.object.isRequired,
  variant: PropTypes.string.isRequired,
  link: PropTypes.object,
};

export default Banner;
