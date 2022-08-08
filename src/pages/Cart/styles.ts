import styled from "styled-components";

export const CartContainer = styled.main`
  max-width: 125rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 65% 30%;
  gap: 5rem;

  padding: 2rem 10rem;

  h2 {
    font-size: 1.125rem;
    font-family: "Baloo 2", sans-serif;
  }

  @media (max-width: 1900px) {
    grid-template-columns: 100%;
  }

  @media (max-width: 1200px) {
    padding: 0 4rem;
  }

  @media (max-width: 600px) {
    padding: 0 2rem;
  }
`;

export const BaseCard = styled.section`
  padding: 2.5rem 3.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme["base-card"]};

  display: grid;
  gap: 2rem;

  @media (max-width: 1900px) {
    grid-template-columns: 100%;
  }

  @media (max-width: 420px) {
    padding: 0.75rem 1rem;
  }
`;

interface CardProps {
  iconColor: "yellow-dark" | "purple";
}

export const CardHeader = styled.div<CardProps>`
  display: flex;

  color: ${(props) => props.theme[props.iconColor]};

  div {
    flex-direction: column;
    padding-left: 0.75rem;
    font-family: "Roboto", sans-serif;

    h3 {
      font-weight: normal;
      font-size: 1rem;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    gap: 1rem;

    &:nth-child(1) {
      input {
        width: 33%;
      }
    }

    &:nth-child(2) {
      input {
        width: 100%;
      }
    }

    &:nth-child(3) {
      display: flex;

      input {
        width: 33%;
      }

      div {
        flex: 1;

        input {
          width: 100%;
        }

        span {
          position: absolute;

          margin-left: -4rem;
          margin-top: 1rem;

          font-size: 0.75rem;
          font-family: "Roboto", sans-serif;
          font-style: italic;
          color: ${(props) => props.theme["base-label"]};
        }
      }
    }

    &:nth-child(4) {
      display: flex;
      gap: 1rem;

      input {
        &:nth-child(1) {
          width: 33%;
        }

        &:nth-child(2) {
          width: 57%;
        }

        &:nth-child(3) {
          width: 7%;
        }
      }
    }
  }

  input {
    color: ${(props) => props.theme["base-text"]};
    background: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-button"]};
    border-radius: 4px;
    padding: 0.75rem 1rem;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme["yellow-dark"]};
    }
  }

  @media (max-width: 1090px) {
    div {
      &:nth-child(1) {
        input {
          width: 50%;
        }
      }

      &:nth-child(4) {
        input {
          &:nth-child(1) {
            width: 33%;
          }

          &:nth-child(2) {
            width: 50%;
          }

          &:nth-child(3) {
            width: 13%;
          }
        }
      }
    }
  }

  @media (max-width: 800px) {
    div {
      &:nth-child(1) {
        input {
          width: 100%;
        }
      }

      &:nth-child(4) {
        flex-direction: column;

        input {
          &:nth-child(1) {
            width: 100%;
          }

          &:nth-child(2) {
            width: 100%;
          }

          &:nth-child(3) {
            width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 800px) {
    div {
      &:nth-child(3) {
        flex-direction: column;

        input {
          width: 100%;
        }
      }
    }
  }
`;

export const PaymentCard = styled(BaseCard)`
  margin-top: 1rem;
`;

export const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    border: 0;
    border-radius: 6px;
    background: ${(props) => props.theme["base-button"]};

    padding: 1rem;
    gap: 0.75rem;

    font-size: 0.75rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    color: ${(props) => props.theme.purple};

    span {
      color: ${(props) => props.theme["base-text"]};
    }

    &:hover {
      span {
        color: ${(props) => props.theme["base-subtitle"]};
      }

      background: ${(props) => props.theme["base-hover"]};
    }
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

export const CoffeesAndConfirmPaymentCard = styled.div`
  padding: 2.5rem 3.5rem;
  border-radius: 6px 44px;
  background: ${(props) => props.theme["base-card"]};
`;

export const TotalValue = styled.div`
  margin-top: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    justify-content: space-between;

    span:first-child {
      font-size: 0.875rem;
    }

    strong {
      font-size: 1.25rem;
    }
  }

  button {
    margin-top: 1rem;

    border: 0;
    border-radius: 6px;
    padding: 0.75rem 0.5rem;
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    text-transform: uppercase;
    cursor: pointer;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.yellow};

    &:hover {
      background: ${(props) => props.theme["yellow-dark"]};
    }
  }
`;
