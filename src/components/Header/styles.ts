import styled from "styled-components";
import { darken } from "polished";

interface HeaderContainerProps {
  changeColor: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  height: 6.5rem;

  z-index: 99999;

  font-family: "Roboto", sans-serif;

  background: ${(props) =>
    props.changeColor ? darken(0.02, props.theme.background) : "transparent"};

  box-shadow: ${(props) =>
    props.changeColor ? "0 0 0 0.75px rgba(0, 0, 0, 0.1)" : "transparent"};

  top: 0;
  position: sticky;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    max-width: 125rem;
    margin: 0 auto;
    padding: 2rem 10rem;

    flex: 1;

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
