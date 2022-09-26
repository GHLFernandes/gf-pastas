import React from 'react';
import { useLocation } from 'react-router-dom';
import items from '@/data/menu.json';
import styled from 'styled-components';
import style from '@/styles/_vars';
import bp from '@/styles/_breakpoints';

const StyledFood = styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding: 0 ${style.hPadding_md};
`;

const Back = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 95%;
    
    button {
        background-color: transparent;
        border: none;
        color: ${style.color.red};
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: bold;
    }
`;

const Container = styled.section`
	align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Titulo = styled.h1`
	font-size: 3rem;
`;

const StyledImg = styled.div`
	width: 400px;
	img {
	border-radius: 8px;
	width: 100%;
	}
`;

const Contents = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
`;

const Description = styled.p`
	color: ${style.color.darkest_grey};
	font-size: 1.5rem;
	font-weight: bold;
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

	div {
		margin: 10px;
	  }
`;

const Category = styled.div`
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

export default function Food() {

	const { state } = useLocation();
	const { food } = state as { food: typeof items[0]};

	return (
		<StyledFood>
			<Back>
				<button >
					{'< Voltar'}
				</button>
			</Back>

			<Container>
				<Titulo>
					{food.title}
				</Titulo>
				<StyledImg>
					<img src={food.photo} alt={food.title} />
				</StyledImg>

				<Contents>
					<Description>
						{food.description}
					</Description>
					<Tags>
						<Category className={food.category.label.toLowerCase()}>
							{food.category.label}
						</Category>
						<Portion>
							{food.size}g
						</Portion>
						<Serving>
							Server {food.serving} pessoa{food.serving === 1? '' : 's'}
						</Serving>
						<Price>
							R$ {food.price.toFixed(2)}
						</Price>
					</Tags>
				</Contents>
			</Container>
		</StyledFood>

	);
}
