import React from 'react';
import styled from 'styled-components';
import style from '@/styles/_vars';
import bp from '@/styles/_breakpoints';
import TagsFood from '@/components/TagsFood';
import { Food } from '@/types/Foods';
import { useNavigate } from 'react-router-dom';

const StyledItem = styled.div`
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    transition: .2s ease-in;
    width: 90%;
    border-bottom: 1px solid ${style.color.grey};

    &:hover {
      background-color: ${style.color.grey};
    }

    @media (max-width: ${bp.mobile}) {
      padding: 20px 0;
    }

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

export default function Item(props : Food) {
	const {id, title, description, photo} = props;
  
	const navigate = useNavigate();
	return (
		<StyledItem onClick={() => navigate(`/food/${id}`)}>
			<Image>
				<img src={photo} alt={title}/>
			</Image>
			<Description>
				<Title>
					<h2>{title}</h2>
					<p>{description}</p>
				</Title>
				<TagsFood {...props}/>
			</Description>
		</StyledItem>
	);
}
