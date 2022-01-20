import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import React, { Suspense, lazy } from "react";
import Home from "../src/pages/Home"
import Popular from "../src/pages/Popular"

import './App.css';
function App() {
  return (
    <>
      <div>
        {/* <Routess /> */}
        <Router>
          <Suspense fallback={<div />}>
            {/* <Switch> */}
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/popular" element={<Popular />} />
            </Routes>
          </Suspense>
        </Router>

      </div>

    </>
  );
}

export default App;
