// src/components/MedicationForm.jsx
import { useState, useEffect } from 'react';

const MedicationForm = ({ currentMedication, onSave, onNavigateToChat }: any) => {
  const [medication, setMedication] = useState({ name: '', description: '', quantity: '' });

  useEffect(() => {
    if (currentMedication) {
      setMedication(currentMedication);
    }
  }, [currentMedication]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setMedication({ ...medication, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSave(medication);
    setMedication({ name: '', description: '', quantity: '' });
    onNavigateToChat();
  };

  return (
    <div className="medication-form">
      <h2>{currentMedication ? 'Editar Medicamento' : 'Agregar Medicamento'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="name" value={medication.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Descripción:</label>
          <input type="text" name="description" value={medication.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Cantidad:</label>
          <input type="number" name="quantity" value={medication.quantity} onChange={handleChange} required />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default MedicationForm;
