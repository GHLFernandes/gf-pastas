import React, {useState, memo} from 'react';
import PageTitle from '@/components/PageTitle';
import Searcher from '@/pages/Menu/Searcher';
import Filters from './Filters';
import Sorter from './Sorter';
import Items from './Items';
import styled from 'styled-components';
import bp from '@/styles/_breakpoints';

const StyledFilter = memo(styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
  width: 100%;


  @media (max-width: ${bp.mobile}) {
	justify-content: center;
  }
`);

function Menu() {

	const [ search, setSearch ] = useState('');
	const [ filter, setFilter ] = useState<number | null>(null);
	const [ sorter, setSorter ] = useState('');
	
	return (
		<>
			<PageTitle>Cardápio</PageTitle>
			<Searcher 
				search={search} 
				setSearch={setSearch}
			/>
			<StyledFilter>
				<Filters filter={filter} setFilter={setFilter}/>
				<Sorter sorter={sorter} setSorter={setSorter}/>
			</StyledFilter>
			<Items search={search} filter={filter} sorter={sorter}/>
		</>
	);
}

export default memo(Menu);