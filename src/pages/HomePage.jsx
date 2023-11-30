
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Hero from '../assets/Hero.png';
import NavbarComponent from '../component/NavbarComponent';
import { jobsTerbaru } from '../Data/index'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const HomePage = () => {
  return (
    <div className="homepage w-200 min-vh-100">
      <NavbarComponent />
      <header className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4">
                Temukan <br /> <span>Lowongan Pekerjaan</span> <br /> Bersama Kami!
              </h1>
              <p className="mb-4">
                Kowdeen adalah sebuah website yang membantu pencari kerja menemukan pekerjaan yang sesuai dengan kriteria mereka. Website ini menyediakan berbagai lowongan pekerjaan dari berbagai perusahaan dan industri.
              </p>
              <Link to="/jobs" className="btn btn-danger btn-lg rounded-1 me-2" style={{ backgroundColor: "#3A8B91", borderColor: "#3A8B91", color: "#FFFFFF" }}>
                Lihat Pekerjaan
              </Link>
            </Col>
            
            
            <Col lg="6">
              <img src={Hero} alt="hero" className="w-100" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <h1 className='text-center fe-bold'>Lowongan Pekerjaan</h1>
            <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium temporibus veritatis non quia nemo numquam, magni blanditiis rerum saepe neque dolorem ipsam harum quasi ea est alias. Esse, minus laboriosam.</p>
          </Row>
          <Row>
            {jobsTerbaru.map((kelas) => (
              <Col key={kelas.id}>
                <img src={kelas.image} alt="unsplash.com" className='w-100 mb-5 rounded-top'/>
                <div className='star mb-2 px-3'>
                  <FontAwesomeIcon icon={faStar} className={kelas.star1} style={{ color: 'gold' }} />
                  <FontAwesomeIcon icon={faStar} className={kelas.star2} style={{ color: 'gold' }} />
                 <FontAwesomeIcon icon={faStar} className={kelas.star3} style={{ color: 'gold' }} />
                  <FontAwesomeIcon icon={faStar} className={kelas.star4} style={{ color: 'gold' }} />
                   <FontAwesomeIcon icon={faStarHalf} className={kelas.star5} style={{ color: 'gold' }} />
                 </div>
                 <h5 className='mb-5 px-3'>{kelas.title}</h5>
                 <div className='ket d-flex justify-content-between align-items-center px-3 pb-3'>
                 <p className='= m-0 text-primary fw-bold'>{kelas.price}</p>
                 <button className='btn btn-danger rounded-1'>{kelas.daftar}</button>
                 </div>
              </Col>
            ))}
          </Row>
          <Row>
             <Col className='text-center'>
             <Link to="/jobs" className="btn btn-danger btn-lg rounded-1 me-2" style={{ backgroundColor: "#3A8B91", borderColor: "#3A8B91", color: "#FFFFFF" }}>
                Lihat Pekerjaan
              </Link>
             <i className='fa-solid fa-chevaron-right ms-3'></i>
             </Col>       
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;