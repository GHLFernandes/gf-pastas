import React from 'react';
import items from '@/data/menu.json';
import styled from 'styled-components';
import style from '@/styles/_vars';
import PageTitle from '@/components/PageTitle';
import bannerHome from '@/assets/img/home/nossa_casa.png';
import { useNavigate } from 'react-router-dom';

const Recommended = styled.ul`
  border-radius: 2px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
  list-style: none;
  padding: 0px;
`;

const RecommendedItem = styled.li`
  padding: 10px 2%;
`;

const StyledImg = styled.div`
  width: 300px;
  margin-bottom: 10px;
  img {
    border-radius: 8px;
    width: 100%;

  &:hover {
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 3px 5px 2px 0.8px rgba(204, 204, 204, 0.7);
  }
`;

const StyledBtn = styled.div`
  background-color: ${style.color.red};
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 0;
  transition: .2s ease;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: ${style.color.red_dark};
  }
`;

const StyledUs = styled.div`
  margin-bottom: 100px;
  position: relative;
  width: 100%;

  img {
    border-radius: 5px;
    width: 100%;
  }
`;

const Address = styled.div`
  align-items: center;
  background-color: ${style.color.dark};
  border-radius: 5px;
  bottom: -45px;
  color: white;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  height: 100px;
  justify-content: center;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 200px;
`;


export default function Home() {

	let recommended = [...items];
	recommended = recommended.sort(() => 0.5 - Math.random()).splice(0,3);

	const navigate = useNavigate();

	const redirectDetails = (food: typeof items[0]) => {
		navigate(`/food/${food.id}`, {state: {food}});
	};

	return (
		<section>
			<PageTitle>Recomendações da cozinha</PageTitle>
      
			<Recommended>
				{
					recommended.map((item, index) => 
						<RecommendedItem key={index}>
							<StyledImg onClick={() => redirectDetails(item)}>
								<img src={item.photo} alt={item.title} />
							</StyledImg>

							<StyledBtn onClick={() => redirectDetails(item)} >
                Ver Mais
							</StyledBtn>
						</RecommendedItem>
					)
				}
			</Recommended>

			<PageTitle>Nossa Casa</PageTitle>

			<StyledUs>
				<img src={bannerHome} alt="GF Pastas"/>

				<Address>
          Rua Tal, 8456 <br /><br /> Brasília, DF
				</Address>
			</StyledUs>
		</section>
	);
}
