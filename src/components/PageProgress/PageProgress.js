import React, { Component } from 'react';

import styles from './styles/PageProgress.twstyle';

export default class PageProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0,
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handlePageScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handlePageScroll);
  }

  handlePageScroll = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const currentScrollPosition = Number(window.pageYOffset);
    this.setState({
      percentage: (currentScrollPosition / totalHeight),
    });
  }

  handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render() {
    const { percentage } = this.state;
    const dashOffset = (63 - (63 * percentage));
    return (
      <div className={styles.wrapper}>
        <button title="Go To Top" onClick={this.handleButtonClick} className={styles.button} type="button">
          <svg className={styles.circleSvg} height="20" width="20" viewBox="37.5 -62.5 25 25">
            <circle
              cx="50"
              cy="50"
              r="10"
              strokeWidth={2}
              fill="transparent"
              strokeDasharray={63}
              strokeDashoffset={dashOffset}
              style={{ transform: 'rotate(270deg)' }}
            />
          </svg>
          <svg className={styles.arrowSvg} xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 31.49 31.49">
            <path style={{ transform: 'rotate(270deg) translate3d(-34px, -1px, 0)' }} d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111  C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587  c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z" />
          </svg>
        </button>
      </div>
    );
  }
}
