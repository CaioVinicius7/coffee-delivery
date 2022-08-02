import { ShoppingCart } from "phosphor-react";

import { EmptyCartButton, FullCartButton } from "./styles";

interface CartButtonProps {
  itemsQuantity?: number;
  colorScheme?: "yellow" | "purple";
}

function CartButton({
  itemsQuantity,
  colorScheme = "yellow"
}: CartButtonProps) {
  return itemsQuantity ? (
    <FullCartButton>
      <ShoppingCart size={22} weight="fill" />
      <span> {itemsQuantity} </span>
    </FullCartButton>
  ) : (
    <EmptyCartButton colorScheme={colorScheme}>
      <ShoppingCart size={22} weight="fill" />
    </EmptyCartButton>
  );
}

export { CartButton };
