
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Input,
  Table,
  TabPane,
  FormText,
  NavLink,
  TabContent,
  Nav,
  NavItem,
  Container,
  Row,
  Col,
  
} from "reactstrap";
import PerfectScrollbar from "perfect-scrollbar";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

export default function RegisterPage() {
  const [tabs, setTabs] = React.useState(1);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
  },[]);
  let ps = null;
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  },[]);
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container>
              <Row>
                <Col className="offset-lg-0 offset-md-3" lg="12" md="12">
                  <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: squares7and8 }}
                  />
                  <div
                    className="square square-8"
                    id="square8"
                    style={{ transform: squares7and8 }}
                  />
                  <Card className="card-register">
                    <CardHeader>
                      <CardImg
                        alt="..."
                        src={require("assets/img/square-purple-1.png").default}
                      />
                      <CardTitle tag="h4">Log In</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Col className="ml-auto mr-auto" lg="5" md="12">
                        <Card className="card-coin card-plain">
                          <CardHeader>
                            <h4 className="title">Login Form</h4>
                          </CardHeader>
                          <CardBody>
                            <Nav
                              className="nav-tabs-primary justify-content-center"
                              tabs
                            >
                              <NavItem>
                                <NavLink
                                  className={classnames({
                                    active: tabs === 1,
                                  })}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setTabs(1);
                                  }}
                                  href="#pablo"
                                >
                                  Users
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  className={classnames({
                                    active: tabs === 2,
                                  })}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setTabs(2);
                                  }}
                                  href="#pablo"
                                >
                                  Employees
                                </NavLink>
                              </NavItem>
                            </Nav>
                            <TabContent
                              className="tab-subcategories"
                              activeTab={"tab" + tabs}
                            >
                              <TabPane tabId="tab1">
                                <Table className="tablesorter" responsive>
                                <Row>
                                  <Label sm="3">Username</Label>
                                  <Col sm="9">
                                    <FormGroup>
                                      <Input
                                        type="text"
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Label sm="3">User ID</Label>
                                  <Col sm="9">
                                    <FormGroup>
                                      <Input type="text" />
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Label sm="3">Email or Number</Label>
                                  <Col sm="9">
                                    <FormGroup>
                                      <Input type="text" />
                                    </FormGroup>
                                  </Col>
                                </Row>
                                </Table>
                                <Button
                                  className="btn-simple btn-icon btn-round float-right"
                                  color="primary"
                                  type="submit"
                                >
                                  <i className="tim-icons icon-send" />
                                </Button>
                              </TabPane>
                              <TabPane tabId="tab2">
                                <Table className="tablesorter" responsive>
                                  <Row>
                                    <Label sm="3">Username</Label>
                                    <Col sm="9">
                                      <FormGroup>
                                        <Input
                                          type="text"
                                        />
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Label sm="3">User ID</Label>
                                    <Col sm="9">
                                      <FormGroup>
                                        <Input type="text" />
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Label sm="3">Email or Number</Label>
                                    <Col sm="9">
                                      <FormGroup>
                                        <Input type="text" />
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                  </Table>
                                <Button
                                  className="btn-simple btn-icon btn-round float-right"
                                  color="primary"
                                  type="submit"
                                >
                                  <i className="tim-icons icon-send" />
                                </Button>
                              </TabPane>
                            </TabContent>
                          </CardBody>
                        </Card>
                      </Col>
                    </CardBody>
                    
                  </Card>
                </Col>
              </Row>
              <div className="register-bg" />
              <div
                className="square square-1"
                id="square1"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-2"
                id="square2"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-3"
                id="square3"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-4"
                id="square4"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: squares1to6 }}
              />
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
