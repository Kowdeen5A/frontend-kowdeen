import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';

const CompanyProfile = () => {
  const [newCompany, setNewCompany] = useState({
    name: '',
    industry: '',
    location: '',
    description: '',
    website: '',
  });

  const [companies, setCompanies] = useState([
    {
      name: 'Tech Co.',
      industry: 'Technology',
      location: 'City A',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      website: 'https://www.techco.com',
    },
    // Add other existing companies here
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCompany((prevCompany) => ({ ...prevCompany, [name]: value }));
  };

  const handleAddCompany = () => {
    setCompanies((prevCompanies) => [...prevCompanies, newCompany]);
    // Clear the form after adding a new company
    setNewCompany({
      name: '',
      industry: '',
      location: '',
      description: '',
      website: '',
    });
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <h2 className="mb-4">Company Profile</h2>
          {/* New Company Form */}
          <Form className="mb-3">
            <Form.Group className="mb-3" controlId="companyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter company name"
                name="name"
                value={newCompany.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="companyIndustry">
              <Form.Label>Industry</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter industry"
                name="industry"
                value={newCompany.industry}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="companyLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter location"
                name="location"
                value={newCompany.location}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="companyDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter description"
                name="description"
                value={newCompany.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="companyWebsite">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter website"
                name="website"
                value={newCompany.website}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddCompany}>
              Add Company
            </Button>
          </Form>

          {/* Existing Companies */}
          {companies.map((company, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">{company.industry}</Card.Subtitle>
                <Card.Text>
                  <strong>Location:</strong> {company.location}
                </Card.Text>
                <Card.Text>
                  <strong>Description:</strong> {company.description}
                </Card.Text>
                <Card.Text>
                  <strong>Website:</strong>{' '}
                  <a href={company.website} target="_blank" rel="noopener noreferrer">
                    {company.website}
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
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyProfile;
