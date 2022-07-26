import { US } from 'country-flag-icons/react/3x2'
import { ES } from 'country-flag-icons/react/3x2'
import { CN } from 'country-flag-icons/react/3x2'
import { AE } from 'country-flag-icons/react/3x2'
import { FR } from 'country-flag-icons/react/3x2'
import { RU } from 'country-flag-icons/react/3x2'
import { IT } from 'country-flag-icons/react/3x2'
import { PT } from 'country-flag-icons/react/3x2'
import { JP } from 'country-flag-icons/react/3x2'
import { DE } from 'country-flag-icons/react/3x2'
import { KR } from 'country-flag-icons/react/3x2'
import { IN } from 'country-flag-icons/react/3x2'

import React from "react";
import humalogo from '../../assets/img/huma_logo.png';
import { Link } from "react-router-dom"; 
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  },[]);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <img src={humalogo} alt="Huma-logo" height={40}/>
            <span> HUMANET.IO</span> 
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
          We have re-invented the accross border health and medical exchange experience anywhere anytime.
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  BLK•React
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar><NavItem className="p-0">
              <NavLink tag={Link} to="/about-us">
                About Us
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink tag={Link} to="/huma-e">
                HumaEhealthpass
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink tag={Link} to="/signup-user">
                Sign Up Users
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink tag={Link} to="/signup-provider">
                Sign Up Providers
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink tag={Link} to="/landing-page">
                Our Coins
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink tag={Link} to="/pricing">
                Pricing
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Language
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem tag={Link} to="/register-page">
                  <US title="United States" style={Lang}/>
                  English
                </DropdownItem>
                <DropdownItem tag={Link} to="/landing-page">
                <ES title="Spain" style={Lang}/>
                  Spanish
                </DropdownItem>
                <DropdownItem tag={Link} to="/profile-page">
                <CN title="China" style={Lang}/>
                  Chinese
                </DropdownItem>
                <DropdownItem tag={Link} to="/register-page">
                <AE title="United Arab" style={Lang}/>
                  Arabic
                </DropdownItem>
                <DropdownItem tag={Link} to="/landing-page">
                <FR title="France" style={Lang}/>
                  French
                </DropdownItem>
                <DropdownItem tag={Link} to="/profile-page">
                <RU title="Russia" style={Lang}/>
                  Russian
                </DropdownItem>
                <DropdownItem tag={Link} to="/register-page">
                <IT title="Italy" style={Lang}/>
                  Italian
                </DropdownItem>
                <DropdownItem tag={Link} to="/landing-page">
                <PT title="Portugal" style={Lang}/>
                  Portuguese
                </DropdownItem>
                <DropdownItem tag={Link} to="/profile-page">
                <JP title="Japan" style={Lang}/>
                  Japanese
                </DropdownItem>
                <DropdownItem tag={Link} to="/register-page">
                <DE title="Germany" style={Lang}/>
                  German
                </DropdownItem>
                <DropdownItem tag={Link} to="/landing-page">
                <KR title="Korea" style={Lang}/>
                  Korean
                </DropdownItem>
                <DropdownItem tag={Link} to="/profile-page">
                <IN title="India" style={Lang}/>
                  Hindi
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
            <Button
              className="btn-simple btn-round"
              color="neutral"
              to="register-page"
              tag={Link}
            >
              Log In
            </Button>
            </NavItem>

          </Nav>
        </Collapse>
      </Container>
    </Navbar>
    
  );
}
const Lang = {
  height: '30px',
  width: '30px',
  padding: "5px",
};