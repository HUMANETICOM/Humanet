import React, { Component } from 'react';
import { Nav, NavItem, NavLink,
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
        <TabContent activeTab={activeSubTab} style={tabsize}>
          <TabPane tabId="2">
          <Price/>
          </TabPane>
        </TabContent>
        <TabContent activeTab={activeSubTab} style={tabsize}>
          <TabPane tabId="3">
          <Price/>
          </TabPane>
        </TabContent>
        <TabContent activeTab={activeSubTab} style={tabsize}>
          <TabPane tabId="4">
            <Price/>
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
            Medical
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={activeSubTab === '2' ? { fontSize: "1.25rem" } : {}}
            onClick={() => { this.toggleSubTab('2'); }}
          >
            Others
          </NavLink>
        </NavItem>
        <TabContent activeTab={activeSubTab} style={tabsize}>
          <TabPane tabId="1">   
            <Price/>
          </TabPane>
        </TabContent>
        <TabContent activeTab={activeSubTab} style={tabsize}>
          <TabPane tabId="2">
            <Price/>
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
              User
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeMainTab === '2' })}
              onClick={() => { this.toggleMainTab('2'); }}>
              Provider
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
