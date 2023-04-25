import React from 'react';
import Header from '../Header/Header';
// import FamousSection from '../FamousSection/FamousSection';
import FamousPerson from '../FamousPerson/FamousPerson'
import FamousPersonForm from '../FamousPersonForm/FamousPersonForm'
import FamousPersonList from '../FamousPersonList/FamousPersonList'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <FamousPersonList />
      {/* 
        The list shouldn't go here.
        The list goes inside of the FamousSection Component
      */}
    </div>
  );
}

export default App;
