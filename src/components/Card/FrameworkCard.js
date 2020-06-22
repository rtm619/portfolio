import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import classnames from '../../helpers/classnames.helper';
import Image from '../Media/Image';
import styles from './styles/FrameworkCard.twstyle';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import Triangle from '../SVG/Triangle';

const FrameworkCard = ({
  title, shortDescription, image, link,
}) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    if (window.innerWidth >= Number(process.env.GATSBY_MOBILE_BREAKPOINT)) {
      const currentRef = domRef.current;
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (!isVisible && entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(currentRef);
        }
      });
      observer.observe(currentRef);
    }
  });
  return (
    <div ref={domRef} className={classnames(styles.wrapper, isVisible ? 'in-viewport-fade' : '')}>
      {image && (
        <Image className={styles.image} src={image.file && image.file.url} alt={image.title} />
      )}
      <div className={styles.contentWrapper}>
        {title && (
          <Typography component="div" className={styles.title}>
            {title}
          </Typography>
        )}
        {shortDescription && (
          <Typography component="p" className={styles.shortDescription}>
            {shortDescription.shortDescription}
          </Typography>
        )}
        {link && (
          <Button component="a" target="_blank" rel="noopener noreferrer" href={link.link && link.link.url} title={link.title} className={styles.link}>
            <span className={styles.linkText}>{link.text}</span>
            <Triangle className={styles.linkIcon} />
          </Button>
        )}
      </div>
    </div>
  );
};

FrameworkCard.propTypes = {
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
  link: PropTypes.object.isRequired,
};

export default FrameworkCard;
