// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/images/image1.jpg'; // Adjust the path accordingly

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5% 10%;
  height: 500px;
  background-color: white;
`;

const Content = styled.div`
  max-width: 50%;
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.h1};
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

const Hero = () => (
  <HeroSection id="work-with-us">
    <Content>
      <h2>Work With Us</h2>
      <p>Join our dynamic team and help us drive innovation and excellence.</p>
      <button>More Info</button>
    </Content>
    <Image src={heroImage} alt="Work With Us" />
  </HeroSection>
);

export default Hero;
