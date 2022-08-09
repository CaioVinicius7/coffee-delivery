import styled from "styled-components";

export const Card = styled.form`
  width: 16rem;
  height: 18.775rem;
  margin-top: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;

  img {
    margin-top: -2rem;
  }

  div {
    margin-top: 0.75rem;
    gap: 0.5rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    span {
      font-family: "Roboto", sans-serif;
      font-size: 0.625rem;
      font-weight: 700;
      padding: 0.25rem 0.5rem;
      border-radius: 100px;
      color: ${(props) => props.theme["yellow-dark"]};
      background: ${(props) => props.theme["yellow-light"]};
    }
  }

  h3 {
    padding-top: 0.75rem;
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    font-weight: 700;

    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    color: ${(props) => props.theme["base-label"]};
    font-size: 0.875rem;
    font-weight: 400;

    text-align: center;
    padding: 0.5rem 0.75rem 0.75rem;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1rem;
    margin: 1rem;

    span {
      font-size: 1.5rem;
      color: ${(props) => props.theme["base-text"]};

      display: flex;
      align-items: baseline;
      gap: 0.25rem;
      font-family: "Baloo 2", sans-serif;

      &::before {
        content: "R$";
        font-size: 0.875rem;
      }
    }

    div {
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
    }
  }
`;
