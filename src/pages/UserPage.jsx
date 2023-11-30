import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { PencilFill } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

function Userpage() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Container className="content min-vh-100">
        <Row>
          <Col md={9}>
            <Card style={{ height: "400px" }} className="shadow-sm">
              <Card className="p-3 profile-header">
                <Row>
                  <Col md={4}>
                    <Image
                      src="https://placekitten.com/200/200"
                      roundedCircle
                      fluid
                      className="border border-5 d-inline-block"
                    />
                  </Col>
                  <Col md={8}></Col>
                </Row>
              </Card>
              <div className="px-3">
                <h2 className="mb-0 name">
                  John Doe{" "}
                  <a href="/userupdate">
                    {" "}
                    <PencilFill size={23} className="text-secondary" />
                  </a>
                </h2>
                <p className="text-muted">Software Developer</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tristique ultrices felis, nec facilisis justo.
                </p>
              </div>
              {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
              </Button> */}
            </Card>
            <Row className="mt-4">
              <Col>
                <h3>Experience</h3>
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Title>Software Developer</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Company Name - City, Country
                    </Card.Subtitle>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed tristique ultrices felis, nec facilisis justo.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <h3>Education</h3>
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Title>University Name</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Degree - Field of Study
                    </Card.Subtitle>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed tristique ultrices felis, nec facilisis justo.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="my-4">
              <Col>
                <h3>Skills</h3>
                <Card className="shadow-sm">
                  <Card.Body>
                    <ul>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>Node.js</li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <Card className="p-2 shadow-sm">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                mollitia voluptatum, facere itaque optio harum temporibus odio
                autem impedit praesentium qui iusto sequi natus maxime. Odio
                dolor maxime commodi dolore!
              </p>
            </Card>
            <Card className="p-2 mt-2 shadow-sm">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                mollitia voluptatum, facere itaque optio harum temporibus odio
                autem impedit praesentium qui iusto sequi natus maxime. Odio
                dolor maxime commodi dolore!
              </p>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}

export default Userpage;