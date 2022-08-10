import styled from "styled-components";

export const NumberInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 4.5rem;

  button {
    border: 0;
    cursor: pointer;
    font-size: 1.5rem;
    background: transparent;
    z-index: 999;
    color: ${(props) => props.theme.purple};
    padding: 0.25rem;

    display: flex;

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }

    &:first-child {
      margin-right: -5rem;
    }

    &:last-child {
      margin-left: -5rem;
    }
  }

  input[type="number"] {
    width: 4.5rem;
    height: 2.5rem;
    border: 0;
    border-radius: 6px;
    font-weight: 700;
    text-align: center;

    color: ${(props) => props.theme["base-text"]};
    background: ${(props) => props.theme["base-button"]};

    &::-webkit-inner-spin-button {
      all: unset;
    }
  }
`;
