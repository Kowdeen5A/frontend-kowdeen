
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';

const CompanyProfile = () => {
  
  const companyDetails = {
    name: 'Tech Co.',
    industry: 'Technology',
    location: 'City A',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    website: 'https://www.techco.com',
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <h2 className="mb-4">{companyDetails.name}</h2>
          <Card className="mb-3">
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">{companyDetails.industry}</Card.Subtitle>
              <Card.Text>
                <strong>Location:</strong> {companyDetails.location}
              </Card.Text>
              <Card.Text>
                <strong>Description:</strong> {companyDetails.description}
              </Card.Text>
              <Card.Text>
                <strong>Website:</strong>{' '}
                <a href={companyDetails.website} target="_blank" rel="noopener noreferrer">
                  {companyDetails.website}
                </a>
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
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyProfile;
