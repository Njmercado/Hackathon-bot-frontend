// src/App.jsx
import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import MedicationList from './components/MedicationList';
import MedicationForm from './components/MedicationForm';
import Inventory from './components/Inventory';

import Chat from './components/Chat';
import "./App.css"
const App = () => {
  const [menu, setMenu] = useState('form');
  const [medications, setMedications] = useState<any[]>([]);
  const [currentMedication, setCurrentMedication] = useState(null);

  const handleMenuSelect = (menu:any ) => setMenu(menu);

  const handleAddOrUpdateMedication = (med:any) => {
    if (med.id) {
      setMedications(medications.map((m: any) => (m.id === med.id ? med : m)));
    } else {
      med.id = Date.now();
      setMedications([...medications, med]);
    }
    setCurrentMedication(null);
  };

  const handleEditMedication = (med: any) => {
    setCurrentMedication(med);
    setMenu('form');
  };

  const handleDeleteMedication = (id: any) => {
    setMedications(medications.filter((med) => med.id !== id));
  };  

  const handleNavigateToChat = () => {
    setMenu('chat');
  };

  return (
    <div className="app">
      <Header />
      <Sidebar onMenuSelect={handleMenuSelect} />
      <main>
        {menu === 'dashboard' && <Dashboard />}
        {menu === 'medications' && (
          <MedicationList
            medications={medications}
            onEdit={handleEditMedication}
            onDelete={handleDeleteMedication}
          />
        )}
        {menu === 'form' && (
          <MedicationForm
            currentMedication={currentMedication}
            onSave={handleAddOrUpdateMedication}
            onNavigateToChat={handleNavigateToChat}
          />
        )}
        {menu === 'inventory' && <Inventory medications={medications} />}
        {menu === 'chat' && <Chat />}
      </main>
    </div>
  );
};

export default App;