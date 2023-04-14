import React from 'react';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { Navbar } from './components/Navbar/Navbar';
import { LoginPage } from './components/LoginPage/LoginPage';
import { RegisterPage } from './components/RegisterPage/RegisterPage';
import { UserPage } from './components/UserPage/UserPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
