import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  const [count, setCount] = useState(0);
  const name = "TANA";

  const employees = [
    { name: "tana", email: "tana@ksu.ac.th", age: 21 },
    { name: "boy", email: "tana@ksu.ac.th", age: 40 },
    { name: "back", email: "tana@ksu.ac.th", age: 2 }
  ]

  console.log(employees);

  return (
    <>

      <div className="button-container">
        <h2>Count: {count}</h2>
        <button onClick={count} className="large-button">+1</button>
        <button onClick={setCount} className="large-button">-1</button>
      </div>

      <div className="App">
        {employees.map((em, index) => (
          <li key={index}> 
            ชื่อพนักงาน: {em.name} อีเมล: {em.email} อายุ: {em.age} 
          </li>
        ))}
        <h1>Hello {name}</h1>
        <Button text="OK" />
        <Button text="Cancel" />
      </div>
      <h2 className="test">Test</h2>
    </>
   );
}

export default App;
