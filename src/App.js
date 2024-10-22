import React, { useContext } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import Loader from './components/Loader';
import './App.css';
import { TicketProvider } from './context/TicketContext';  
import TicketContext from './context/TicketContext'; 

function App() {
  return (
    <TicketProvider> 
      <Main />
    </TicketProvider>
  );
}

const Main = () => {
  const { loading, gridData, userData } = useContext(TicketContext); 

  return (
    <div className="App">
      <Header />
      {loading ? <Loader /> : <Grid gridData={gridData} userIdToData={userData} />} 
    </div>
  );
};

export default App;
