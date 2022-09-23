import React from 'react';
import { ReactComponent as NotFoundImg} from '@/assets/img/not_found.svg';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import style from '@/styles/_vars';

const StyledNotFound = styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding: 0 ${style.hPadding_md};
`;

const Back = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 95%;
    
    button {
        background-color: transparent;
        border: none;
        color: ${style.color.red};
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: bold;
    }
`;

export default function NotFound() {

	const navigate = useNavigate();

	return (
		<StyledNotFound>
			<Back>
				<button onClick={() => navigate(-1)}>
					{'< Voltar'}
				</button>
			</Back>
			<NotFoundImg />
		</StyledNotFound>
	);
}
