import { FormEvent } from "react";
import { Minus, Plus } from "phosphor-react";
import { useFormContext } from "react-hook-form";

import { NumberInputContainer } from "./styles";

function NumberInputCard() {
  const { register, setValue, getValues } = useFormContext();

  let quantity = getValues("quantity");

  function handleSubtractQuantity(event: FormEvent) {
    event.preventDefault();

    if (quantity > 1) {
      setValue("quantity", --quantity);
    }
  }

  function handleAddQuantity(event: FormEvent) {
    event.preventDefault();

    if (quantity < 99) {
      setValue("quantity", ++quantity);
    }
  }

  return (
    <NumberInputContainer>
      <button onClick={handleSubtractQuantity}>
        <Minus size={18} weight="fill" />
      </button>
      <input
        type="number"
        min="1"
        max="99"
        disabled
        {...register("quantity", { valueAsNumber: true })}
      />
      <button onClick={handleAddQuantity}>
        <Plus size={18} weight="fill" />
      </button>
    </NumberInputContainer>
  );
}

export { NumberInputCard };
