// src/components/BusinessPartnership.js
import React from 'react';
import styled from 'styled-components';
//import partnershipImage from '../../assets/images/path-to-image-2.jpg'; // Adjust the path accordingly

// import Image2 from '../assets/images/path-to-image-2.jpg';

//import Image2 from '../assets/images/path-to-image-2.jpg';
import partnershipImage from '../assets/images/path-to-image-2.jpg';



const PartnershipSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5% 10%;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled.div`
  max-width: 50%;
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.h2};
  }
  p {
    margin: 1rem 0;
  }
  button {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const Image = styled.img`
  max-width: 40%;
  height: auto;
`;

const BusinessPartnership = () => (
  <PartnershipSection id="business-partnership">
    <Content>
      <h2>Partner With Us</h2>
      <p>Collaborate with us to achieve extraordinary results together.</p>
      <button>Read More</button>
    </Content>
    <Image src={partnershipImage} alt="Business Partner " />
  </PartnershipSection>
);

export default BusinessPartnership;
