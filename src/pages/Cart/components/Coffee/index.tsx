import { useContext } from "react";
import { Trash } from "phosphor-react";

import { NumberInput } from "../NumberInput";

import { CoffeeContainer, CoffeeInfos, RemoveButton } from "./styles";

import { CartContext } from "../../../../contexts/CartContext";

interface CoffeeProps {
  name: string;
}

function Coffee({ name }: CoffeeProps) {
  const { getItemInfosByName, removeItemFromCart } = useContext(CartContext);

  const { price, quantity, imageUrl } = getItemInfosByName(name);

  const priceFormatted = price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
  });

  function handleRemoveCoffee(event: any) {
    event.preventDefault();

    removeItemFromCart(name);
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
          <NumberInput name={name} quantity={quantity} />
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
