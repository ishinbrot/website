import React from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './Components/Layout/Layout';

const App: React.FC = () => {
  return (
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
  );
};

export default App;


