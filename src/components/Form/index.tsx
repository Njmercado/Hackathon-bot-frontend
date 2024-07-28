// src/components/Form.jsx
import { useState } from 'react';
import axios from 'axios';
import Prediction from '../Prediction';

const Form = () => {
  const [text, setText] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/predict', { text });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Texto:</label>
          <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {prediction !== null && <Prediction prediction={prediction} />}
    </div>
  );
};

export default Form;
