import React, { useState } from 'react';
import styled from 'styled-components';

const CreateCocktail = ({ onSave }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [method, setMethod] = useState('');
  const [glassware, setGlassware] = useState('');
  const [ice, setIce] = useState('');
  const [garnish, setGarnish] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result); // Base64-encoded image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCocktail = {
      name,
      image,
      ingredients: ingredients.split('\n'),
      method,
      glassware,
      ice,
      garnish,
    };
    onSave(newCocktail);
    setName('');
    setImage('');
    setIngredients('');
    setMethod('');
    setGlassware('');
    setIce('');
    setGarnish('');
  };

  return (
    <FormContainer>
      <h2>Create a New Cocktail</h2>
      <Form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Upload Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </label>
        {image && <ImagePreview src={image} alt="Cocktail preview" />}
        <label>
          Ingredients (one per line):
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="5"
          ></textarea>
        </label>
        <label>
          Method:
          <div>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="">Select Method</option>
              <option value="Stirred">Stirred</option>
              <option value="Shaken">Shaken</option>
              <option value="Blended">Blended</option>
              <option value="Built">Built</option>
            </select>
            <input
              type="text"
              placeholder="Custom Method"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            />
          </div>
        </label>
        <label>
          Glassware:
          <div>
            <select
              value={glassware}
              onChange={(e) => setGlassware(e.target.value)}
            >
              <option value="">Select Glassware</option>
              <option value="Martini">Martini</option>
              <option value="Coupe">Coupe</option>
              <option value="Nick and Nora">Nick and Nora</option>
              <option value="Goblet">Goblet</option>
              <option value="Highball">Highball</option>
              <option value="Rocks">Rocks</option>
              <option value="Hurricane">Hurricane</option>
              <option value="Wine">Wine</option>
              <option value="Provence ">Provence</option>
              <option value="Latte">Latte</option>
              <option value="Irish Coffee">Irish Coffee</option>
            </select>
          </div>
        </label>
        <label>
          Ice:
          <div>
            <select
              value={ice}
              onChange={(e) => setIce(e.target.value)}
            >
              <option value="">Select Ice</option>
              <option value="None">None</option>
              <option value="Cubed">Cubed</option>
              <option value="Crushed">Crushed</option>
            </select>
          </div>
        </label>
        <label>
          Garnish:
          <input
            type="text"
            value={garnish}
            onChange={(e) => setGarnish(e.target.value)}
          />
        </label>
        <button type="submit">Save Cocktail</button>
      </Form>
    </FormContainer>
  );
};

// Styled Components
const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 15px;
    font-weight: bold;
  }

  select,
  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  div {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }

  button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #333;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #555;
    }
  }
`;

const ImagePreview = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  margin: 10px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export default CreateCocktail;
