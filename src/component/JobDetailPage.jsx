
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Pencil, Trash, PersonFill } from 'react-bootstrap-icons';

const JobDetails = () => {

  const jobDetails = {
    id: 123,
    title: 'Frontend Developer',
    company: 'Tech Co.',
    location: 'City A',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    requirements: ['React', 'JavaScript', 'HTML', 'CSS'],
    applicants: [
      { id: 456, name: 'John Doe', experience: '2 years', status: 'Pending' },
      
    ],
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <h2 className="mb-4">{jobDetails.title}</h2>
          <Card className="mb-3">
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">{jobDetails.company}</Card.Subtitle>
              <Card.Text>
                <strong>Location:</strong> {jobDetails.location}
              </Card.Text>
              <Card.Text>
                <strong>Description:</strong> {jobDetails.description}
              </Card.Text>
              <Card.Text>
                <strong>Requirements:</strong>{' '}
                {jobDetails.requirements.map((req, index) => (
                  <span key={index} className="me-2">
                    {req}
                  </span>
                ))}
              </Card.Text>
              {/* Add buttons for CRUD operations */}
              <Button variant="warning" className="me-2">
                <Pencil size={18} />
              </Button>
              <Button variant="danger">
                <Trash size={18} />
              </Button>
            </Card.Body>
          </Card>
          <h3 className="mb-3">Applicants</h3>
          {jobDetails.applicants.map((applicant) => (
            <Card key={applicant.id} className="mb-3">
              <Card.Body>
                <Card.Title>{applicant.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <PersonFill size={18} className="me-2" />
                  {applicant.experience} Experience
                </Card.Subtitle>
                <Card.Text>Status: {applicant.status}</Card.Text>
                {/* Link to view applicant details */}
                <Link to={`/company/jobs/${jobDetails.id}/applicants/${applicant.id}`} className="btn btn-primary">
                  View Applicant Details
                </Link>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default JobDetails;
