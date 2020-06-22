import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Controller, Scene } from 'react-scrollmagic';
import { Timeline, Tween } from 'react-gsap';

import styles from './styles/MobileSection.twstyle';
import FrameworkCard from '../Card/FrameworkCard';

export default class MobileSection extends Component {
  static propTypes = {
    content: PropTypes.array.isRequired,
    variant: PropTypes.string,
    uid: PropTypes.string.isRequired,
  }

  static defaultProps = {
    variant: '',
  }

  constructor(props) {
    super(props);
    this.state = {
      triggerHook: 'onEnter',
    };
  }

  render() {
    const {
      variant,
      content,
    } = this.props;
    const { triggerHook } = this.state;
    let componentStyle = styles.default;
    if (styles[variant]) {
      componentStyle = styles[variant];
    }
    return (
      <>
        {content && content.map((item) => (
          <Controller key={item.title}>
            <Scene triggerHook={triggerHook} duration="100%">
              {(progress) => (
                <div className={componentStyle}>
                  <Timeline progress={progress} duration="100%">
                    <Tween from={{ opacity: 0, yPercent: 100, scale: '0' }} to={{ opacity: 1, yPercent: 0, scale: '1' }}>
                      <div>
                        <FrameworkCard {...item} />
                      </div>
                    </Tween>
                  </Timeline>
                </div>
              )}
            </Scene>
          </Controller>
        ))}
      </>
    );
  }
}
