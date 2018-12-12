import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
class HeaderComponent extends Component {
  constructor(props) {
    super(props)
    this.slideMenuHandle = this.slideMenuHandle.bind(this)
    this.state = {
      slideMenuPanel: false
    }
  }
  slideMenuHandle = () => {
    this.setState((prevState) => ({slideMenuPanel: !prevState.slideMenuPanel}))
  }
  render() {
    return (
      <div className="header__component">
        <MobileView>
          {
            this.state.slideMenuPanel &&
            <div className="mobile__navigationPanel">
              <div className="mobile__navigationPanel--wrapper">
                <NavLink className="company__names" to="/">Avocado LTD</NavLink>
                <NavLink className="settings__mobile" to="/">
                  <svg>
                    <use href="image/sprite_primary.svg#icon-settings"></use>
                  </svg>
                  <span>Settings</span>
                </NavLink>
                <NavLink to="/">Logout</NavLink>
              </div>
            </div>
          }
        </MobileView>
        <div className="header__component--wrapper">
          <div className="header__logo">
            <NavLink to="/home"><img src="image/logo__imagery.png" className="header__logo--image"/></NavLink>
          </div>
          <MobileView>
            <div className="mobile__menus">
            <div className="users__relatedDatas--userimage">
              <img src="image/users.jpg" alt="users__image" className="users__relatedDatas--userimage--image"/>
            </div>
            <svg onClick={this.slideMenuHandle}>
              <use href="image/sprite_primary.svg#icon-menu"></use>
            </svg>
            </div>
          </MobileView>
          <div className="users__relatedDatas">
            <div className="users__relatedDatas--currency">
              <select className="currency__select">
                <option>dkk</option>
                <option>eur</option>
                <option>usd</option>
                <option>gbp</option>
                <option>ron</option>
              </select>              
            </div>
            <div className="users__relatedDatas--notifications">
              <svg>
                <use href="image/sprite.svg#icon-notifications"></use>
              </svg>
              <span className="notifications__length">5</span>
            </div>
            <div className="users__relatedDatas--userimage">
              <img src="image/users.jpg" alt="users__image" className="users__relatedDatas--userimage--image"/>
            </div>
            <div className="users__relatedDatas--username">
              <NavLink to="/home"><p className="username__value">Lorem Ipsum</p></NavLink>
              <p className="username__attribute">Travel Manager</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default HeaderComponent;