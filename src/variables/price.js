import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem, Card, CardBody, CardFooter, Button
  } from 'reactstrap';

const Price = () => {
  return (
    <Container>
        <Row className="mt-5 d-flex justify-content-center">
            <Col md="4">
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
            <Col md="4">
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
            <Col md="4">
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
      </Container>
  );
}

export default Price;