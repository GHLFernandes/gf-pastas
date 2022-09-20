import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import DefaultPage from '@/components/DefaultPage';

export default function AppRouter() {
    return(
        <main>
            <Router>
                <Routes>
                    <Route path='/' element={<DefaultPage />} > //nested routes
                        <Route index element={<Home />} />
                        <Route path='home' element={<Home />} />
                        <Route path='menu' element={<Menu />} />
                    </Route>
                </Routes>
            </Router>
        </main>
    );
}