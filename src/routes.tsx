import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import About from './pages/About';
import Footer from './components/Footer';
import DefaultPage from '@/components/DefaultPage';
import NotFound from './pages/NotFound';
import Food from './pages/Food';
import ScrollToTop from './components/ScrollToTop';

export default function AppRouter() {
	return(
		<main className='container'>
			<Router>
				<ScrollToTop />
				<NavigationBar />
				<Routes>
					<Route path='/' element={<DefaultPage />} >
						<Route index element={<Home />} />
						<Route path='home' element={<Home />} />
						<Route path='menu' element={<Menu />} />
						<Route path='about-us' element={<About />} />
					</Route>
					<Route path='food/:id' element={<Food />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	);
}