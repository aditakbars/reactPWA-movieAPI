import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import LandingPage from "./pages/LandingPage";

// Components
import Header from "./components/header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
  .then(function(registration) {
      console.log('Service Worker registered with scope:', registration.scope);
  }).catch(function(error) {
      console.error('Service Worker registration failed:', error);
  });
}


export default App;
