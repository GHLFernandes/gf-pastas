import PageTitle from '@/components/PageTitle';
import React from 'react';
import styled from 'styled-components';
import home from '@/assets/img/about/casa.png';
import pasta1 from '@/assets/img/about/massa1.png';
import pasta2 from '@/assets/img/about/massa2.png';


const AboutUS = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 50px;


    p {
        font-family: 'Josefin Sans', sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: bold;
        text-align: justify;
    }

    img {
        border-radius: 5px;
        width: 100%;
      }

    
`;

const Images = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;

`;

const Image = styled.div`
    width: 500px;

    img {
        border-radius: 5px;
        width: 100%;
      }

`;

const imgs = [pasta1, pasta2];

export default function About() {

    return (
        <section>
            <PageTitle>Sobre</PageTitle>

            <AboutUS>
                <img src={home} alt="Casa GF-Pastas" />
                
                <div>
                    <p>
                        Nós do GF Pastas oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de Brasília! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
                    </p>
                    <p>
                        Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
                    </p>
                    <p>
                        Para acompanhar as massas italianas, GF Pastas possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
                    </p>
                </div>
            </AboutUS>

            <Images>
                {imgs.map((imagem, index) => (
                    <Image key={index}>
                        <img src={imagem} alt="Pasta" />
                    </Image>
                ))}
            </Images>
        </section>
    )
}
