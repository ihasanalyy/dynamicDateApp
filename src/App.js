
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // States
  const [set, setValue] = useState(0);
  const [count, setCount] = useState(0);

  // Callback Handlers
  const setIncrementHandler = () => {
    console.log("Increment button clicked");
    setValue((prevSet) => prevSet + 1);
  };

  const setDecrementHandler = () => {
    console.log("Decrement button clicked");
    setValue((prevSet) => Math.max(prevSet - 1, 0)); // Prevent negative values
  };

  const countIncrementHandler = () => {
    console.log("Increment button clicked");
    setCount(count + set);
  };

  const countDecrementHandler = () => {
    console.log("Decrement button clicked");
    setCount((prevCount) => Math.max(prevCount - set, 0)); // Prevent negative values
  };

  // Date and Days variables
  const date = new Date().getDay();
  const todayDate = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const future = new Date();
  future.setDate(future.getDate() + count); // Calculate future date based on count
  const futureDay = future.getDay();
  const futureDate = future.getDate();
  const futureMonth = future.getMonth();
  const futureYear = future.getFullYear();

  const DaysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <button onClick={setIncrementHandler}>+</button>
        <h1>SET: {set}</h1>
        <button onClick={setDecrementHandler}>-</button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <button onClick={countIncrementHandler}>+</button>
        <h1>Count: {count}</h1>
        <button onClick={countDecrementHandler}>-</button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p>
          Aj {DaysArr[date]} {todayDate} {monthArr[currentMonth]} {currentYear} hai aur aj se {count} din ke baad {DaysArr[futureDay]} {futureDate} {monthArr[futureMonth]} {futureYear} hoga.
        </p>
      </div>
    </div>
  );
}

export default App;


