import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/SocialMediaSection.twstyle';
import SocialCard from '../Card/SocialCard';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';

const SocialMediaSection = ({
  socialCards, contactTitle, contactLink,
}) => (
  <div className={styles.wrapper}>
    <div className={styles.socialCardsWrapper}>
      {socialCards.map((card) => (
        <SocialCard {...card} key={card.contentful_id} />
        ))}
    </div>
    <div className={styles.contactUsWrapper}>
      <Typography component="h3" className={styles.contactUsTitle}>
        {contactTitle}
      </Typography>
      <Button
        component="a"
        className={styles.mailButton}
        href={contactLink.link && contactLink.link.url}
        title={contactLink.title}
      >
        {contactLink.text}
      </Button>
    </div>
  </div>
  );

SocialMediaSection.propTypes = {
  socialCards: PropTypes.array,
  contactTitle: PropTypes.string,
  contactLink: PropTypes.object,
};

export default SocialMediaSection;
