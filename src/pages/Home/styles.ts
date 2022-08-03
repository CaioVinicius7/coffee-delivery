import styled from "styled-components";

export const HomeContainer = styled.main`
  max-width: 125rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  padding: 0 10rem;

  @media (max-width: 1200px) {
    padding: 0 4rem;
  }

  @media (max-width: 600px) {
    padding: 0 2rem;
  }

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const CoffeeListContainer = styled.section`
  display: grid;
  justify-items: center;

  grid-template-columns: repeat(6, 1fr);

  @media (max-width: 2000px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1775px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1540px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
