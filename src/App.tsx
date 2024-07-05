import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WatchPage from './pages/WatchPage';
import HelloWorldPage from './pages/HelloWorldPage'; // Import halaman baru

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watch/:endpoint" element={<WatchPage />} />
        <Route path="/hello-world" element={<HelloWorldPage />} /> {/* Tambahkan rute baru */}
      </Routes>
    </Router>
  );
}

export default App;
