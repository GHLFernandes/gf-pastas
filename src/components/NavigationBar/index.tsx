import React from 'react';
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

export default function NavigationBar() {
	return (
		<StyledNav>
			<Logo alt='Logo GF-Pastas'/>
		</StyledNav>
	);
}
