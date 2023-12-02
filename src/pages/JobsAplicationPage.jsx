import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavbarComponent from '../component/NavbarComponent';

const JobApplicationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState('');

  const handleApplyJob = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Resume:', resume);
    console.log('Cover Letter:', coverLetter);

    setName('');
    setEmail('');
    setPhone('');
    setResume(null);
    setCoverLetter('');
  };

  return (
    <div className="min-vh-100">
      <NavbarComponent />
      <Container>
        <Row className='header-box d-flex align-items-center'>
          <Col>
            <h2 className="mb-4">Job Application</h2>
            <Form>
              {/* Name Field */}
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              {/* Email Field */}
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              {/* Phone Field */}
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>

              {/* Resume Upload Field */}
              <Form.Group className="mb-3" controlId="formResume">
                <Form.Label>Resume (PDF only)</Form.Label>
                <Form.Control
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setResume(e.target.files[0])}
                />
              </Form.Group>

              {/* Cover Letter Field */}
              <Form.Group className="mb-3" controlId="formCoverLetter">
                <Form.Label>Cover Letter</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Write your cover letter"
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                />
              </Form.Group>

              {/* Submit Button */}
              <Button variant="primary" onClick={handleApplyJob}>
                Apply Now
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JobApplicationPage;