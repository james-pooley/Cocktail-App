import React from 'react';
import styled from 'styled-components';

const CocktailCard = ({ name, image, ingredients, onClick }) => {
  return (
    <Card onClick={onClick}>
      <ImageWrapper>
        <StyledImage src={`${image}`} alt={name} />
      </ImageWrapper>
      <CardContent>
        <CocktailName>{name}</CocktailName>
        <IngredientList>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </IngredientList>
      </CardContent>
    </Card>
  );
};

// Styled Components
const Card = styled.div`
  display: flex;  /* Flexbox to position image and text side by side */
  flex-direction: row;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f8f8f8;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  height: 180px;

  /* Set consistent width for both Ivy and Classics */
  flex-basis: 28%;  /* Use 28% width for all cards (closer to the middle ground) */
  margin-bottom: 20px;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  /* Responsive behavior */
  @media (max-width: 1200px) {
    flex-basis: 40%;  /* 2 cards per row on smaller screens */
  }

  @media (max-width: 768px) {
    flex-basis: 100%;  /* 1 card per row on mobile */
  }
`;

const ImageWrapper = styled.div`
  flex: 0 0 120px;  /* Fixed width for the image */
  height: 100%;  /* Ensure image fills the card height */
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;  /* Ensure image is properly scaled */
`;

const CardContent = styled.div`
  flex: 1;  /* Allow the content to take up the remaining space */
  padding: 15px;
  text-align: left;
  word-wrap: break-word;  /* Ensure text wraps properly */
  white-space: normal;
`;

const CocktailName = styled.h3`
  margin-bottom: 10px;
`;

const IngredientList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 13px;
`;

export default CocktailCard;
