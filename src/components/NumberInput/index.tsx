import { useState } from "react";
import { Minus, Plus } from "phosphor-react";

import { NumberInputContainer } from "./styles";

function NumberInput() {
  const [quantity, setQuantity] = useState(1);

  function handleSubtractQuantity() {
    if (quantity > 1) {
      setQuantity((state) => {
        return --state;
      });
    }
  }

  function handleAddQuantity() {
    if (quantity < 99) {
      setQuantity((state) => {
        return ++state;
      });
    }
  }

  return (
    <NumberInputContainer>
      <button onClick={handleSubtractQuantity}>
        <Minus size={18} weight="fill" />
      </button>
      <input type="number" min="1" max="99" value={quantity} disabled />
      <button onClick={handleAddQuantity}>
        <Plus size={18} weight="fill" />
      </button>
    </NumberInputContainer>
  );
}

export { NumberInput };
