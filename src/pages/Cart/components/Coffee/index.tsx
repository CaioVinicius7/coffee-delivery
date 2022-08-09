import { NumberInput } from "../../../../components/NumberInput";

import { CoffeeContainer, CoffeeInfos, RemoveButton } from "./styles";

import { Trash } from "phosphor-react";

function Coffee() {
  function handleRemoveCoffee(event: any) {
    event.preventDefault();
  }

  return (
    <CoffeeContainer>
      <img src="https://i.imgur.com/5TxBIvF.png" alt="Coffee" />

      <CoffeeInfos>
        <div>
          <span> Expresso Tradicional </span>
          <strong> R$ 9,90 </strong>
        </div>

        <div>
          <NumberInput />
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
