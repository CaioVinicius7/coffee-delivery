import { CurrencyDollar, MapPin, Timer, Warning } from "phosphor-react";

import {
  ConfirmedRequestContainer,
  DeliveryContainer,
  IconBackground,
  PurchaseNotComplete
} from "./styles";

import deliveryman from "../../assets/deliveryman.svg";

interface deliveryInfos {
  cep: string;
  city: string;
  complement: string;
  neighborhood: string;
  number: number;
  paymentType: "Credit" | "Debit" | "Money";
  street: string;
  uf: string;
}

function ConfirmedRequest() {
  let deliveryInfos: deliveryInfos | undefined;

  const deliveryInfosAsJson = localStorage.getItem(
    "@coffee-delivery: delivery-data-1.0.0"
  );

  if (deliveryInfosAsJson) {
    deliveryInfos = JSON.parse(deliveryInfosAsJson);
  }

  return deliveryInfos ? (
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
                Entrega em
                <strong>
                  {deliveryInfos.street}, {deliveryInfos.number}
                </strong>
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
              {deliveryInfos.paymentType === "Credit" && (
                <strong> Cartão de crédito </strong>
              )}

              {deliveryInfos.paymentType === "Debit" && (
                <strong> Cartão de débito </strong>
              )}

              {deliveryInfos.paymentType === "Money" && (
                <strong> Dinheiro </strong>
              )}
            </div>
          </div>
        </div>

        <img src={deliveryman} alt="Deliveryman" />
      </DeliveryContainer>
    </ConfirmedRequestContainer>
  ) : (
    <PurchaseNotComplete>
      <Warning size={80} />
      <h2> Parece que você ainda não completou a sua compra! </h2>
      <span> Volte para o carrinho para finalizar sua compra. </span>
    </PurchaseNotComplete>
  );
}

export { ConfirmedRequest };
