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
      triggerHook: 'onLeave',
    };
  }

  getProgress = (progress, index, totalCount) => {
    // This function behaves similar to Stagger, but I wanted to fine-tune stagger to my liking.
    const start = (index / totalCount);
    const end = ((index + 1) / totalCount);
    const multiplier = totalCount;
    if (progress <= start) {
      return 0;
    }
    if (progress > start && progress <= end) {
      return (progress - start) * multiplier;
    }
    return 1;
  }

  render() {
    const {
      title,
      titleClassName,
      content,
      uid,
    } = this.props;
    const { triggerHook } = this.state;
    return (
      <Controller>
        <Scene triggerElement={`#${uid}`} triggerHook={triggerHook} duration="100%">
          {(progress) => (
            <div id={uid} className={styles.wrapper}>
              {title && (
                <Typography component={title.component} className={titleClassName}>
                  {title.body && title.body.body}
                </Typography>
              )}
              {content && content.map((item, index) => (
                <Timeline progress={this.getProgress(progress, index, content.length)} duration="100%">
                  <Tween from={{ opacity: 0, yPercent: 100, scale: '0' }} to={{ opacity: 1, yPercent: 0, scale: '1' }}>
                    <div key={item.title}>
                      <FrameworkCard {...item} />
                    </div>
                  </Tween>
                </Timeline>
              ))}
            </div>
          )}
        </Scene>
      </Controller>
    );
  }
}
