import styled from "styled-components";

export const ConfirmedRequestContainer = styled.main`
  max-width: 125rem;
  margin: 0 auto;

  padding: 8rem 10rem;

  h2 {
    margin-top: 2rem;
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme["yellow-dark"]};
  }

  span {
    font-size: 1.25rem;
  }

  @media (max-width: 1900px) {
    grid-template-columns: 100%;
  }

  @media (max-width: 1200px) {
    padding: 6rem 4rem;
  }

  @media (max-width: 700px) {
    text-align: center;
  }

  @media (max-width: 600px) {
    padding: 6rem 2rem;
  }

  @media (max-width: 420px) {
    padding: 6rem 1rem;
  }
`;

export const DeliveryContainer = styled.section`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15rem;

  div {
    border: 1.5px solid;

    border-radius: 6px 36px;
    padding: 0 3rem;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    div {
      padding: 0;
      border-radius: 0;
      border: 0;

      display: grid;
      grid-template-columns: 10% 90%;
      align-items: center;

      div {
        display: flex;
        align-items: flex-start;
      }
    }
  }

  @media (max-width: 1800px) {
    grid-template-columns: 1.4fr 0.6fr;
  }

  @media (max-width: 1600px) {
    grid-template-columns: 60% 40%;
    gap: 5rem;
  }

  @media (max-width: 1600px) {
    grid-template-columns: 1fr;
    gap: 5rem;

    justify-items: center;

    div {
      width: 100%;

      div {
        padding: 1rem 0;
      }
    }

    img {
      width: 50%;
    }
  }

  @media (max-width: 700px) {
    gap: 2rem;

    div {
      div {
        margin-top: 0.5;
        display: flex;

        div {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    img {
      width: 100%;
    }
  }
`;

interface IconBackgroundProps {
  iconBackground: "purple" | "yellow" | "yellow-dark";
}

export const IconBackground = styled.span<IconBackgroundProps>`
  background: ${(props) => props.theme[props.iconBackground]};
  color: ${(props) => props.theme.background};
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PurchaseNotComplete = styled.main`
  height: 100vh;
  gap: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-family: "Roboto", sans-serif;
  text-align: center;

  h2 {
    color: ${(props) => props.theme["base-title"]};
  }

  span {
    font-weight: 700;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  @media (max-width: 700px) {
    h2 {
      font-size: 1rem;
    }

    span {
      font-size: 0.75rem;
    }
  }
`;
