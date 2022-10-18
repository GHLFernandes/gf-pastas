import React, { lazy, memo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import items from '@/data/menu.json';
import styled from 'styled-components';
import style from '@/styles/_vars';
import bp from '@/styles/_breakpoints';

const DefaultPage = lazy(() => import('@/components/DefaultPage'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const TagsFood = lazy(() => import('@/components/TagsFood'));

const StyledFood = memo(styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
   
`);

const Back = memo(styled.div`
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

	@media (max-width: ${bp.mobile}) {
		width: 100%;
		
	}
`);
const Container = memo(styled.section`
	align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
`);
const Titulo = memo(styled.h1`
	text-align: justify;
	font-size: 3rem;

	@media (max-width: ${bp.mobile}) {
		font-size: 2rem;
		text-align: center;
	}

`);
const StyledImg = memo(styled.div`
	width: 400px;

	img {
		border-radius: 8px;
		width: 100%;
	}

	@media (max-width: ${bp.mobile}) {
			width: 95%;
	}
`);
const Contents = memo(styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
`);
const Description = memo(styled.p`
	color: ${style.color.darkest_grey};
	font-size: 1.5rem;
	font-weight: bold;

	@media (max-width: ${bp.mobile}) {
		text-align: justify;
		font-size: 1.3rem;
	}
`);

function Food() {

	const { id } = useParams();
	const food  = items.find(item => item.id === Number(id));

	if(!food){
		return <NotFound />;
	}

	const navigate = useNavigate();
	return (
		<DefaultPage>
			<Back>
				<button onClick={(() => navigate(-1))}>
					{'< Voltar'}
				</button>
			</Back>
			<StyledFood>

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
						<TagsFood {...food}/>
					</Contents>
				</Container>
			</StyledFood>
		</DefaultPage>

	);
}

export default memo(Food);