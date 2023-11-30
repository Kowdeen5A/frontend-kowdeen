
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { BriefcaseFill, Pencil, Trash } from 'react-bootstrap-icons';

const JobListings = () => {
 
  const jobListings = [
    { id: 1, title: 'Frontend Developer', company: 'Tech Co.', location: 'City A' },
    { id: 2, title: 'Backend Developer', company: 'Soft Dev', location: 'City B' },

  ];

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <h2 className="mb-4">Job Listings</h2>
          {jobListings.map((job) => (
            <Card key={job.id} className="mb-3">
              <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
                <Card.Text>{job.location}</Card.Text>
                {/* Link to view job details */}
                <Link to={`/company/jobs/${job.id}`} className="btn btn-primary me-2">
                  View Job Details
                </Link>
                {/* Add buttons for CRUD operations */}
                <Button variant="warning" className="me-2">
                  <Pencil size={18} />
                </Button>
                <Button variant="danger">
                  <Trash size={18} />
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default JobListings;
