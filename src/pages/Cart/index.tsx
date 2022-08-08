import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from "phosphor-react";

import { Coffee } from "./components/Coffee";

import {
  BaseCard,
  ButtonGroup,
  CardHeader,
  CartContainer,
  CoffeesAndConfirmPaymentCard,
  InputGroup,
  PaymentCard,
  TotalValue
} from "./styles";

function Cart() {
  return (
    <CartContainer>
      <form>
        <h2> Complete seu pedido </h2>
        <BaseCard>
          <CardHeader iconColor="yellow-dark">
            <MapPinLine size={22} />

            <div>
              <h3> Endereço de Entrega </h3>
              <p> Informe o endereço onde deseja receber seu pedido </p>
            </div>
          </CardHeader>

          <InputGroup>
            <div>
              <input placeholder="CEP" type="text" />
            </div>

            <div>
              <input placeholder="Rua" type="text" />
            </div>

            <div>
              <input placeholder="Número" type="text" />
              <div>
                <input placeholder="Complemento" type="text" />
                <span> Opcional </span>
              </div>
            </div>

            <div>
              <input placeholder="Bairro" type="text" />
              <input placeholder="Cidade" type="text" />
              <input placeholder="UF" type="text" />
            </div>
          </InputGroup>
        </BaseCard>

        <PaymentCard>
          <CardHeader iconColor="purple">
            <CurrencyDollar size={22} />

            <div>
              <h3> Pagamento </h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </CardHeader>

          <ButtonGroup>
            <button>
              <CreditCard size={18} />
              <span>Cartão de crédito</span>
            </button>
            <button>
              <Bank size={18} />
              <span>Cartão de débito</span>
            </button>
            <button>
              <Money size={18} />
              <span>Dinheiro</span>
            </button>
          </ButtonGroup>
        </PaymentCard>
      </form>

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
    </CartContainer>
  );
}

export { Cart };
