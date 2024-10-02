import React from 'react';
import styled from 'styled-components';

const CocktailModal = ({ cocktail, onClose }) => {
  // Function to close the modal when clicking outside the modal content
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();  // Close modal if clicking on the background (overlay)
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>  {/* Add the click handler here */}
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ModalImage src={cocktail.image} alt={cocktail.name} />
        <h2>{cocktail.name}</h2>
        <p><strong>Ingredients:</strong></p>
        <ul>
          {cocktail.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p><strong>Glassware:</strong> {cocktail.glassware}</p>
        <p><strong>Ice:</strong> {cocktail.ice}</p>
        <p><strong>Garnish:</strong> {cocktail.garnish}</p>
        <p><strong>Method:</strong> {cocktail.method}</p>
      </ModalContent>
    </ModalOverlay>
  );
};

// Styled Components for Modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);  /* Blurred background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  text-align: left;
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  cursor: pointer;
  color: black;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default CocktailModal;
