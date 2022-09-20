import React from 'react';
import styled from 'styled-components';
import style from '@/styles/_vars';

const Text = styled.h3`
    font-size: 2rem;
    margin-bottom: 30px;
    color: ${style.color.dark}
`;

export default function PageTitle({children} : {children:string}) {
	return (
		<section>
			<Text>
				{children}
			</Text>
		</section>
	);
}
