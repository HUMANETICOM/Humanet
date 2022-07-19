import React from "react";
// reactstrap components
import {Col, Container, Row, Card, CardBody, CardTitle, CardSubtitle, CardText} from "reactstrap";

export default function Scanme() {
  return (
    <Container>
        <Row className="text-center mt-5">
            <Col md="6">
            <img
            alt="huma-logo"
            className=""
            height={500}
            src={require("assets/img/ehealthpass.png").default}
            />
            </Col>
            <Col md="6">
            <img
            alt="huma-logo"
            className=""
            height={500}
            src={require("assets/img/qr.png").default}
            />
            </Col>
        </Row>
        <Row className="mt-5">
            <Col md="4">
            <Card style={{ width: '100%' }}>
            <CardBody>
                <CardTitle tag="h5">
                    01
                    </CardTitle>
                    <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h2"
                    >
                    Sign Up
                    </CardSubtitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.
                    </CardText>
                </CardBody>
            </Card>
            </Col>
            <Col md="4">
            <Card style={{ width: '100%' }}>
            <CardBody>
                <CardTitle tag="h5">
                    02
                    </CardTitle>
                    <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h2"
                    >
                    Create Profile
                    </CardSubtitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.
                    </CardText>
                </CardBody>
            </Card>
            </Col>
            <Col md="4">
            <Card style={{ width: '100%' }}>
            <CardBody>
                <CardTitle tag="h5">
                    03
                    </CardTitle>
                    <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h2"
                    >
                    Enjoy the app
                    </CardSubtitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.
                    </CardText>
                </CardBody>
            </Card>
            </Col>
        </Row>
        <Row className="logo mt-5 mb-5">
            <Col md="6">
            <img
            alt="humalogo"
            className=""
            height={500}
            src={require("assets/img/humalogo.jpg").default}
            style={{borderRadius: 75}}
            />
            </Col>
            <Col md="6">
                <h1 style={{color: '#1d206b'}}>Partnership Logo</h1>
                <p style={{color: '#1d206b'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae.</p>
            </Col>
        </Row>
    </Container>
  );
}