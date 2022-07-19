
import React from "react";

// reactstrap components

import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import bg from '../../assets/img/bg.mp4';

export default function PageHeader() {
  return (
    <div className="p-0" >
      
      <Container fluid={true}>
        <video className='videoTag' autoPlay loop muted style={videobg}>
          <source src={bg} type='video/mp4'/>
        </video>
        <div className="Wave" style={wave}>
        <svg width="100%" height="355px" viewBox="0 0 1920 355" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Apple-TV" transform="translate(0.000000, -402.000000)" fill="#FFFFFF">
              <path
                d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,757 L1017.15166,757 L0,757 L0,439.134243 Z"
                id="Path"></path>
            </g>
          </g>
        </svg>
        </div>
      </Container>
      <Container style={contain}>
          <Row>
            <Col md="7">
            <img
            alt="huma-logo"
            className=""
            height={150}
            src={require("assets/img/huma_logo.png").default}
            />
              <h2>We have re-invented the accross border health and medical exchange experience anywhere anytime</h2>
              <h4>HumaNet is a trusted, secured international platform, allawing exchange of encrypted anonymazide personal health and medical electronic records "PHMER", between enrolled travelers, accredited international health & medical providers, in partnership with recognized financial and insurance institutions.</h4>
            <Row>
              <Col md="5" style={colbutton}>
                <Button className="default" color="default" style={button}>
                <img
                alt="appstore"
                className=""
                height={20}
                src={require("assets/img/apple.png").default}
                />
                &nbsp;App Store
                </Button>
              </Col>
              <Col md="5" style={colbutton}>
                <Button className="default" color="default" style={button}>
                <img
                alt="playstore"
                className=""
                height={20}
                src={require("assets/img/playstore.png").default}
                />
                &nbsp;Google PlayStore
                </Button>
              </Col>
            </Row>
            </Col>
            <Col md="5">
            <img
            alt="huma-logo"
            className=""
            style={load}
            src={require("assets/img/ehealthpass.png").default}
            />
            <img
            alt="huma-logo"
            className=""
            style={home}
            src={require("assets/img/homeapp.png").default}
            />
            </Col>
          </Row>
      </Container>
    </div>
  );
}

const load = {
  position: 'absolute',
  height: 400,
};

const home = {
  position: 'absolute',
  height: 400,
  marginTop: 100,
  paddingLeft: 100
};

const colbutton = {
  padding: 5,
}

const button = {
  width: '85%',
  height: 60,
  display: 'inline-block',
  margin: '25px 10px',
}

const videobg = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  objectFit: 'fit',
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
}

const contain = {
  paddingTop: '100px',
  boxSizing: 'content-box',
}

const wave = {
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  left: 0,
  marginTop: 600,
}