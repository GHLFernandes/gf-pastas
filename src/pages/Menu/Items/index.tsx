import React, {useState, useEffect, memo} from 'react';
import Item from './Item';
import items from '@/data/menu.json';
import styled from 'styled-components';
import bp from '@/styles/_breakpoints';
import { Menu } from '@/types/Foods';

interface Props {
  search: string;
  filter: number | null;
  sorter: string;
}

const StyledItems = memo(styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;

	@media (max-width: ${bp.mobile}) {
		align-content: center;
	}

	@media (min-width: ${bp.desktop_xsm}) and (max-width: ${bp.desktop_sm}) {
		align-content: center;	
	}
	@media (min-width: ${bp.desktop_sm}) and (max-width: ${bp.desktop_md}) {
		align-content: center;
		}

`);

function Items(props: Props) {

	const [ list, setList ] = useState(items);
	const { search, filter, sorter } = props;

	const handleSearch = (title: string) => {
		const regex = new RegExp(search, 'i');

		return regex.test(title);
	};

	const handleFilter = (id: number) => {
		if(filter !== null) return filter === id;
		return true;
	};

	const handleSort = (newList: Menu) => {
		switch(sorter){
		case 'portion':
			return newList.sort((a,b) => a.size > b.size ? 1 : -1);
		case 'amount_people':
			return newList.sort((a,b) => a.serving > b.serving ? 1 : -1);
		case 'price':
			return newList.sort((a,b) => a.price > b.price ? 1 : -1);
		default:
			return newList;
		}
	};

	useEffect(() => {
		const newList = items.filter(item => 
			handleSearch(item.title) && handleFilter(item.category.id));
		setList(handleSort(newList));
	}, [search, filter, sorter]);

	return (
		<StyledItems>
			{
				list.map((item) => (
					<Item key={item.id} {...item}/>
				))
			}
		</StyledItems>

	);
}

export default memo(Items);