import React from 'react';
import Contactolista from './components/Contactoslista';

const App: React.FC = () => {
  return (
    <div>
      <h1>Agenda de Contactos</h1>
      <Contactolista />
    </div>
  );
};

export default App;