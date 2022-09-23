import React from 'react';
import styled from 'styled-components';
import style from '@/styles/_vars';

const StyledFooter = styled.section`
    align-items: center;
    background: ${style.color.red};
    color: ${style.color.white};
    font-weight: 600;
    display: block;
    text-align: center;
    padding: 10px 20px;
    width: 100%;
    margin: 50px auto 0 auto;

    ul li {
        display: inline-block;
        margin-right: 32px;
    }

    ul li:last-child {
        margin-right: 0;
    }
`;

const Footer = () => {
	return (<StyledFooter>
		<p>
                Desenvolvido por GFernandes.
		</p>
	</StyledFooter>);
};

export default Footer;