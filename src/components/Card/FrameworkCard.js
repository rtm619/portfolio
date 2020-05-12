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
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();
  useEffect(() => {
    if (window.innerWidth >= process.env.GATSBY_MOBILE_BREAKPOINT) {
      const currentRef = domRef.current;
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setVisible(entry.isIntersecting);
      });
      observer.observe(currentRef);
      return () => observer.unobserve(currentRef);
    }
    return () => null;
  }, []);
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
        <Button component="a" href={link.link && link.link.url} title={link.title} className={styles.link}>
          <span className={styles.linkText}>{link.text}</span>
          <Triangle style={{ height: '31px', width: '31px' }} className={styles.linkIcon} />
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
