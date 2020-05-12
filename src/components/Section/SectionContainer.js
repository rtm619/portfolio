import React, { Component } from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';

import styles from './styles/SectionContainer.twstyle';

const MobileSection = loadable(() => import('./MobileSection'));
const DesktopSection = loadable(() => import('./DesktopSection'));

class SectionContainer extends Component {
  static propTypes = {
    sectionTitle: PropTypes.object,
    content: PropTypes.array.isRequired,
    variant: PropTypes.string.isRequired,
    entryId: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      screenWidth: null,
    };
  }

  componentDidMount = () => {
    this.setState({
      screenWidth: window.innerWidth,
    });
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      screenWidth: window.innerWidth,
    });
  }

  render() {
    const {
 sectionTitle: title, variant, content, entryId,
} = this.props;
    const { screenWidth } = this.state;
    const isMobile = screenWidth < Number(process.env.GATSBY_MOBILE_BREAKPOINT);

    let componentStyle = styles.default;
    if (styles[variant]) {
      componentStyle = styles[variant];
    }
    return (
      <div className={componentStyle.wrapper}>
        {isMobile ? (
          <MobileSection
            uid={entryId}
            titleClassName={componentStyle.title}
            title={title}
            content={content}
          />
        ) : (
          <DesktopSection
            uid={entryId}
            titleClassName={componentStyle.title}
            title={title}
            content={content}
          />
          )}
      </div>
    );
  }
}

export default SectionContainer;
