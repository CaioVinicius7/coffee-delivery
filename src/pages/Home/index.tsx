import { CoffeeCard } from "./components/CoffeeCard";
import { Intro } from "./components/Intro";

import { CoffeeListContainer, HomeContainer } from "./styles";

function Home() {
  return (
    <HomeContainer>
      <Intro />

      <h2> Nossos cafés </h2>
      <CoffeeListContainer>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeListContainer>
    </HomeContainer>
  );
}

export { Home };
