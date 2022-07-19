import React, { useState } from "react";
// reactstrap components
import {
  Container,
  Nav, 
  NavItem, 
  NavLink, 
  TabContent, 
  TabPane,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import HeaderBg from "components/PageHeader/HeaderBg.js";
import Footer from "components/Footer/Footer.js";

export default function SignupUser() {
  const [activeTab, setActiveTab] = useState('1');
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <HeaderBg />
        <div className="main">
          <h1 style={headtxt}>Welcome to Humanet Users</h1>
        <Container fluid={true} style={{backgroundColor: "white", marginTop: 500, position: 'absolute'}}>
          {/* Who we are and our Strategy */}
          <Container className="mb-5">
          <h1 className="text-center" style={humae}>Sign up User Form</h1>
          </Container>
          {/* Form */}
          <Container className="text-center">
              <Nav tabs style={nav}>
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
              {/* Individual */}
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <p style={tc}>
                    <Form>
                    <FormGroup>
                        <Label for="exampleSelect">
                          Category
                        </Label>
                        <Input
                          id="exampleSelect"
                          name="select"
                          type="select"
                          style={tc}
                        >
                          <option>
                            1
                          </option>
                          <option>
                            2
                          </option>
                          <option>
                            3
                          </option>
                          <option>
                            4
                          </option>
                          <option>
                            5
                          </option>
                        </Input>
                      </FormGroup>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="exampleEmail">
                              Email
                            </Label>
                            <Input
                              id="exampleEmail"
                              name="email"
                              placeholder="with a placeholder"
                              type="email"
                              style={tc}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="examplePassword">
                              Password
                            </Label>
                            <Input
                              id="examplePassword"
                              name="password"
                              placeholder="password placeholder"
                              type="password"
                              style={tc}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <Label for="exampleAddress">
                          Address
                        </Label>
                        <Input
                          id="exampleAddress"
                          name="address"
                          placeholder="1234 Main St"
                          style={tc}
                          />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleDate">
                          Date
                        </Label>
                        <Input
                          id="exampleDate"
                          name="date"
                          placeholder="date placeholder"
                          type="date"
                        />
                      </FormGroup>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="exampleCity">
                              City
                            </Label>
                            <Input
                              id="exampleCity"
                              name="city"
                              style={tc}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="exampleState">
                              State
                            </Label>
                            <Input
                              id="exampleState"
                              name="state"
                              style={tc}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={2}>
                          <FormGroup>
                            <Label for="exampleZip">
                              Zip
                            </Label>
                            <Input
                              id="exampleZip"
                              name="zip"
                              style={tc}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button className="w-100 mt-3">
                        Sign Up
                      </Button>
                    </Form>
                  </p>
                </TabPane>
                <TabPane tabId="2">
                <p style={tc}>
              <Form>
                  <FormGroup>
                    <Label for="exampleSelect">
                    Category
                    </Label>
                    <Input
                      id="exampleSelect"
                      name="select"
                      type="select"
                      style={tc}
                    >
                      <option>
                        1
                      </option>
                      <option>
                        2
                      </option>
                      <option>
                        3
                      </option>
                      <option>
                        4
                      </option>
                      <option>
                        5
                      </option>
                    </Input>
                  </FormGroup>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="exampleEmail">
                              Email
                            </Label>
                            <Input
                              id="exampleEmail"
                              name="email"
                              placeholder="with a placeholder"
                              type="email"
                              style={tc}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="examplePassword">
                              Password
                            </Label>
                            <Input
                              id="examplePassword"
                              name="password"
                              placeholder="password placeholder"
                              type="password"
                              style={tc}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <Label for="exampleAddress">
                          Address
                        </Label>
                        <Input
                          id="exampleAddress"
                          name="address"
                          placeholder="1234 Main St"
                          style={tc}
                          />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleDate">
                          Date
                        </Label>
                        <Input
                          id="exampleDate"
                          name="date"
                          placeholder="date placeholder"
                          type="date"
                        />
                      </FormGroup>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="exampleCity">
                              City
                            </Label>
                            <Input
                              id="exampleCity"
                              name="city"
                              style={tc}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="exampleState">
                              State
                            </Label>
                            <Input
                              id="exampleState"
                              name="state"
                              style={tc}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={2}>
                          <FormGroup>
                            <Label for="exampleZip">
                              Zip
                            </Label>
                            <Input
                              id="exampleZip"
                              name="zip"
                              style={tc}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button className="w-100 mt-3">
                        Sign Up Employee
                      </Button>
                    </Form>
                  </p>
                </TabPane>
              </TabContent>
            </Container>
        <Footer/>
        </Container>
        </div>
      </div>
    </>
  );
}

const headtxt ={
  position: 'absolute', 
  fontSize: '45px',
  fontWeight: 'bolder',
  marginTop: 200, 
  left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)'
}

const tc={
  color: '#1f2251',
}

const humae ={
  fontSize: '50px',
  color: '#1f2251',
  fontWeight: 'bolder',
}
const navlink={
  color: '#1f2251',
  border: '2px black solid'
}

const navitem={
  width: '170px',
  maxWidth: '170px',
  textAlign: 'center',
}

const nav={
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}