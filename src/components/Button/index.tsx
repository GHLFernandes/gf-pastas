import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
    border-radius: 4px;
    background: #2B7DE9;
    color: white;
    padding: 12px;
`;

export default function Button() {
  return (
    <StyledBtn>Botão</StyledBtn>
  )
}
