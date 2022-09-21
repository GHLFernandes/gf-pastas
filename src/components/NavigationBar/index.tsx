import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '@/assets/img/logo.svg';
import styled from 'styled-components';
import style from '@/styles/_vars';
import bp from '@/styles/_breakpoints';

const StyledNav = styled.nav`
padding: 20px ${style.hPadding};

   
@media (max-width: ${bp.desktop_xsm}) {
  padding: 20px ${style.hPadding_mobile};
}
@media (min-width: ${bp.desktop_xsm}) and (max-width: ${bp.desktop_sm}) {
  padding: 20px ${style.hPadding_sm};
}
@media (min-width: ${bp.desktop_sm}) and (max-width: ${bp.desktop_md}) {
  padding: 20px ${style.hPadding_md};
}
`;

const List = styled.ul`
	align-items: center;
	float: right;
    display: inline-flex;
`;

const StyledLink = styled.ul`
	list-style-type: none;
    padding: 0 20px;
   
	a {
      color: ${style.color.dark};
      cursor: pointer;
      font-size: 24px;
      font-weight: 600;
      text-decoration: none;
      transition: .2s ease;
	  
      &:hover {
        color: ${style.color.dark_grey};
      }
    }
`;

export default function NavigationBar() {
	const routes = [
		{
			label: 'Home',
			to: '/',
		},
		{
			label: 'Cardápio',
			to: '/menu',
		},
		{
			label: 'Sobre Nós',
			to: '/about-us',
		},
	];

	return (
		<StyledNav>
			<Logo/>
			<List>
				{routes.map((route, index) => 
					(
						<StyledLink key={index}>
							<Link to={route.to}>
								{route.label}
							</Link>
						</StyledLink>
					)
				)}
			</List>

		</StyledNav>
	);
}
