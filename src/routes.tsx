import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Home = lazy(() => import('@/pages/Home'));
const Menu = lazy(() => import('@/pages/Menu'));
const About = lazy(() => import('@/pages/About'));
const DefaultPage = lazy(() => import('@/components/DefaultPage'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const Food = lazy(() => import('@/pages/Food'));

export default function AppRouter() {
	return(
		<main className='container'>
			<Router>
				<ScrollToTop />
				<NavigationBar />
				<Suspense fallback={<p> Carregando...</p>}>
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
				</Suspense>
				<Footer />
			</Router>
		</main>
	);
}