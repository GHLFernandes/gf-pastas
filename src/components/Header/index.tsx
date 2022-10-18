import React, { memo } from 'react';
import styled from 'styled-components';
import HeadImg from '@/assets/img/menu/header.png';
import style from '@/styles/_vars';
import bp from '@/styles/_breakpoints';

const StyledHeader = memo(styled.header`
  background-image: url(${HeadImg});
  background-size: cover;
  background-repeat: no-repeat;
  display:flex;
  align-items: center;
  width: 100%;
  height: 300px;
  padding: 0 ${style.hPadding};
  position: relative;

  ::before {
    position: absolute;
    top: 0;
    left: -75%;
    z-index: 2;
    display: block;
    content: '';
    width: 50%;
    height: 100%;
    background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
    background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
    -webkit-transform: skewX(-25deg);
    transform: skewX(-25deg);
  }
  :hover::before {
    -webkit-animation: shine 1.5s;
    animation: shine 1.5s;
  }
  @-webkit-keyframes shine {
    100% {
      left: 125%;
    }
  }
  @keyframes shine {
    100% {
      left: 125%;
    }
  }

  @media (max-width: ${bp.desktop_xsm}) {
    padding: 0px ${style.hPadding_mobile};
  }
  @media (min-width: ${bp.desktop_xsm}) and (max-width: ${bp.desktop_sm}) {
    padding: 0px ${style.hPadding_sm};
  }
  @media (min-width: ${bp.desktop_sm}) and (max-width: ${bp.desktop_md}) {
    padding: 0px ${style.hPadding_md};
  }
`);

const HeaderText = memo(styled.div`
  color: white;
  font-size: 4.5rem;
  min-width: 400px;
  width: 40%;
`);

function Header({children} : {children: string}) {
	return (
		<StyledHeader>
			<HeaderText>
				{children}
			</HeaderText>
		</StyledHeader>
	);
}

export default memo(Header);