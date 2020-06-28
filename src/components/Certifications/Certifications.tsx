import React from 'react';
import Container from 'components/Container';
import './Certifications.scss';

const Certifications: React.FC = () => {
  return (
    <Container>
      <div className="certifications__container">
        <div className="certifications__header">My Certifications</div>
        <div className="certifications__text">My name is Brandon.</div>
      </div>
    </Container>
  );
};

export default Certifications;
