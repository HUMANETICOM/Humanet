import React, { useState } from "react";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col, 
  Nav, 
  NavItem, 
  NavLink, 
  TabContent, 
  TabPane,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('1');
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
              <Nav tabs style={nav} className="mb-3">
                <NavItem style={navitem}>
                  <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')} style={navlink}>
                  individual
                  </NavLink>
                </NavItem>
                <NavItem style={navitem}>
                  <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')} style={navlink}>
                  Employees
                  </NavLink>
                </NavItem>
              </Nav>
              {/* Plan */}
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                <Row>
                  <Col md="3">
                    <Card className="card-coin card-plain">
                      <CardBody>
                        <Row>
                          <Col className="text-center" md="12">
                            <h4 className="text-uppercase">Light Coin</h4>
                            <span>Plan</span>
                            <hr className="line-primary" />
                          </Col>
                        </Row>
                        <Row>
                          <ListGroup>
                            <ListGroupItem>50 messages</ListGroupItem>
                            <ListGroupItem>100 emails</ListGroupItem>
                            <ListGroupItem>24/7 Support</ListGroupItem>
                          </ListGroup>
                        </Row>
                      </CardBody>
                      <CardFooter className="text-center">
                        <Button className="btn-simple" color="primary">
                          Get plan
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                  <Col md="3">
                    <Card className="card-coin card-plain">
                      <CardBody>
                        <Row>
                          <Col className="text-center" md="12">
                            <h4 className="text-uppercase">Dark Coin</h4>
                            <span>Plan</span>
                            <hr className="line-success" />
                          </Col>
                        </Row>
                        <Row>
                          <ListGroup>
                            <ListGroupItem>150 messages</ListGroupItem>
                            <ListGroupItem>1000 emails</ListGroupItem>
                            <ListGroupItem>24/7 Support</ListGroupItem>
                          </ListGroup>
                        </Row>
                      </CardBody>
                      <CardFooter className="text-center">
                        <Button className="btn-simple" color="success">
                          Get plan
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                  <Col md="3">
                    <Card className="card-coin card-plain">
                      <CardBody>
                        <Row>
                          <Col className="text-center" md="12">
                            <h4 className="text-uppercase">Bright Coin</h4>
                            <span>Plan</span>
                            <hr className="line-info" />
                          </Col>
                        </Row>
                        <Row>
                          <ListGroup>
                            <ListGroupItem>350 messages</ListGroupItem>
                            <ListGroupItem>10K emails</ListGroupItem>
                            <ListGroupItem>24/7 Support</ListGroupItem>
                          </ListGroup>
                        </Row>
                      </CardBody>
                      <CardFooter className="text-center">
                        <Button className="btn-simple" color="info">
                          Get plan
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                  <Col md="3">
                    <Card className="card-coin card-plain">
                      <CardBody>
                        <Row>
                          <Col className="text-center" md="12">
                            <h4 className="text-uppercase">Bright Coin</h4>
                            <span>Plan</span>
                            <hr className="line-info" />
                          </Col>
                        </Row>
                        <Row>
                          <ListGroup>
                            <ListGroupItem>350 messages</ListGroupItem>
                            <ListGroupItem>10K emails</ListGroupItem>
                            <ListGroupItem>24/7 Support</ListGroupItem>
                          </ListGroup>
                        </Row>
                      </CardBody>
                      <CardFooter className="text-center">
                        <Button className="btn-simple" color="info">
                          Get plan
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Nav tabs style={nav} className="mb-3">
                  <NavItem style={navitem}>
                    <NavLink className={activeTab === '5' ? 'active' : ''} onClick={() => setActiveTab('5')} style={navlink}>
                    1
                    </NavLink>
                  </NavItem>
                  <NavItem style={navitem}>
                    <NavLink className={activeTab === '6' ? 'active' : ''} onClick={() => setActiveTab('6')} style={navlink}>
                    2
                    </NavLink>
                  </NavItem>
                </Nav>
                {/* Individual */}
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="5">
                    1
                  </TabPane>
                  <TabPane tabId="6">
                  2
                  </TabPane>
                </TabContent>
                </TabPane>
              </TabContent>
            </Container>
            
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}

const navlink={
  color: '#1f2251',
  border: '2px black solid',
}

const navitem={
  width: '50%',
  maxWidth: '50%',
  textAlign: 'center',
}

const nav={
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}