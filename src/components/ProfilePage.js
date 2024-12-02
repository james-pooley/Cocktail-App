import React, { useState } from 'react';
import CreateCocktail from './CreateCocktail';
import CocktailCard from './CocktailCard';
import CocktailModal from './CocktailModal';
import styled from 'styled-components';

const ProfilePage = () => {
  const [customCocktails, setCustomCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(null); // Track selected cocktail for modal

  const handleSaveCocktail = (newCocktail) => {
    setCustomCocktails((prev) => [...prev, newCocktail]); // Add the new cocktail to the list
  };

  const handleCardClick = (cocktail) => {
    setSelectedCocktail(cocktail); // Open the modal with the selected cocktail
  };

  const handleCloseModal = () => {
    setSelectedCocktail(null); // Close the modal
  };

  return (
    <Container>
      <h1>Your Custom Cocktails</h1>
      <CreateCocktail onSave={handleSaveCocktail} />
      <CocktailGrid>
        {customCocktails.map((cocktail, index) => (
          <CocktailCard
            key={index}
            name={cocktail.name}
            image={cocktail.image}
            ingredients={cocktail.ingredients}
            onClick={() => handleCardClick(cocktail)} // Handle card click to open modal
          />
        ))}
      </CocktailGrid>

      {/* Render modal if a cocktail is selected */}
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

const CocktailGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

export default ProfilePage;
