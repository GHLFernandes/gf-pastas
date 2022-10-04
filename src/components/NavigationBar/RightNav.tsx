import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import style from '@/styles/_vars';
import bp from '@/styles/_breakpoints';
import routes from '@/_routes';


export interface Props {
  open: boolean;
 }

const List = styled.ul<Props>`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    margin-top: 2px;

    li {
      padding: 18px 10px;
    }


    @media (max-width: ${bp.mobile}) {
      flex-flow: column nowrap;
      background-color: ${style.color.red};
      position: fixed;
      transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
      top: 0;
      right: 0;
      padding: 0;
      height: 100vh;
      width: 200px;
      padding-top: 4.5rem;
      margin-top: 0;
      transition: transform 0.3s ease-in-out;
      
      li {
        color: ${style.color.white};
        padding-left: 18px;

        &:hover {
          background-color: ${style.color.red_dark};
        }
      }
    }
`;

const StyledLink = styled.li`

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

    @media (max-width: ${bp.mobile}) {
        a {
            color: ${style.color.white};
            cursor: pointer;
            font-size: 24px;
            font-weight: 600;
            text-decoration: none;
            transition: .2s ease;
            
            &:hover {
              color: ${style.color.white};
            }
          }
    }
`;

const RightNav = ({ open }: {open: boolean}) => {

	const [ isOpen, setIsOpen ] = useState(open);

	useEffect(() => {
		setIsOpen(open);
	}, [open]);

	const handleBurguer = () => {
		setIsOpen(!open);
	};

	return (
		<List open={isOpen}>
			{routes.map((route, index) => 
				(
					<StyledLink key={index}>
						<Link to={route.to} onClick={handleBurguer}>
							{route.label}
						</Link>
					</StyledLink>
				)
			)}
		</List>
	);
};

export default RightNav;