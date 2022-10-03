import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';
import bp from '@/styles/_breakpoints';

export interface Props {
 open: boolean;
}

const StyledDiv = styled.div`
  @media (max-width: ${bp.mobile}) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 20;
  }
`;

const StyledBurger = styled.div<Props>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 20px;
  right: 30px;
  z-index: 20;
  display: none;

  @media (max-width: ${bp.mobile}) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;

    z-index: 20;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
	const [open, setOpen] = useState(false);
  
	return (
		<StyledDiv>
			<StyledBurger open={open} onClick={() => setOpen(!open)}>
				<div />
				<div />
				<div />
			</StyledBurger>
			<RightNav open={open}/>
		</StyledDiv>
	);
};

export default Burger;