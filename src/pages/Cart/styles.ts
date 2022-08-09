import styled from "styled-components";

export const CartContainer = styled.main`
  max-width: 125rem;
  margin: 0 auto;

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

  @media (max-width: 420px) {
    padding: 0.75rem 1rem;
  }

  form {
    display: grid;
    grid-template-columns: 65% 30%;
    gap: 5rem;

    @media (max-width: 1900px) {
      grid-template-columns: 100%;
    }
  }
`;

export const CoffeesAndConfirmPaymentCard = styled.div`
  padding: 2.5rem 3.5rem;
  border-radius: 6px 44px;
  background: ${(props) => props.theme["base-card"]};

  @media (max-width: 500px) {
    padding: 2.5rem 1.25rem;
  }
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
