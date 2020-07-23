import React, { useState } from 'react';
import './App.css';
import Registration from './components/auth/Registration';
import DashboardNavBar from './components/DashboardNavBar';

function App() {
  const [test, setTest] = useState(0);
  return (
    <div className="App">
      <DashboardNavBar></DashboardNavBar>
      <div class="background">
        <Registration></Registration>
      </div>
    </div>
  );
}

export default App;
