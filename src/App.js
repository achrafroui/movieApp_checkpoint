import React from 'react';

import './App.css';
import Card from './Component/MovieCard' ;

function App() {
 
  return (
    <div className="App">
      <header style={{ 
          fontWeight:700,
          fontFamily: 'Times New Roman',
          fontSize:"80px",
          backgroundColor: "hsl(0, 100%, 30%)",
          paddingBottom: "30px",
          color: "white",
          paddingTop: "40px",
          marginBottom: "80px",}}>Movie App checkpoint </header>
    <Card></Card>
    </div>
    )
  
}

export default App;
