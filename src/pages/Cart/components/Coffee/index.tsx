import { NumberInput } from "../../../../components/NumberInput";

import { CoffeeContainer, CoffeeInfos, RemoveButton } from "./styles";

import coffee from "../../../../assets/coffee-1.svg";
import { Trash } from "phosphor-react";

function Coffee() {
  return (
    <CoffeeContainer>
      <img src={coffee} alt="Coffee" />

      <CoffeeInfos>
        <div>
          <span> Expresso Tradicional </span>
          <strong> R$ 9,90 </strong>
        </div>

        <div>
          <NumberInput />
          <RemoveButton>
            <Trash size={18} />
            <span>Remover</span>
          </RemoveButton>
        </div>
      </CoffeeInfos>
    </CoffeeContainer>
  );
}

export { Coffee };
