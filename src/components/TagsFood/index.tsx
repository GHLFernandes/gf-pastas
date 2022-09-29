import React from 'react';
import styled from 'styled-components';
import style from '@/styles/_vars';
import bp from '@/styles/_breakpoints';
import { Food } from '@/types/Foods';

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
    max-width: 700px;

    @media (max-width: ${bp.desktop_xsm}) {
        justify-content: flex-end;
    }

    @media (max-width: ${bp.mobile}) {
        justify-content: flex-start;
    }

    div {
		margin: 10px;
	  }
`;

const Type = styled.div`
    align-items: center;
    border-radius: 2px;
    display: flex;
    font-weight: bold;
    height: 40px;
    justify-content: center;
    padding: 10px 30px;

    &.massas {
        background-color: ${style.filters.pastas};
        color: white;
    }

    &.carnes {
        background-color: ${style.filters.meats};
        color: white;
    }

    &.combos {
        background-color: ${style.filters.combos};
    }

    &.veganos {
        background-color: ${style.filters.vegans};
    }
`;

const Portion = styled.div`
    align-items: center;
    display: flex;
    font-size: 1.25rem;
    font-weight: bold;
    justify-content: center;
`;

const Serving = styled.div`
    align-items: center;
    display: flex;
    font-size: 1.25rem;
    font-weight: bold;
    justify-content: center;
`;

const Price = styled.div`
    align-items: center;
    display: flex;
    font-size: 1.25rem;
    font-weight: bold;
    justify-content: center;
    color: ${style.color.red};
    font-size: 1.7rem;
`;

export default function TagsFood({category, size, serving, price} : Food) {

	return (
		<Tags>
			<Type className={category.label.toLowerCase()}>
				{category.label}
			</Type>
			<Portion>
				{size}g
			</Portion>
			<Serving>
                Serve {serving} pessoa{serving === 1? '' : 's'}
			</Serving>
			<Price>
                R$ {price.toFixed(2)}
			</Price>
		</Tags>
	);
}
