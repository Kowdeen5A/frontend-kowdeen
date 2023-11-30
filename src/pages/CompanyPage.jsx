import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Building, BriefcaseFill } from 'react-bootstrap-icons';
import NavbarComponent from '../component/NavbarComponent';

const CompanyPage = () => {
  return (
    <div className="company-page">
      <NavbarComponent />
      <header className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  <Building size={32} className="me-2" />
                  Company Name
                </Card.Title>
                <Row>
                  <Col md={6} className="mb-3">
                    <Card>
                      <Card.Body>
                        <Card.Title className="text-center">
                          <BriefcaseFill size={24} className="me-2" />
                          Job Listings
                        </Card.Title>
                        <Link to="/company/jobs" className="btn btn-primary w-100">
                          View Job Listings
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Card>
                      <Card.Body>
                        <Card.Title className="text-center">
                          <Building size={24} className="me-2" />
                          Company Profile
                        </Card.Title>
                        <Link to="/company/profile" className="btn btn-primary w-100">
                          View Company Profile
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </header>
    </div>
  );
};

export default CompanyPage;
