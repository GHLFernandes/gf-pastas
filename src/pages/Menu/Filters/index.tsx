import React, {memo} from 'react';
import styled from 'styled-components';
import style from '../../../styles/_vars';
import bp from '../../../styles/_breakpoints';

import filters from './filters.json';

const StyledFilters = memo(styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin: 20px 0;
`);

const RowFilters = memo(styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin: 20px 0;

  @media (max-width: ${bp.mobile}) {
    gap: 5px;
    margin: 0 auto;
    justify-content: center;
	}
`);

const BtnFilter = memo(styled.button`
  align-items: center;
  background-color: ${style.color.grey};
  border: none;
  border-radius: 4px;
  display: flex;
  font-size: 1.25rem;
  font-weight: bold;
  height: 40px;
  justify-content: center;
  width: 150px;

  &:hover {
    cursor: pointer;
    background-color: ${style.color.grey_hover};
  }

  &.--active {
    background-color: ${style.color.blue};
    color: white;
  }s
  
`);

type IOption = typeof filters[0];

interface Props {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

function Filters(props : Props) {

	const selectFilter = (op:IOption) => {
		if(props.filter === op.id) return props.setFilter(null);
		return props.setFilter(op.id);
	};

	return (
		<StyledFilters>
			<RowFilters>
				{filters.map(op => ( 
					<BtnFilter 
						className={`${props.filter === op.id?'--active' :''}`}
						key={op.id} 
						onClick={() => selectFilter(op)}
					>
						{op.label} 
					</BtnFilter>))}
			</RowFilters>
		</StyledFilters>
	);
}

export default memo(Filters);