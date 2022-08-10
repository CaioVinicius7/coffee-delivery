import { useState } from "react";
import { useFormContext } from "react-hook-form";
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

type PaymentType = "Credit" | "Debit" | "Money";

function AddressAndPaymentData() {
  const [payment, setPayment] = useState("");

  const { register } = useFormContext();

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
            <input placeholder="CEP" type="text" {...register("cep")} />
          </div>

          <div>
            <input placeholder="Rua" type="text" {...register("street")} />
          </div>

          <div>
            <input
              placeholder="Número"
              type="number"
              {...register("number", { valueAsNumber: true })}
            />
            <div>
              <input
                placeholder="Complemento"
                type="text"
                {...register("complement")}
              />
              <span> Opcional </span>
            </div>
          </div>

          <div>
            <input
              placeholder="Bairro"
              type="text"
              {...register("neighborhood")}
            />
            <input placeholder="Cidade" type="text" {...register("city")} />
            <input placeholder="UF" type="text" {...register("uf")} />
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
