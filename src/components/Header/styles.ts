import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 6.5rem;
  padding: 2rem 10rem;
  font-family: "Roboto", sans-serif;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 1rem;
  }

  @media (max-width: 1200px) {
    padding: 2rem 4rem;
  }

  @media (max-width: 600px) {
    padding: 2rem 2rem;
  }
`;

export const LocationSpan = styled.span`
  background: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme.purple};

  font-weight: 500;
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme["purple-dark"]};
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
