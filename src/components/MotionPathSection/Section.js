import React from 'react';
import PropTypes from 'prop-types';
import { Scene, Controller } from 'react-scrollmagic';
import { gsap } from 'gsap';
import MotionPathPlugin from 'gsap/MotionPathPlugin';

import styles from './styles/Section.twstyle';
import Content from './Content';

gsap.registerPlugin(MotionPathPlugin);

const Section = ({ variant, triggerHook, content }) => {
  let componentStyle = styles.default;
  if (styles[variant]) {
    componentStyle = styles[variant];
  }
  return (
    <Controller>
      <Scene triggerHook={triggerHook} duration="100%" indicators>
        {(progress) => (
          <div className={componentStyle}>
            {content.map((item) => (
              <Content {...item} progress={progress} />
            ))}
          </div>
        )}
      </Scene>
    </Controller>
  );
};

Section.propTypes = {
  variant: PropTypes.string.isRequired,
  triggerHook: PropTypes.oneOf(['onEnter', 'onLeave', 'onCenter']).isRequired,
  content: PropTypes.array.isRequired,
};

export default Section;
