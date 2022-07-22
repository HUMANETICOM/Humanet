import React from "react";
// reactstrap components
import {
  Container,
  Row,
  Col, 
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import MainComponent from "variables/pricetab.js";

export default function Pricing() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  },[]);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <section className="section section-lg section-coins">
          <Container>
            <Row>
              <Col md="4">
                <h1>
                  Choose a Plan{" "}
                  <span className="text-info">that fits your needs</span>
                </h1>
              </Col>
              <Col md="8">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere illum obcaecati inventore velit laborum earum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere illum obcaecati inventore velit laborum earum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere illum obcaecati inventore velit laborum earum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere illum obcaecati inventore velit laborum earum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere illum obcaecati inventore velit laborum earum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere illum obcaecati inventore velit laborum earum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere illum obcaecati inventore velit laborum earum.</p>
              </Col>
            </Row>
            <Container className="text-center">
            </Container>
            <MainComponent/>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}