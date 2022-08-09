import { CartButton } from "../../../../components/CartButton";
import { NumberInput } from "../../../../components/NumberInput";

import { Card } from "./styles";

interface CoffeeCardProps {
  coffee: {
    name: string;
    tags: string[];
    description: string;
    price: number;
    imageUrl: string;
  };
}

function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { name, tags, description, price, imageUrl } = coffee;

  const priceFormatted = price.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  });

  return (
    <Card>
      <img src={`${imageUrl}`} alt="Coffee" />

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
          <NumberInput />
          <CartButton colorScheme="purple" />
        </div>
      </footer>
    </Card>
  );
}

export { CoffeeCard };
