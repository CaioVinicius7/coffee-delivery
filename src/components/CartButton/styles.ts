import styled from "styled-components";

const BaseCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border: 0;
  border-radius: 6px;

  cursor: pointer;
`;

interface EmptyCardButtonProps {
  colorScheme: "yellow" | "purple";
}

export const EmptyCartButton = styled(BaseCartButton)<EmptyCardButtonProps>`
  color: ${(props) =>
    props.colorScheme === "yellow"
      ? props.theme["yellow-dark"]
      : props.theme.white};
  background: ${(props) =>
    props.colorScheme === "yellow"
      ? props.theme["yellow-light"]
      : props.theme["purple-dark"]};

  &:hover {
    background: ${(props) =>
      props.colorScheme === "purple" && props.theme.purple};
  }
`;

export const FullCartButton = styled(BaseCartButton)`
  color: ${(props) => props.theme["yellow-dark"]};
  background: ${(props) => props.theme["yellow-light"]};

  span {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme["yellow-dark"]};
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    margin-top: -2.25rem;
    margin-right: -2.25rem;
  }
`;
