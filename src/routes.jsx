import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import DefaultPage from '@/components/DefaultPage';
import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import About from './pages/About';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

export default function AppRouter() {
	return(
		<main className='container'>
			<Router>
				<NavigationBar />
				<Routes>
					<Route path='/' element={<DefaultPage />} >
						<Route index element={<Home />} />
						<Route path='home' element={<Home />} />
						<Route path='menu' element={<Menu />} />
						<Route path='about-us' element={<About />} />
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	);
}