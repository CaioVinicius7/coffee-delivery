import styled from "styled-components";

export const CoffeeContainer = styled.div`
  display: flex;
  padding: 2rem 0;
  gap: 1rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  img {
    width: 7.5vh;
  }
`;

export const CoffeeInfos = styled.div`
  flex: 1;

  div {
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;

    span {
      font-family: "Roboto", sans-serif;
    }

    &:last-child {
      margin-top: 0.75rem;
      justify-content: flex-start;
    }
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};

  padding: 0 0.5rem;
  gap: 0.25rem;

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  color: ${(props) => props.theme.purple};

  span {
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.75rem;
  }

  &:hover {
    span {
      color: ${(props) => props.theme["base-subtitle"]};
    }

    background: ${(props) => props.theme["base-hover"]};
  }
`;
