import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '@/assets/img/logo.svg';
import styled from 'styled-components';
import style from '@/styles/_vars';
import bp from '@/styles/_breakpoints';
import Burger from './Burger';
import routes from '@/_routes';

const Nav = memo(styled.nav`
    position: relative;
    top: 0;
	padding: 0 ${style.hPadding};
	width: 100%;
	height: 65px;
	border-bottom: 2px solid #f1f1f1;
	display: flex;
	justify-content: space-between;
	z-index: 99;
	background-color: ${style.color.white};

	&.fixed{
		position: fixed;
	}

	@media (max-width: ${bp.mobile}) {
		padding: 2px ${style.hPadding_mobile};

		.logo {
			margin-top: 0px;
			padding-letf: 20px
		}
	}
	@media (min-width: ${bp.desktop_xsm}) and (max-width: ${bp.desktop_sm}) {
		padding: 0 ${style.hPadding_sm};

	}
	@media (min-width: ${bp.desktop_sm}) and (max-width: ${bp.desktop_md}) {
		padding: 0px ${style.hPadding_md};
	}

	.logo {
		margin-top: 5px;
	}
`);

const Navbar = () => {

	const [offset, setOffset] = useState(0);

	useEffect(() => {
		const onScroll = () => setOffset(window.pageYOffset);

		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<Nav className={offset > 0? 'fixed': ''}>
			<Link to={routes[0].to} className='logo'>
				<Logo />
			</Link>
			<Burger />
		</Nav>
	);
};

export default memo(Navbar);
