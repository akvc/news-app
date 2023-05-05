import React from 'react';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import { auth } from './firebaseConfig';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { Navbar } from './components/Navbar/Navbar';
import { LoginPage } from './components/LoginPage/LoginPage';
import { RegisterPage } from './components/RegisterPage/RegisterPage';
import { UserPage } from './components/UserPage/UserPage';
import { onAuthStateChanged } from 'firebase/auth';
import { BookmarksPage } from './components/BookmarksPage/BookmarksPage';

function App() {
  const [signedIn, setSignedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  });

  return (
    <div className="App ">
      <BrowserRouter>
        <Navbar signedIn={signedIn} setSignedIn={setSignedIn} />
        <Routes>
          <Route path="/" element={<HomePage signedIn={signedIn} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserPage signedIn={signedIn} />} />
          <Route
            path="/bookmarks"
            element={<BookmarksPage signedIn={signedIn} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
