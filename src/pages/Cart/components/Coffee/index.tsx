import { NumberInput } from "../NumberInput";

import { CoffeeContainer, CoffeeInfos, RemoveButton } from "./styles";

import { Trash } from "phosphor-react";

interface CoffeeProps {
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

function Coffee({ name, price, quantity, imageUrl }: CoffeeProps) {
  const priceFormatted = price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
  });

  function handleRemoveCoffee(event: any) {
    event.preventDefault();
  }

  return (
    <CoffeeContainer>
      <img src={imageUrl} alt="Coffee" />

      <CoffeeInfos>
        <div>
          <span> {name} </span>
          <strong> {priceFormatted} </strong>
        </div>

        <div>
          <NumberInput quantity={quantity} />
          <RemoveButton onClick={handleRemoveCoffee}>
            <Trash size={18} />
            <span>Remover</span>
          </RemoveButton>
        </div>
      </CoffeeInfos>
    </CoffeeContainer>
  );
}

export { Coffee };
