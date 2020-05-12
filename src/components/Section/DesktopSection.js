import React from 'react';
import PropTypes from 'prop-types';

import Typography from '../Typography/Typography';
import FrameworkCard from '../Card/FrameworkCard';
import styles from './styles/DesktopSection.twstyle';

const DesktopSection = ({ title, titleClassName, content }) => (
  <>
    {title && (
    <Typography component={title.component} className={titleClassName}>
      {title.body && title.body.body}
    </Typography>
      )}
    <div className={styles.contentWrapper}>
      {content && content.map((item) => (
        <FrameworkCard key={item.title} {...item} />
        ))}
    </div>
  </>
  );

DesktopSection.propTypes = {
  title: PropTypes.object,
  titleClassName: PropTypes.string,
  content: PropTypes.array.isRequired,
};

export default DesktopSection;
