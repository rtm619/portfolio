import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from '../../helpers/classnames.helper';
import Logo from '../SVG/Logo';
import CloseIcon from '../SVG/Close';
import Button from '../Button/Button';
import styles from './styles/Header.twstyle';

class Header extends Component {
  static propTypes = {
    headerData: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      hideNav: true,
      triggerColorChange: false,
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const firstFold = document.getElementById('homePageContent_1');
    if (firstFold && window.pageYOffset > firstFold.getBoundingClientRect().height) {
      this.setState({
        triggerColorChange: true,
      });
    } else {
      this.setState({
        triggerColorChange: false,
      });
    }
  }

  handleMenuClick = () => {
    const { menuOpen } = this.state;
    if (!menuOpen) {
      document.body.classList.add('overflow-hidden');
      this.setState({
        menuOpen: true,
        hideNav: false,
      });
    } else {
      document.body.classList.remove('overflow-hidden');
      this.setState({
        menuOpen: false,
      });
      setTimeout(() => {
        const { menuOpen: open } = this.state;
        if (!open) {
          this.setState({
            hideNav: true,
          });
        }
      }, 1000);
    }
  }

  render() {
    const { headerData } = this.props;
    const { menuOpen, hideNav, triggerColorChange } = this.state;
    return (
      <>
        <header className={classnames(styles.wrapper, menuOpen ? 'menu-open' : 'menu-close', triggerColorChange ? 'black-gradient' : 'white-gradient')}>
          <Button type="button" title="hamburger icon" component="button" className={styles.hamburgerButton} onClick={this.handleMenuClick}>
            <Logo className={classnames(styles.hamburgerIcon, triggerColorChange ? 'text-white' : 'text-black')} />
          </Button>
        </header>
        <nav className={classnames(menuOpen ? styles.navigationWrapperOpen : styles.navigationWrapper, hideNav ? 'hidden' : '')}>
          <div className={styles.closeButtonWrapper}>
            <Button type="button" title="close icon" component="button" className={styles.closeButton} onClick={this.handleMenuClick}>
              <CloseIcon className={styles.closeIcon} />
            </Button>
          </div>
          <div className={styles.navContentWrapper}>
            {headerData.menuItems && headerData.menuItems.map((menuItem) => (
              <Button key={menuItem.title} className={styles.navItem} component="Link" to={menuItem.link && menuItem.link.url} activeClassName="menu-item-active">
                <span className={styles.navText}>{menuItem.title}</span>
              </Button>
            ))}
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
