import React, { useState } from 'react';
import CocktailCard from './CocktailCard';
import CocktailModal from './CocktailModal';
import styled from 'styled-components';
import classicData from '../data/classics.json';
import ivyData from '../data/ivy.json';

const CocktailList = ({ type }) => {
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const cocktails = type === 'classics' ? classicData : ivyData;

  const handleCardClick = (cocktail) => {
    setSelectedCocktail(cocktail);
  };

  const handleCloseModal = () => {
    setSelectedCocktail(null);
  };

  const [searchTerm, setSearchTerm] = useState('');
  const filteredCocktails = cocktails.filter(cocktail =>
    cocktail.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <SearchBarContainer>
        <SearchInput
          type="text"
          placeholder="Search cocktails..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchBarContainer>

      <CocktailGrid>
        {filteredCocktails.map((cocktail, index) => (
          <CocktailCard
            key={index}
            name={cocktail.name}
            image={cocktail.image}
            ingredients={cocktail.ingredients}
            onClick={() => handleCardClick(cocktail)}
          />
        ))}
      </CocktailGrid>

      {selectedCocktail && (
        <CocktailModal
          cocktail={selectedCocktail}
          onClose={handleCloseModal}
        />
      )}
    </Container>
  );
};

// Styled Components

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  padding-left: 20px;
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 10px 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 25px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #666;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
  }
`;

const CocktailGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  padding-left: 20px;
`;

export default CocktailList;
