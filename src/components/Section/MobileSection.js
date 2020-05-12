import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Controller, Scene } from 'react-scrollmagic';
import { Timeline, Tween } from 'react-gsap';

import styles from './styles/MobileSection.twstyle';
import FrameworkCard from '../Card/FrameworkCard';
import Typography from '../Typography/Typography';

export default class MobileSection extends Component {
  static propTypes = {
    content: PropTypes.array.isRequired,
    title: PropTypes.object,
    titleClassName: PropTypes.string,
    uid: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      triggerHook: 'onEnter',
    };
  }

  render() {
    const {
      title,
      titleClassName,
      content,
    } = this.props;
    const { triggerHook } = this.state;
    return (
      <>
        {title && (
          <Typography component={title.component} className={titleClassName}>
            {title.body && title.body.body}
          </Typography>
        )}
        {content && content.map((item) => (
          <Controller key={item.title}>
            <Scene triggerHook={triggerHook} duration="100%">
              {(progress) => (
                <div className={styles.wrapper}>
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
