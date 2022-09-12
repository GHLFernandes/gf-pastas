import React from 'react'
import { CgSearch } from 'react-icons/cg';
import styled from 'styled-components';
import style from '../../../styles/_vars';
import bp from '../../../styles/_breakpoints';

interface Props{
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

const StyledSearcher = styled.div`
  align-items: center;
  background-color: ${style.color.grey};
  border-radius: 5px;
  display: flex;
  gap: 18px;
  height: 42px;
  justify-content: space-between;
  padding: 0 15px;
  width: 400px;

  @media (max-width: ${bp.mobile}) {
    width: 100%;
  }
`;

const Search = styled.input`
  background-color: ${style.color.grey};
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  outline: none;
  width: 100%;

  &::placeholder {
    color: #4c4d5e;
  } 
`;

export default function Searcher({search, setSearch}: Props) {
  return (
    <StyledSearcher>
        <Search
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
            placeholder="Buscar..."
        />
        <CgSearch size="20" color="#4C4D5E"/>
    </StyledSearcher>
  )
}
