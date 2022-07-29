import React, { useState } from "react";
// reactstrap components
import {
  Container,
  Col,
  Row,
  Nav, 
  NavItem, 
  NavLink, 
  TabContent, 
  TabPane,
  UncontrolledCarousel
} from "reactstrap";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import HeaderBg from "components/PageHeader/HeaderBg.js";
import Footer from "components/Footer/Footer.js";

export default function HumaE() {
  const [activeTab, setActiveTab] = useState('1');
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <HeaderBg />
        <div className="main">
          <h1 style={headtxt}>Welcome to HumaEHealth</h1>
        <Container fluid={true} style={{backgroundColor: "white", marginTop: 500, position: 'absolute'}}>
        <Container className="mb-5">
          <h1 className="text-center" style={humae}>About our Handset</h1>
              <Row className="text-center mt-5">
                <Col md="6">
                <img
                alt="huma-logo"
                className=""
                height={500}
                src={require("assets/img/ehealthpass.png").default}
                />
                <h2 style={tc}>Loading Screen</h2>
                </Col>
                <Col md="6">
                <img
                alt="huma-logo"
                className=""
                height={500}
                src={require("assets/img/huma-home.png").default}
                />
                <h2 style={tc}>Homepage Screen</h2>
                </Col>
              </Row>
            <Container fluid={true} className="text-center">
              <Nav tabs style={nav}>
                <NavItem style={navitem}>
                  <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')} style={navlink}>
                  My Humanet ID's
                  </NavLink>
                </NavItem>
                <NavItem style={navitem}>
                  <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')} style={navlink}>
                  Emergency
                  </NavLink>
                </NavItem>
                <NavItem style={navitem}>
                  <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')} style={navlink}>
                  Medical
                  </NavLink>
                </NavItem>
                <NavItem style={navitem}>
                  <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('4')} style={navlink}>
                  Travel
                  </NavLink>
                </NavItem>
                <NavItem style={navitem}>
                  <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('5')} style={navlink}>
                  Laboratory
                  </NavLink>
                </NavItem>
                <NavItem style={navitem}>
                  <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('6')} style={navlink}>
                  X-ray
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <p style={tc}>
                    <UncontrolledCarousel
                      items={[
                        {
                          altText: 'Slide 1',
                          caption: 'My Humanet ID',
                          key: 1,
                          src: 'https://picsum.photos/id/123/1200/300'
                        },
                        {
                          altText: 'Slide 2',
                          caption: 'My Humanet ID',
                          key: 2,
                          src: 'https://picsum.photos/id/456/1200/300'
                        },
                        {
                          altText: 'Slide 3',
                          caption: 'My Humanet ID',
                          key: 3,
                          src: 'https://picsum.photos/id/678/1200/300'
                        }
                      ]}
                    />
                  </p>
                </TabPane>
                <TabPane tabId="2">
                <p style={tc}>
                    <UncontrolledCarousel
                      items={[
                        {
                          altText: 'Slide 1',
                          caption: 'Emergency',
                          key: 1,
                          src: 'https://picsum.photos/id/123/1200/300'
                        },
                        {
                          altText: 'Slide 2',
                          caption: 'Emergency',
                          key: 2,
                          src: 'https://picsum.photos/id/456/1200/300'
                        },
                        {
                          altText: 'Slide 3',
                          caption: 'Emergency',
                          key: 3,
                          src: 'https://picsum.photos/id/678/1200/300'
                        }
                      ]}
                    />
                  </p>
                </TabPane>
                <TabPane tabId="3">
                <p style={tc}>
                    <UncontrolledCarousel
                      items={[
                        {
                          altText: 'Slide 1',
                          caption: 'Medical',
                          key: 1,
                          src: 'https://picsum.photos/id/123/1200/300'
                        },
                        {
                          altText: 'Slide 2',
                          caption: 'Medical',
                          key: 2,
                          src: 'https://picsum.photos/id/456/1200/300'
                        },
                        {
                          altText: 'Slide 3',
                          caption: 'Medical',
                          key: 3,
                          src: 'https://picsum.photos/id/678/1200/300'
                        }
                      ]}
                    />
                  </p>
                </TabPane>
                <TabPane tabId="4">
                <p style={tc}>
                    <UncontrolledCarousel
                      items={[
                        {
                          altText: 'Slide 1',
                          caption: 'Travel',
                          key: 1,
                          src: 'https://picsum.photos/id/123/1200/300'
                        },
                        {
                          altText: 'Slide 2',
                          caption: 'Travel',
                          key: 2,
                          src: 'https://picsum.photos/id/456/1200/300'
                        },
                        {
                          altText: 'Slide 3',
                          caption: 'Travel',
                          key: 3,
                          src: 'https://picsum.photos/id/678/1200/300'
                        }
                      ]}
                    />
                  </p>
                </TabPane>
                <TabPane tabId="5">
                <p style={tc}>
                    <UncontrolledCarousel
                      items={[
                        {
                          altText: 'Slide 1',
                          caption: 'Laboratory',
                          key: 1,
                          src: 'https://picsum.photos/id/123/1200/300'
                        },
                        {
                          altText: 'Slide 2',
                          caption: 'Laboratory',
                          key: 2,
                          src: 'https://picsum.photos/id/456/1200/300'
                        },
                        {
                          altText: 'Slide 3',
                          caption: 'Laboratory',
                          key: 3,
                          src: 'https://picsum.photos/id/678/1200/300'
                        }
                      ]}
                    />
                  </p>
                </TabPane>
                <TabPane tabId="6">
                <p style={tc}>
                    <UncontrolledCarousel
                      items={[
                        {
                          altText: 'Slide 1',
                          caption: 'X-ray',
                          key: 1,
                          src: 'https://picsum.photos/id/123/1200/300'
                        },
                        {
                          altText: 'Slide 2',
                          caption: 'X-ray',
                          key: 2,
                          src: 'https://picsum.photos/id/456/1200/300'
                        },
                        {
                          altText: 'Slide 3',
                          caption: 'X-ray',
                          key: 3,
                          src: 'https://picsum.photos/id/678/1200/300'
                        },
                        {
                          altText: 'Slide 3',
                          caption: 'X-ray',
                          key: 3,
                          src: 'https://picsum.photos/id/678/1200/300'
                        }
                      ]}
                    />
                  </p>
                </TabPane>
              </TabContent>
              {/* download now */}
              <Row className="text-center mt-5">
                <Col md="6">
                <img
                alt="huma-logo"
                className=""
                height={500}
                src={require("assets/img/handphone.png").default}
                />
                </Col>
                <Col md="6">
                <h2 style={dl}>Download the App now!</h2>
                <img
                alt="huma-logo"
                className=""
                height={300}
                src={require("assets/img/qr.png").default}
                />
                </Col>
              </Row>
            </Container>
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
  fontSize: '40px',
  fontWeight: 'bolder',
  marginTop: 200, 
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)'
}

const humae ={
  fontSize: '50px',
  color: '#1f2251',
  fontWeight: 'bolder',
}

const tc={
  color: '#1f2251',
}

const dl={
  fontSize: '50px',
  fontWeight: 'bolder',
  color: '#1f2251',
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