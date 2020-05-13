import React from 'react';
import PropTypes from 'prop-types';

const Typography = ({
  children,
  component,
  innerHTML,
  className,
}) => {
  let Component = component;
  if (!Component) {
    Component = 'div';
  }
  if (innerHTML) {
    return <Component className={className} dangerouslySetInnerHTML={{ __html: innerHTML }} />;
  }
  return (
    <Component className={className}>
      {children}
    </Component>
  );
};

Typography.propTypes = {
  children: PropTypes.any,
  innerHTML: PropTypes.string,
  component: PropTypes.oneOf(['div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.string,
};

Typography.defaultProps = {
  className: '',
};

export default Typography;
