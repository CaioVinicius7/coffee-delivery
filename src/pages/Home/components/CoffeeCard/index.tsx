import { CartButton } from "../../../../components/CartButton";
import { NumberInput } from "../../../../components/NumberInput";

import { Card } from "./styles";

import coffee from "../../../../assets/coffee-1.svg";

function CoffeeCard() {
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
          <NumberInput />
          <CartButton colorScheme="purple" />
        </div>
      </footer>
    </Card>
  );
}

export { CoffeeCard };
