import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



import React from 'react';
import Main from './pages/Main';
import AboutPage from './pages/AboutPage';
// import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";


const App = () => {
  return (
    <Router>
    <Routes>

    <Route path='/' element={<Main/>} />
    <Route path='about' element={<AboutPage/>} />
    <Route path='elab' element={<BlogPage/>} />
  
  </Routes>
  </Router>
  );
}

export default App;
