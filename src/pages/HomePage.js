import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import HeaderComponent from "../components/HeaderComponent";
import SearchComponent from "../components/SearchComponent";
import TemplatesComponent from "../components/TemplatesComponent";
import RecentComponent from "../components/RecentComponent";
import {NavLink} from "react-router-dom";

class HomePage extends Component {
  constructor() {
    super();
    this.activateTemplateDatas = this.activateTemplateDatas.bind(this)
    this.state = { 
        tabIndex: 0,
        data: "tests"
    };
  }
  activateTemplateDatas = (ev) => {
    console.log(ev.target)
    console.log(ev.target.parentNode.parentNode.parentNode.firstElementChild.textContent)
  }
  render() {
    return (
      <div className="main__component">
        <HeaderComponent/>
        {/* main structure navigation starting point */}
        <div className="main__navigation">
            <div className="main__navigation--wrapper">
                <NavLink 
                    exact={true} 
                    to="/home" 
                    activeClassName="active__navigation"
                    className="search__icon"
                >
                    <svg>
                        <use href="image/sprite.svg#icon-search"></use>
                    </svg>
                    Search
                </NavLink>
                <NavLink 
                    to="/overview" 
                    activeClassName="active__navigation"
                    className="time__icon"
                >
                    <svg>
                        <use href="image/sprite.svg#icon-time"></use>
                    </svg>
                    Trips overview
                </NavLink>
            </div>
        </div>
        {/* main structure navigation finish point */}
        <div className="home__content">
            <div className="home__content--wrapper">
                <div className="home__content--wrapper--title">
                    <h2>Find your next business accomodation</h2>
                </div>
                <div className="home__content--wrapper--tabs">
                <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList className="tabslist__names">
                        <Tab selectedTabClassName="react-tabs__tab--selected">Search</Tab>
                        <Tab selectedTabClassName="react-tabs__tab--selected">Templates</Tab>
                        <Tab selectedTabClassName="react-tabs__tab--selected">Recent Bookings</Tab>
                    </TabList>
                    <TabPanel selectedTabPanelClassName="react-tabs__tab-panel--selected">
                        {/* information 1 content for booking */}
                        <SearchComponent/>
                    </TabPanel>
                    <TabPanel  selectedTabPanelClassName="react-tabs__tab-panel--selected">
                        <TemplatesComponent sendDatasBetweenTabs={this.activateTemplateDatas}/>
                    </TabPanel>
                    <TabPanel  selectedTabPanelClassName="react-tabs__tab-panel--selected">
                        <RecentComponent/>
                    </TabPanel>
                </Tabs>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
export default HomePage;