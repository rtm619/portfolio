import React from 'react';
import PropTypes from 'prop-types';

import FrameworkCard from '../Card/FrameworkCard';
import styles from './styles/DesktopSection.twstyle';

const DesktopSection = ({ content, variant }) => {
  let componentStyle = styles.default;
  if (styles[variant]) {
    componentStyle = styles[variant];
  }
  return (
    <div className={componentStyle}>
      {content && content.map((item) => (
        <FrameworkCard key={item.title} {...item} />
      ))}
    </div>
  );
};

DesktopSection.propTypes = {
  variant: PropTypes.string,
  content: PropTypes.array.isRequired,
};

DesktopSection.defaultProps = {
  variant: '',
};

export default DesktopSection;
