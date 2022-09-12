import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './pages/Menu'
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';

import './index.css';
import 'normalize.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavigationBar/>
    <Header>A casa da Massa</Header>
    <Menu />
    <Footer />
  </React.StrictMode>
);
