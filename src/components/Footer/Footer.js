/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="6">
            <h1 className="title" style={tc}>About Humanet</h1>
              <NavItem>
                <NavLink to="/landing-page" tag={Link} style={tc}>
                orem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea delectus
              pariatur, numquam aperiam dolore nam optio dolorem facilis itaque voluptatum recusandae deleniti minus animi.
                </NavLink>
                <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://twitter.com/creativetim"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-twitter"  style={tc}/>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962" style={tc}>
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.facebook.com/creativetim"
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-facebook-square"  style={tc}/>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801" style={tc}>
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://dribbble.com/creativetim"
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-dribbble"  style={tc}/>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450378" style={tc}>
                Follow us
              </UncontrolledTooltip>
            </div>
              </NavItem>
          </Col>
          <Col md="2">
            <Nav>
                <h3 className="title" m={4} style={tcfooter}>Navigation</h3>
                <NavItem>
                <NavLink to="/" tag={Link} style={tc}>
                Pricing
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/landing-page" tag={Link} style={tc}>
                Partners
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/register-page" tag={Link} style={tc}>
                About Us
                </NavLink>
              </NavItem>
              <NavItem>
              <NavLink to="/register-page" tag={Link} style={tc}>
              Contac Us
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="2">
            <Nav>
            <h3 className="title" m={4} style={tcfooter}>Services</h3>
              <NavItem>
                <NavLink href="https://creative-tim.com/contact-us?ref=blkdsr-footer" style={tc}>
                Memberships
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://creative-tim.com/about-us?ref=blkdsr-footer" style={tc}>
                Collaboration
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://creative-tim.com/blog?ref=blkdsr-footer" style={tc}>
                Todos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://opensource.org/licenses/MIT" style={tc}>
                Events
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="2">
          <Nav>
            <h3 className="title" m={4} style={tcfooter}>Download</h3>
              <NavItem>
                <NavLink href="https://creative-tim.com/contact-us?ref=blkdsr-footer" style={tc}>
                Get from the Apple Store
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://creative-tim.com/about-us?ref=blkdsr-footer" style={tc}>
                Get from the Play Store
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

const tc = {
  color: '#1f2251'
}
const tcfooter = {
  color: 'black'
}