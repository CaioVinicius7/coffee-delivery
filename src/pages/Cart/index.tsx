import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from "phosphor-react";
import { AddressAndPaymentData } from "./components/AddressAndPaymentData";

import { Coffee } from "./components/Coffee";

import {
  CartContainer,
  CoffeesAndConfirmPaymentCard,
  TotalValue
} from "./styles";

function Cart() {
  return (
    <CartContainer>
      <form>
        <AddressAndPaymentData />

        <aside>
          <h2> Cafés Selecionados </h2>
          <CoffeesAndConfirmPaymentCard>
            <div>
              <Coffee />
              <Coffee />
            </div>

            <TotalValue>
              <div>
                <span> Total de itens </span>
                <span> R$ 29,70 </span>
              </div>

              <div>
                <span> Entrega </span>
                <span> R$ 3,50 </span>
              </div>

              <div>
                <strong> Total </strong>
                <strong> R$ 33,20 </strong>
              </div>

              <button>Confirmar Pedido</button>
            </TotalValue>
          </CoffeesAndConfirmPaymentCard>
        </aside>
      </form>
    </CartContainer>
  );
}

export { Cart };
