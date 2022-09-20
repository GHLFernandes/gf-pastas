import React from 'react';
import items from '@/data/menu.json';
import styled from 'styled-components';
import style from '@/styles/_vars';
import bp from '@/styles/_breakpoints';

type Props = typeof items[0];

const StyledItem = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    border-bottom: 1px solid ${style.color.grey};

`;

const Image = styled.div`
    min-width: 240px;
    margin: 0 auto;
    text-align: center;
    align-self: center;
    
    @media (max-width: ${bp.desktop_xsm}) {
        width: 100%;
    }

    img {
        border-radius: 8px;
        width: 100%;
    }
`;

const Description = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 20px;
    
    @media (max-width: ${bp.desktop_xsm}) {
        flex-direction: row;
        margin-top: 20px;
        padding: 0;
    }
`;

const Title = styled.div`
  h2 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    color: $dark-grey;
    font-size: 1.2rem;
    font-weight: 600;
    max-width: 600px;
    margin-bottom: 20px;
  }
`;

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

export default function Item(props : Props) {
	const {title, description, category, size, serving, price, photo} = props;
    
	return (
		<StyledItem>
			<Image>
				<img src={photo} alt={title}/>
			</Image>
			<Description>
				<Title>
					<h2>{title}</h2>
					<p>{description}</p>
				</Title>
				<Tags>
					<Type className={category.label.toLowerCase()}>
						{category.label}
					</Type>
					<Portion>
						{size}g
					</Portion>
					<Serving>
                    Serve {serving} pessoas
					</Serving>
					<Price>
                    R$ {price.toFixed(2)}
					</Price>
				</Tags>
			</Description>
		</StyledItem>
	);
}
