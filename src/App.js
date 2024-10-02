import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import styled from 'styled-components';
import CocktailList from './components/CocktailList';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Header>
          <Logo src="/images/logo_white.png" alt="Logo" /> {/* Replace text with image */}
          <Nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/classics">Classic Cocktails</Link></li>
              <li><Link to="/ivy">Ivy Cocktails</Link></li>
            </ul>
          </Nav>
        </Header>

        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classics" element={<CocktailList type="classics" />} />
            <Route path="/ivy" element={<CocktailList type="ivy" />} />
          </Routes>
        </MainContent>
      </div>
    </Router>
  );
};

// Styled components

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: 60px;
  background-color: #333;
  color: white;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  height: 40px;  /* Set the height of the logo image */
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    margin-right: 20px;
  }

  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const MainContent = styled.div`
  padding: 80px 20px;
`;

export default App;
