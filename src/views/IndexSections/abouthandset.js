import React from "react";
// reactstrap components
import { Card, CardBody, CardImg, CardTitle, CardText, CardGroup, Container} from "reactstrap";

export default function Abouthandset() {
  return (
    <Container fluid={true}>
        <div className="typography-line text-center" style={{
          marginTop: 300,
          padding: 10,
        }}
        >
          <h1 style={{color: '#1d206b', fontWeight: 'bolder'}}>
            About Our Handset
          </h1>
        </div>
        <CardGroup className="text-center">
          <Card className="my-2 mx-3">
            <CardImg
              alt="huma-logo"
              height={250}
              src={require("assets/img/icon/emergency.png").default}
              style={{objectFit: 'none'}}
            />
            <CardBody>
              <CardTitle tag="h2">
              My Humanet ID's
              </CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </CardText>
              <CardText>
                <small className="text-muted">
                  Last updated 3 mins ago
                </small>
              </CardText>
            </CardBody>
          </Card>
          <Card className="my-2 mx-3">
            <CardImg
              alt="huma-logo"
              height={250}
              src={require("assets/img/icon/emergency.png").default}
              style={{objectFit: 'none'}}
            />
            <CardBody>
              <CardTitle tag="h2">
              Emergency
              </CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </CardText>
              <CardText>
                <small className="text-muted">
                  Last updated 3 mins ago
                </small>
              </CardText>
            </CardBody>
          </Card>
          <Card className="my-2 mx-3">
            <CardImg
              alt="huma-logo"
              height={250}
              src={require("assets/img/icon/emergency.png").default}
              style={{objectFit: 'none'}}
            />
            <CardBody>
              <CardTitle tag="h2">
              Medical
              </CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </CardText>
              <CardText>
                <small className="text-muted">
                  Last updated 3 mins ago
                </small>
              </CardText>
            </CardBody>
          </Card>
        </CardGroup>
        <CardGroup className="text-center">
          <Card className="my-2 mx-3">
            <CardImg
              alt="huma-logo"
              height={250}
              src={require("assets/img/icon/emergency.png").default}
              style={{objectFit: 'none'}}
            />
            <CardBody>
              <CardTitle tag="h2">
              Travel
              </CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </CardText>
              <CardText>
                <small className="text-muted">
                  Last updated 3 mins ago
                </small>
              </CardText>
            </CardBody>
          </Card>
          <Card className="my-2 mx-3">
            <CardImg
              alt="huma-logo"
              height={250}
              src={require("assets/img/icon/emergency.png").default}
              style={{objectFit: 'none'}}
            />
            <CardBody>
              <CardTitle tag="h2">
              Laboratory Test
              </CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </CardText>
              <CardText>
                <small className="text-muted">
                  Last updated 3 mins ago
                </small>
              </CardText>
            </CardBody>
          </Card>
          <Card className="my-2 mx-3">
            <CardImg
              alt="huma-logo"
              height={250}
              src={require("assets/img/icon/emergency.png").default}
              style={{objectFit: 'none'}}
            />
            <CardBody>
              <CardTitle tag="h2">
              X-ray
              </CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </CardText>
              <CardText>
                <small className="text-muted">
                  Last updated 3 mins ago
                </small>
              </CardText>
            </CardBody>
          </Card>
        </CardGroup>
    </Container>
  );
}