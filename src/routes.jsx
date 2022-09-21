import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import DefaultPage from '@/components/DefaultPage';
import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import About from './pages/About';
import Footer from './components/Footer';

export default function AppRouter() {
    return(
        <main>
            <Router>
            <NavigationBar />
                <Routes>
                    <Route path='/' element={<DefaultPage />} > //nested routes
                        <Route index element={<Home />} />
                        <Route path='home' element={<Home />} />
                        <Route path='menu' element={<Menu />} />
                        <Route path='about' element={<About />} />
                    </Route>
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}