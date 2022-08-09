import { ButtonHTMLAttributes, useContext } from "react";
import { ShoppingCart } from "phosphor-react";

import { EmptyCartButton, FullCartButton } from "./styles";

import { CartContext } from "../../contexts/CartContext";

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorScheme?: "yellow" | "purple";
}

function CartButton({ colorScheme = "yellow", ...props }: CartButtonProps) {
  const { itemsQuantity } = useContext(CartContext);

  return itemsQuantity && colorScheme !== "purple" ? (
    <FullCartButton {...props}>
      <ShoppingCart size={22} weight="fill" />
      <span> {itemsQuantity} </span>
    </FullCartButton>
  ) : (
    <EmptyCartButton colorScheme={colorScheme} {...props}>
      <ShoppingCart size={22} weight="fill" />
    </EmptyCartButton>
  );
}

export { CartButton };
