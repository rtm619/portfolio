import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../helpers/classnames.helper';
import styles from './styles/Typography.twstyle';

const Typography = ({
  children,
  component,
  innerHTML,
  className,
  variant,
}) => {
  let Component = component;
  if (!Component) {
    Component = 'div';
  }
  let variantClassName = '';
  if (styles[variant]) {
    variantClassName = styles[variant];
  }
  if (innerHTML) {
    return (
      <Component
        className={classnames(variantClassName, className)}
        dangerouslySetInnerHTML={{ __html: innerHTML }}
      />
);
  }
  return (
    <Component className={classnames(variantClassName, className)}>
      {children}
    </Component>
  );
};

Typography.propTypes = {
  children: PropTypes.any,
  innerHTML: PropTypes.string,
  component: PropTypes.oneOf(['div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.string,
  variant: PropTypes.string,
};

Typography.defaultProps = {
  className: '',
  variant: '',
};

export default Typography;
