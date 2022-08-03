import { MouseEventHandler, useState } from "react";
import { Minus, Plus } from "phosphor-react";

import { CartButton } from "../../../../components/CartButton";
import { Card, NumberInputGroup } from "./styles";

import coffee from "../../../../assets/coffee-1.svg";

function CoffeeCard() {
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
    <Card>
      <img src={coffee} alt="Coffee" />

      <div>
        <span> Tradicional </span>
        <span> Tradicional </span>
      </div>
      <h3> Expresso Tradicional </h3>
      <p> O tradicional café feito com água quente e grãos moídos </p>

      <footer>
        <span> 9,90 </span>

        <div>
          <NumberInputGroup>
            <button onClick={handleSubtractQuantity}>
              <Minus size={18} weight="fill" />
            </button>
            <input type="number" min="1" max="99" value={quantity} disabled />
            <button onClick={handleAddQuantity}>
              <Plus size={18} weight="fill" />
            </button>
          </NumberInputGroup>
          <CartButton colorScheme="purple" />
        </div>
      </footer>
    </Card>
  );
}

export { CoffeeCard };
