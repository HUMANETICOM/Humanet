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
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function NucleoIcons() {
  return (
    <div className="section section-nucleo-icons">
      <img
        alt="..."
        className="path"
        src={require("assets/img/path3.png").default}
      />
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="12">
            <h2 className="title" style={{color: 'black', fontSize:'50px'}}>Humanet Partnership</h2>
            <h4 className="description">
            Humanet has partnerships in place in every country's medical system and in the businesses that oversee its operations, and we share both our profits and our liabilities with those partners.
            </h4>
            <div className="btn-wrapper">
              <Button
                className="btn-round"
                color="info"
                href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons"
                rel="noopener noreferrer"
                target="_blank"
              >
                View Humanet partnership
              </Button>
              <Button
                className="btn-simple btn-round"
                color="info"
                href="https://nucleoapp.com/?ref=1712"
                rel="noopener noreferrer"
                size="lg"
                target="_blank"
              >
                View Humanet members
              </Button>
            </div>
          </Col>
        </Row>
        <div className="blur-hover">
          <a href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons">
            <div className="icons-container blur-item on-screen mt-5">
              {/* Center */}
              <i className="icon icon-sm tim-icons icon-facebook" />
              {/* Right 1 */}
              <i className="icon icon-sm tim-icons icon-spaceship" />
              <i className="icon icon-sm tim-icons icon-money-coins" />
              <i className="icon icon-sm tim-icons icon-link-72" />
              {/* Right 2 */}
              <i className="icon tim-icons icon-send" />
              <i className="icon tim-icons icon-mobile" />
              <i className="icon tim-icons icon-wifi" />
              {/* Left 1 */}
              <i className="icon icon-sm tim-icons icon-key-25" />
              <i className="icon icon-sm tim-icons icon-atom" />
              <i className="icon icon-sm tim-icons icon-satisfied" />
              {/* Left 2 */}
              <i className="icon tim-icons icon-gift-2" />
              <i className="icon tim-icons icon-tap-02" />
              <i className="icon tim-icons icon-wallet-43" />
            </div>
            <span className="blur-hidden h5 text-primary">
              Eplore all the 56+ Humanet Partnership
            </span>
          </a>
        </div>
      </Container>
    </div>
  );
}
