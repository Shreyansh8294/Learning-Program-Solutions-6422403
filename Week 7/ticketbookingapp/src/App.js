import React, { useState } from 'react';
import './App.css';

function LoginButton({ onClick }) {
  return <button onClick={onClick}>Login</button>;
}

function LogoutButton({ onClick }) {
  return <button onClick={onClick}>Logout</button>;
}

function GuestGreeting() {
  return (
    <div>
      <h1>Please sign up.</h1>
      <FlightList />
    </div>
  );
}

function UserGreeting() {
  return (
    <div>
      <h1>Welcome back</h1>
      <BookTicket />
    </div>
  );
}

function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}

// Example guest view
function FlightList() {
  return (
    <ul>
      <li>Flight: AI202 - Delhi to Mumbai</li>
      <li>Flight: AI305 - Bangalore to Chennai</li>
    </ul>
  );
}

// Example user view
function BookTicket() {
  return (
    <div>
      <h2>Book Your Flight:</h2>
      <p>Flight: AI202</p>
      <button onClick={()=>{
        alert("TICKET BOOKED");
      }}>Confirm Booking</button>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  const button = isLoggedIn ? (
    <LogoutButton onClick={handleLogoutClick} />
  ) : (
    <LoginButton onClick={handleLoginClick} />
  );

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

export default App;
