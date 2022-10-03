import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '@/assets/img/logo.svg';
import styled from 'styled-components';
import style from '@/styles/_vars';
import bp from '@/styles/_breakpoints';
import Burger from './Burger';
import routes from '@/_routes';

const Nav = styled.nav`
    position: fixed;
    top: 0;
	padding: 0 ${style.hPadding};
	width: 100%;
	height: 65px;
	border-bottom: 2px solid #f1f1f1;
	display: flex;
	justify-content: space-between;
	z-index: 99;
	background-color: ${style.color.white};


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
`;

const Navbar = () => {
	return (
		<Nav>
			<Link to={routes[0].to} className='logo'>
				<Logo />
			</Link>
			<Burger />
		</Nav>
	);
};

export default Navbar;
