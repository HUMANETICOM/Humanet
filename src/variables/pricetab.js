/*
 * Reactstrap "Nested" Tabs Example
 *
 * By Luke Schoen @ltfschoen
 *
 * References:
 *  - Reactstrap Tabs https://reactstrap.github.io/components/tabs/
 *  - Related issue that this tries to solve https://github.com/reactstrap/reactstrap/issues/1599
 */

import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink,
  TabContent, TabPane
} from 'reactstrap';
import classnames from 'classnames';
import Price from './price.js';

class SubTabA extends Component {
  toggleSubTab = (newSubTab) => {
    const { activeSubTab, toggleSubTab } = this.props;

    if (newSubTab !== activeSubTab) {
      toggleSubTab(newSubTab);
    }
  }

  render() {
    const { activeSubTab } = this.props;

    return (
      <Nav tabs>
        <NavItem>
          <NavLink
            // Only allowed to a NavLink `active` prop once.
            // So use it to identify the MainTab that's active.
            // And use styles with the ternary operator to identify the active SubTab
            // Or even better, just define a class
            style={activeSubTab === '1' ? { fontSize: "1.25rem" } : {}}
            // className={classnames({ active: activeSubTab === '1' })}
            onClick={() => { this.toggleSubTab('1'); }}
          >
            Individual or Family User
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={activeSubTab === '2' ? { fontSize: "1.25rem" } : {}}
            onClick={() => { this.toggleSubTab('2'); }}
          >
            Employee Small Corporation
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={activeSubTab === '3' ? { fontSize: "1.25rem" } : {}}
            onClick={() => { this.toggleSubTab('3'); }}
          >
            Medium Corporation User
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={activeSubTab === '4' ? { fontSize: "1.25rem" } : {}}
            onClick={() => { this.toggleSubTab('4'); }}
          >
            Large Corporation User
          </NavLink>
        </NavItem>
        <TabContent activeTab={activeSubTab} style={tabsize}>
          <TabPane tabId="1">
            <Price/>
          </TabPane>
        </TabContent>
        <TabContent activeTab={activeSubTab}>
          <TabPane tabId="2">
            MainTab A SubTab 2 Content
          </TabPane>
        </TabContent>
        <TabContent activeTab={activeSubTab}>
          <TabPane tabId="3">
            MainTab A SubTab 3 Content
          </TabPane>
        </TabContent>
        <TabContent activeTab={activeSubTab}>
          <TabPane tabId="4">
            MainTab A SubTab 4 Content
          </TabPane>
        </TabContent>
      </Nav>
    )
  }
}

class SubTabB extends Component {
  toggleSubTab = (newSubTab) => {
    const { activeSubTab, toggleSubTab } = this.props;

    if (newSubTab !== activeSubTab) {
      toggleSubTab(newSubTab);
    }
  }

  render() {
    const { activeSubTab } = this.props;

    return (
      <Nav tabs>
        <NavItem>
          <NavLink
            style={activeSubTab === '1' ? { fontSize: "1.25rem" } : {}}
            onClick={() => { this.toggleSubTab('1'); }}
          >
            MainTab B SubTab 1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={activeSubTab === '2' ? { fontSize: "1.25rem" } : {}}
            onClick={() => { this.toggleSubTab('2'); }}
          >
            MainTab B SubTab 2
          </NavLink>
        </NavItem>
        <TabContent activeTab={activeSubTab}>
          <TabPane tabId="1">   
            MainTab B SubTab 1 Content
          </TabPane>
        </TabContent>
        <TabContent activeTab={activeSubTab}>
          <TabPane tabId="2">
            MainTab B SubTab 2 Content
          </TabPane>
        </TabContent>
      </Nav>
    )
  }
}

class MainComponent extends Component {
  constructor() {
    super();

    this.state = {
      activeMainTab: '1',
      activeSubTab: '1'
    };
  }

  toggleMainTab = (newMainTab) => {
    const { activeMainTab, activeSubTab } = this.state;

    if (newMainTab !== activeMainTab) {
      this.setState({
        activeMainTab: newMainTab,
        // Reset the sub tab to the first tab if the main tab changes
        activeSubTab: '1'
      });
    }
  }

  toggleSubTab = (newSubTab) => {
    const { activeMainTab, activeSubTab } = this.state;

    if (newSubTab !== activeSubTab) {
      this.setState({
        activeSubTab: newSubTab
      });
    }
  }

  render() {
    const { activeMainTab, activeSubTab } = this.state;

    return (
      <div>
        <Nav tabs pills>
          <NavItem>
            <NavLink
              className={classnames({ active: activeMainTab === '1' })}
              onClick={() => { this.toggleMainTab('1'); }}>
              MainTab A
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeMainTab === '2' })}
              onClick={() => { this.toggleMainTab('2'); }}>
              MainTab B
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeMainTab}>
          <TabPane tabId="1">
            <SubTabA
              activeSubTab={activeSubTab}
              toggleSubTab={this.toggleSubTab}
            />                 
          </TabPane>
          <TabPane tabId="2">
            <SubTabB
              activeSubTab={activeSubTab}
              toggleSubTab={this.toggleSubTab}
            />
          </TabPane>
        </TabContent>
      </div>
    )
  }
}

const tabsize = {
  width: "100%",
  height: "100%"
}

export default MainComponent;
