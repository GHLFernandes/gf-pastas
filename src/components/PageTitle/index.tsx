import React, { memo } from 'react';
import styled from 'styled-components';
import bp from '@/styles/_breakpoints';
import style from '@/styles/_vars';

const StyledSection = memo(styled.section`
	@media (max-width: ${bp.mobile}) {
		text-align: center;
	}

	@media (max-width: ${bp.desktop_xsm}) {
		text-align: center;
	}
`);

const Text = memo(styled.h3`
    font-size: 2rem;
    margin-bottom: 30px;
    color: ${style.color.dark}
`);

function PageTitle({children} : {children:string}) {
	return (
		<StyledSection>
			<Text>
				{children}
			</Text>
		</StyledSection>
	);
}

export default memo(PageTitle);
