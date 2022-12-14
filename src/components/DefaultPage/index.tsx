import React, { memo } from 'react';
import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import style from '@/styles/_vars';
import bp from '@/styles/_breakpoints';

const StyledPage = memo(styled.div`

  padding: 15px ${style.hPadding};

  @media (max-width: ${bp.mobile}) {
    padding: 50px ${style.hPadding_mobile};
  }

  @media (min-width: ${bp.desktop_xsm}) and (max-width: ${bp.desktop_sm}) {
    padding: 50px ${style.hPadding_sm};
  }

  @media (min-width: ${bp.desktop_sm}) and (max-width: ${bp.desktop_md}) {
    padding: 50px ${style.hPadding_md};
  }

}
`);

function DefaultPage({ children } : { children?: React.ReactNode}) {
	return (
		<>
			<Header>A casa da Massa</Header>

			<StyledPage>
				<Outlet />
				{children}
			</StyledPage>
		</>
	);
}

export default memo(DefaultPage);
