import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Building, BriefcaseFill } from 'react-bootstrap-icons';
import NavbarComponent from '../component/NavbarComponent';
import BackgroundImage from '../assets/ilustrasi-format-dan-contoh-surat-lamaran-kerja-magang.jpg'; // Replace with your actual image path

const CompanyPage = () => {
  const buttonStyle = {
    backgroundColor: '#3A8B91',
    borderColor: '#3A8B91',
    color: '#FFFFFF',
  };

  const headerStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <div className="company-page">
      <NavbarComponent />
      <header style={headerStyle} className="w-100 d-flex align-items-center justify-content-center">
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col md={8}>
              <Card style={{ backgroundColor: '#EDEDED' }}>
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
                          <Link to="/company/jobs" className="btn btn-primary w-100" style={buttonStyle}>
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
                          <Link to="/company/profile" className="btn btn-primary w-100" style={buttonStyle}>
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
