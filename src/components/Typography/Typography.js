import React from 'react';
import PropTypes from 'prop-types';

const Typography = ({
  children,
  component,
  className,
}) => {
  let Component = component;
  if (!Component) {
    Component = 'div';
  }
  return (
    <Component className={className}>
      {children}
    </Component>
  );
};

Typography.propTypes = {
  children: PropTypes.any,
  component: PropTypes.oneOf(['div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.string,
};

Typography.defaultProps = {
  className: '',
};

export default Typography;
