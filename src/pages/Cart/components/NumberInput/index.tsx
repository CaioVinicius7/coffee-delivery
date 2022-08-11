import { FormEvent, useContext } from "react";
import { useForm } from "react-hook-form";
import { Minus, Plus } from "phosphor-react";

import { NumberInputContainer } from "./styles";
import { CartContext } from "../../../../contexts/CartContext";

interface NumberInputForm {
  quantity: number;
}

interface NumberInputProps {
  name: string;
  quantity: number;
}

function NumberInput({ name, quantity }: NumberInputProps) {
  const { alterItemQuantity } = useContext(CartContext);

  const { register, setValue, getValues } = useForm<NumberInputForm>();

  setValue("quantity", quantity);

  let actualQuantity: number;

  function handleSubtractQuantity(event: FormEvent) {
    event.preventDefault();

    actualQuantity = getValues("quantity");

    if (actualQuantity > 1) {
      setValue("quantity", --quantity);
      alterItemQuantity(name, quantity--);
    }
  }

  function handleAddQuantity(event: FormEvent) {
    event.preventDefault();

    actualQuantity = getValues("quantity");

    if (actualQuantity < 99) {
      setValue("quantity", ++quantity);
      alterItemQuantity(name, quantity++);
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
        {...register("quantity", {
          valueAsNumber: true
        })}
      />
      <button onClick={handleAddQuantity}>
        <Plus size={18} weight="fill" />
      </button>
    </NumberInputContainer>
  );
}

export { NumberInput };
