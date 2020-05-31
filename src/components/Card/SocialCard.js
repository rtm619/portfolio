import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/SocialCard.twstyle';
import Image from '../Media/Image';
import Button from '../Button/Button';

const SocialCard = ({
  title, image, link,
}) => (
  <div className={styles.wrapper}>
    <Button component="a" target="_blank" rel="noopener noreferrer" href={link.link && link.link.url} title={title} className={styles.link}>
      <Image className={styles.image} src={image.file && image.file.url} alt={image.title} />
    </Button>
  </div>
  );

SocialCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  link: PropTypes.object.isRequired,
};

export default SocialCard;
