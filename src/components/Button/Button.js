import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';

const Button = ({
  component,
  className,
  ...otherProps
}) => {
  let Component = component;
  if (!Component) {
    Component = 'button';
  }
  if (Component === 'Link') {
    Component = GatsbyLink;
  }
  return (
    <Component className={className} {...otherProps} />
  );
};

Button.propTypes = {
  component: PropTypes.oneOf(['button', 'a', 'Link']),
  className: PropTypes.string,
};

Button.defaultProps = {
  component: 'button',
  className: '',
};

export default Button;
