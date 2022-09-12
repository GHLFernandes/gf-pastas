import React, {useState} from 'react';
import styled from 'styled-components';
import style from '@/styles/_vars';
import options from './options.json';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface Props {
    sorter: string;
    setSorter: React.Dispatch<React.SetStateAction<string>>;
}

const BtnSorter = styled.button`
    align-items: center;
    background-color: ${style.color.grey};
    border: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    font-size: 1rem;
    font-weight: bold;
    height: 40px;
    justify-content: space-between;
    min-width: 240px;
    padding-left: 40px;
    padding-right: 15px;
    position: relative;
    
    &:hover {
        background-color: ${style.color.grey_hover};
        cursor: pointer;
    }

    &.--active {
        background-color: ${style.color.blue};
        color: white;
      }

      
`;

const SorterOptions = styled.div`
    display: none;
    position: absolute;
    left: 0;
    flex-direction: column;
    top: 100%;
    width: 100%;

    &.--active{
        display: flex !important;
    }
`;

const SorterOption = styled.div`
    align-items: center;
    background-color: ${style.color.grey};
    border-top: 2px solid ${style.color.light_grey};
    box-sizing: border-box;
    color: ${style.color.black};
    display: flex;
    height: 40px;
    justify-content: center;
    width: inherit;

    &:hover,
    &.--active {
        background-color: ${style.color.blue};
        cursor: pointer;
        color: white;
    }
`;

export default function Sorter({sorter, setSorter} : Props) {

    const [open, setOpen] = useState(false);
    const [nameSorter, setNameSorter] = useState('');

    const handleSorter = (op: typeof options[0]) => {
        setSorter(op.value);
        setNameSorter(op.name);
    }

    return (
        <BtnSorter 
            className={open?'--active':''} 
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(false)}
        >
            <span>{nameSorter || 'Ordenar por'}</span>
            {
                open?<MdKeyboardArrowUp size={20}/>: <MdKeyboardArrowDown size={20}/>
            }
            <SorterOptions 
                className={open?'--active':''}
            >
                {options.map((op) => (
                    <SorterOption 
                        key={op.value}
                        onClick={() => handleSorter(op)}
                    >
                        {op.name}
                    </SorterOption>
                ))}
            </SorterOptions>
        </BtnSorter>
    )
}
