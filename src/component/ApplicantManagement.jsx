
import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { Eye, Pencil, Trash } from 'react-bootstrap-icons';

const ApplicantManagement = () => {

  const applicants = [
    { id: 1, name: 'John Doe', position: 'Software Developer' },
    { id: 2, name: 'Jane Smith', position: 'UI/UX Designer' },

  ];

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2 className="mb-4">Applicant Management</h2>
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Position</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((applicant) => (
                <tr key={applicant.id}>
                  <td>{applicant.id}</td>
                  <td>{applicant.name}</td>
                  <td>{applicant.position}</td>
                  <td>
                    {/* Link to view applicant details */}
                    <Link to={`/company/applicants/${applicant.id}`}>
                      <Button variant="primary" className="me-2">
                        <Eye size={18} />
                      </Button>
                    </Link>
                    {/* Implement CRUD actions for managing applicants */}
                    <Button variant="warning" className="me-2">
                      <Pencil size={18} />
                    </Button>
                    <Button variant="danger">
                      <Trash size={18} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ApplicantManagement;
