import React from 'react';
import PropTypes from 'prop-types';
import { Timeline, Tween } from 'react-gsap';
import loadable from '@loadable/component';

import styles from './styles/Content.twstyle';
import Typography from '../Typography/Typography';

const Image = loadable(() => import('../Media/Image'));

class Content extends React.Component {
  static propTypes = {
    progress: PropTypes.any,
    variant: PropTypes.string.isRequired,
    startPath: PropTypes.object.isRequired,
    endPath: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
  };

  getContent = (type, styleObject) => {
    const { content } = this.props;
    switch (type) {
      case 'ContentfulImage': return (
        <Image
          alt={content.image && content.image.title}
          src={content.image && content.image.file && content.image.file.url}
          className={styleObject.item}
        />
      );
      case 'ContentfulTypography': return (
        <Typography component={content.component} className={styleObject.item}>
          {content.body && content.body.body}
        </Typography>
      );
      default: return null;
    }
  }

  render() {
    const {
      progress, variant, startPath, endPath, content,
    } = this.props;
    let componentStyles = styles.default;
    if (styles[variant]) {
      componentStyles = styles[variant];
    }
    return (
      <Timeline
        progress={progress}
        duration="100%"
        target={(
          <div className={componentStyles.wrapper}>
            {this.getContent(content.componentType, componentStyles)}
          </div>
        )}
      >
        <Tween
          from={JSON.parse(startPath.internal.content)}
          to={JSON.parse(endPath.internal.content)}
        />
      </Timeline>
    );
  }
}

export default Content;
