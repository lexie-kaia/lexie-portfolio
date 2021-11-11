import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// components
import App from './App';
import Fonts from './components/styles/Fonts';
import GlobalStyles from './components/styles/GlobalStyles';
import Home from './components/page/Home';
import AboutMe from './components/page/About';
import Projects from './components/page/Projects';
import NotFound from './components/page/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <Fonts />
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
