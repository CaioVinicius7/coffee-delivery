import { useState } from "react";

import { CoffeeCard } from "./components/CoffeeCard";
import { Intro } from "./components/Intro";

import { CoffeeListContainer, HomeContainer } from "./styles";

import coffeesMock from "../../mocks/coffees.json";

interface Coffee {
  id: string;
  name: string;
  tags: string[];
  description: string;
  price: number;
  imagePath: string;
}

function Home() {
  const [coffees] = useState<Coffee[]>(coffeesMock);

  return (
    <HomeContainer>
      <Intro />

      <h2> Nossos cafés </h2>
      <CoffeeListContainer>
        {coffees.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />;
        })}
      </CoffeeListContainer>
    </HomeContainer>
  );
}

export { Home };
