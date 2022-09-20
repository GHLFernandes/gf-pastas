import React from 'react';
import NavigationBar from '@/components/NavigationBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import style from '@/styles/_vars';
import bp from '@/styles/_breakpoints';

const StyledPage = styled.div`

  padding: 15px ${style.hPadding};

  @media (max-width: ${bp.desktop_xsm}) {
    padding: 50px ${style.hPadding_mobile};
  }

  @media (min-width: ${bp.desktop_xsm}) and (max-width: ${bp.desktop_sm}) {
    padding: 50px ${style.hPadding_sm};
  }

  @media (min-width: ${bp.desktop_sm}) and (max-width: ${bp.desktop_md}) {
    padding: 50px ${style.hPadding_md};
  }

}
`;

export default function DefaultPage() {
  return (
    <>
        <NavigationBar />
        <Header>A casa da Massa</Header>

        <StyledPage>
            <Outlet />
        </StyledPage>

        <Footer />
    </>
  )
}
