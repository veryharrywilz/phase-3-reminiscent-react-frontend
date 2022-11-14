import './App.css';
import { useEffect, useState } from 'react';

function App() {

  useEffect(() => {
    fetch('http://localhost:9292/')
    .then(res => res.json())
    .then(data => console.log(data))
  },[])

  return (
    <div className="App">
    </div>
  );
}

export default App;
