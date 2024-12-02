import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeContainer>
      <h1>Welcome to JIM'S</h1>
      <p>Explore our collection of classic and Ivy cocktails.</p>
      <ButtonContainer>
        <StyledLink to="/classics">Classic Cocktails</StyledLink>
        <StyledLink to="/ivy">Ivy Cocktails</StyledLink>
        <StyledLink to="/profile">Add your own</StyledLink>
      </ButtonContainer>
    </HomeContainer>
  );
};

// Styled Components
const HomeContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  margin: 0 10px;
  text-decoration: none;
  border-radius: 4px;
  &:hover {
    background-color: #555;
  }
`;

export default Home;
