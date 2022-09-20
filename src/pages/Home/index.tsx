import React from 'react';
import items from '@/data/menu.json';
import styled from 'styled-components';
import style from '@/styles/_vars';

const Title = styled.h3`
  color: ${style.color.dark};
  font-size: 3rem;
  margin-bottom: 30px;
`;

const Recommended = styled.div`
  border-radius: 2px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
`;

const RecommendedItem = styled.div`

`;

const StyledImg = styled.div`
  width: 300px;
  margin-bottom: 10px;
  img {
    border-radius: 8px;
    width: 100%;
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


export default function Home() {

  let recommended = [...items];
  recommended = recommended.sort(() => 0.5 - Math.random()).splice(0,3);

	return (
		<section>
			<Title>Recomendações da cozinha</Title>
      
			<Recommended>
      {
        recommended.map(item => 
          <RecommendedItem>
            <StyledImg>
              <img src={item.photo} alt={item.title} />
            </StyledImg>
            {item.title}

            <StyledBtn>
              Ver Mais
            </StyledBtn>
          </RecommendedItem>
        )
      }
			</Recommended>
		</section>
	);
}
