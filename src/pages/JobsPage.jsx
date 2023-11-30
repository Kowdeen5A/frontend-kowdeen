import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import NavbarComponent from '../component/NavbarComponent';
import { semuaJobs } from '../Data/index';

const JobsPage = () => {
  return (
    <div className='jobs min-vh-100'>
      <NavbarComponent />
      <Container>
        <Row className='header-box d-flex align-items-center'>
          <Col>
            <h1 className='fw-bold text-center'>Jobs</h1>
            <p className='text-center'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut totam quaerat omnis et tempore animi.
              Quidem qui quam possimus aliquid. Unde incidunt facere, illum ad numquam quaerat asperiores rem dolore.
            </p>
          </Col>
        </Row>
        <Row>
          {semuaJobs.map((kelas) => (
            <Col key={kelas.id} md={4} className='mb-4'>
              <div className='position-relative'>
                <img src={kelas.image} alt={kelas.title} className='w-100 rounded-top' style={{ height: '200px', objectFit: 'cover' }} />
              </div>
              <div className='star mb-2 px-3'>
                <FontAwesomeIcon icon={faStar} className={kelas.star1} style={{ color: 'gold' }} />
                <FontAwesomeIcon icon={faStar} className={kelas.star2} style={{ color: 'gold' }} />
                <FontAwesomeIcon icon={faStar} className={kelas.star3} style={{ color: 'gold' }} />
                <FontAwesomeIcon icon={faStar} className={kelas.star4} style={{ color: 'gold' }} />
                <FontAwesomeIcon icon={faStarHalf} className={kelas.star5} style={{ color: 'gold' }} />
              </div>
              <h5 className='mt-3 mb-4 px-3'>{kelas.title}</h5>
              <div className='ket d-flex justify-content-between align-items-center px-3 pb-3'>
                <p className='m-0 text-primary fw-bold'>{kelas.price}</p>
                <button className='btn btn-danger rounded-1'>{kelas.buy}</button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default JobsPage;