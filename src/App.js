import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Header from './Components/Header';
import Footer from './Components/Footer';

import { Container } from './AppStyled';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <section className="header">
          <Header />
        </section>
        <section className="body">
          <Routes />
          <Footer />
        </section>
      </Container>
    </BrowserRouter>
  );
}

export default App;
