import React, { memo } from 'react';
import styled from 'styled-components';
import style from '@/styles/_vars';
import bp from '@/styles/_breakpoints';
import { Food } from '@/types/Foods';

const Tags = memo(styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
    max-width: 700px;

    @media (max-width: ${bp.desktop_xsm}) {
        justify-content: flex-start;
    }

    @media (max-width: ${bp.mobile}) {
        justify-content: space-around;
    }

    div {
		margin: 10px;
	  }
`);

const Type = memo(styled.div`
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
`);

const Portion = memo(styled.div`
    align-items: center;
    display: flex;
    font-size: 1.25rem;
    font-weight: bold;
    justify-content: center;
`);

const Serving = memo(styled.div`
    align-items: center;
    display: flex;
    font-size: 1.25rem;
    font-weight: bold;
    justify-content: center;
`);

const Price = memo(styled.div`
    align-items: center;
    display: flex;
    font-size: 1.25rem;
    font-weight: bold;
    justify-content: center;
    color: ${style.color.red};
    font-size: 1.7rem;
`);

function TagsFood({category, size, serving, price} : Food) {

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

export default memo(TagsFood);