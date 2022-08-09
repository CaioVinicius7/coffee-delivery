import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import {
  ConfirmedRequestContainer,
  DeliveryContainer,
  IconBackground
} from "./styles";

import deliveryman from "../../assets/deliveryman.svg";

function ConfirmedRequest() {
  return (
    <ConfirmedRequestContainer>
      <h2> Uhu! Pedido confirmado </h2>
      <span> Agora é só aguardar que logo o café chegará até você </span>

      <DeliveryContainer>
        <div>
          <div>
            <IconBackground iconBackground="purple">
              <MapPin size={20} weight="fill" />
            </IconBackground>
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102 </strong>
              </p>
              <p> Compra simples e segura </p>
            </div>
          </div>

          <div>
            <IconBackground iconBackground="yellow">
              <Timer size={20} weight="fill" />
            </IconBackground>
            <div>
              <p> Previsão de entrega </p>
              <strong> 20 min - 30 min </strong>
            </div>
          </div>

          <div>
            <IconBackground iconBackground="yellow-dark">
              <CurrencyDollar size={20} weight="fill" />
            </IconBackground>
            <div>
              <p> Pagamento na entrega </p>
              <strong> Cartão de Crédito </strong>
            </div>
          </div>
        </div>

        <img src={deliveryman} alt="Deliveryman" />
      </DeliveryContainer>
    </ConfirmedRequestContainer>
  );
}

export { ConfirmedRequest };
