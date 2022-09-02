import { useContext } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { CartButton } from "../../../../components/CartButton";

import { Card } from "./styles";

import { CartContext } from "../../../../contexts/CartContext";
import { NumberInputCard } from "../NumberInputCard";

interface CoffeeCardProps {
  coffee: {
    name: string;
    tags: string[];
    description: string;
    price: number;
    imageUrl: string;
  };
}

interface CoffeeCardInputs {
  quantity: number;
}

function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { name, tags, description, price, imageUrl } = coffee;

  const coffeeCardForm = useForm<CoffeeCardInputs>({
    defaultValues: {
      quantity: 1
    }
  });

  const { handleSubmit, reset } = coffeeCardForm;

  const { addNewItemToCart } = useContext(CartContext);

  const priceFormatted = price.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  });

  function handleAddNewItemToCart({ quantity }: CoffeeCardInputs) {
    addNewItemToCart({
      name,
      price,
      quantity,
      imageUrl
    });

    reset();
  }

  return (
    <Card onSubmit={handleSubmit(handleAddNewItemToCart)}>
      <img src={imageUrl} alt="Coffee" />

      <div>
        {tags.map((tag) => {
          return <span key={tag}> {tag} </span>;
        })}
      </div>
      <h3> {name} </h3>
      <p> {description} </p>

      <footer>
        <span> {priceFormatted} </span>

        <div>
          <FormProvider {...coffeeCardForm}>
            <NumberInputCard />
          </FormProvider>
          <CartButton colorScheme="purple" type="submit" />
        </div>
      </footer>
    </Card>
  );
}

export { CoffeeCard };
