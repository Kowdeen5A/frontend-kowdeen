
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';

const ApplicantDetails = () => {

  const applicantDetails = {
    id: 456,
    name: 'John Doe',
    position: 'Software Developer',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2 className="mb-4">Applicant Details</h2>
          <Row className="mb-3">
            <Col>
              <strong>ID:</strong> {applicantDetails.id}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <strong>Name:</strong> {applicantDetails.name}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <strong>Position:</strong> {applicantDetails.position}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <strong>Email:</strong> {applicantDetails.email}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <strong>Phone:</strong> {applicantDetails.phone}
            </Col>
          </Row>
          {/* Implement CRUD actions for updating applicant details */}
          <Row>
            <Col>
              <Button variant="warning" className="me-2">
                <Pencil size={18} /> Update
              </Button>
              <Button variant="danger">
                <Trash size={18} /> Delete
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ApplicantDetails;
