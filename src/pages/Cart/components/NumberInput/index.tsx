import { FormEvent } from "react";
import { Minus, Plus } from "phosphor-react";

import { NumberInputContainer } from "./styles";

interface NumberInputProps {
  quantity: number;
}

function NumberInput({ quantity }: NumberInputProps) {
  function handleSubtractQuantity(event: FormEvent) {
    event.preventDefault();
  }

  function handleAddQuantity(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <NumberInputContainer>
      <button onClick={handleSubtractQuantity}>
        <Minus size={18} weight="fill" />
      </button>
      <input type="number" min="1" max="99" defaultValue={quantity} disabled />
      <button onClick={handleAddQuantity}>
        <Plus size={18} weight="fill" />
      </button>
    </NumberInputContainer>
  );
}

export { NumberInput };
