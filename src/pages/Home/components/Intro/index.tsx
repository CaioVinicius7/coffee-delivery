import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import {
  IconBackground,
  ImgContainer,
  IntroContainer,
  TitlesContainer,
  Topics
} from "./styles";

import introCoffee from "../../../../assets/introCoffee.png";

function Intro() {
  return (
    <IntroContainer>
      <div>
        <TitlesContainer>
          <h1> Encontre o café perfeito para qualquer hora do dia </h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </TitlesContainer>

        <Topics>
          <div>
            <IconBackground iconBackground="yellow-dark">
              <ShoppingCart size={20} weight="fill" />
            </IconBackground>
            <p> Compra simples e segura </p>
          </div>

          <div>
            <IconBackground iconBackground="base-text">
              <Package size={20} weight="fill" />
            </IconBackground>
            <p> Embalagem mantém o café intacto </p>
          </div>

          <div>
            <IconBackground iconBackground="yellow">
              <Timer size={20} weight="fill" />
            </IconBackground>
            <p> Entrega rápida e rastreada </p>
          </div>

          <div>
            <IconBackground iconBackground="purple">
              <Coffee size={20} weight="fill" />
            </IconBackground>
            <p> O café chega fresquinho até você </p>
          </div>
        </Topics>
      </div>

      <ImgContainer>
        <img src={introCoffee} alt="Coffee" />
      </ImgContainer>
    </IntroContainer>
  );
}

export { Intro };
