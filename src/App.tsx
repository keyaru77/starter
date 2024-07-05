import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as Pages from './pages/_index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pages.HomePage />} />
        <Route path="/watch/:endpoint" element={<Pages.WatchPage />} />
        <Route path="/hello-world" element={<Pages.HelloWorldPage />} />
      </Routes>
    </Router>
  );
}

export default App;
