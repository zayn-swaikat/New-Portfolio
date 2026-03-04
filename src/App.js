import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Header from './components/Header.js';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
