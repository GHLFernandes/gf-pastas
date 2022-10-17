import React, { memo } from 'react';
import styled from 'styled-components';

const StyledBtn = memo(styled.button`
    border-radius: 4px;
    background: #2B7DE9;
    color: white;
    padding: 12px;
`);

function Button() {
	return (
		<StyledBtn>Botão</StyledBtn>
	);
}

export default memo(Button);
