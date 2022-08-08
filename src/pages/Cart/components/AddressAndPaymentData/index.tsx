import { useState } from "react";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from "phosphor-react";

import {
  AddressAndPaymentDataContainer,
  BaseCard,
  ButtonGroup,
  CardHeader,
  InputGroup,
  PaymentButton,
  PaymentCard
} from "./styles";

function AddressAndPaymentData() {
  const [payment, setPayment] = useState("");

  type PaymentType = "Credit" | "Debit" | "Money";

  function handleSetPaymentType(event: any, type: PaymentType) {
    event.preventDefault();

    setPayment(type);
  }

  return (
    <AddressAndPaymentDataContainer>
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
          <PaymentButton
            onClick={(e) => handleSetPaymentType(e, "Credit")}
            isActive={payment === "Credit" && true}
          >
            <CreditCard size={18} />
            <span>Cartão de crédito</span>
          </PaymentButton>
          <PaymentButton
            onClick={(e) => handleSetPaymentType(e, "Debit")}
            isActive={payment === "Debit" && true}
          >
            <Bank size={18} />
            <span>Cartão de débito</span>
          </PaymentButton>
          <PaymentButton
            onClick={(e) => handleSetPaymentType(e, "Money")}
            isActive={payment === "Money" && true}
          >
            <Money size={18} />
            <span>Dinheiro</span>
          </PaymentButton>
        </ButtonGroup>
      </PaymentCard>
    </AddressAndPaymentDataContainer>
  );
}

export { AddressAndPaymentData };
