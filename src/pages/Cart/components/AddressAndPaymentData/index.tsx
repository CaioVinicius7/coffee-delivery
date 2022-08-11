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

import { PaymentType } from "../..";

interface AddressAndPaymentDataProps {
  paymentType: string;
  setPaymentType: (paymentType: string) => void;
}

function AddressAndPaymentData({
  paymentType,
  setPaymentType
}: AddressAndPaymentDataProps) {
  const { register } = useFormContext();

  function handleSetPaymentType(event: any, type: PaymentType) {
    event.preventDefault();

    setPaymentType(type);
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
            <input
              placeholder="CEP"
              type="text"
              autoComplete="off"
              {...register("cep")}
            />
          </div>

          <div>
            <input
              placeholder="Rua"
              type="text"
              autoComplete="off"
              {...register("street")}
            />
          </div>

          <div>
            <input
              placeholder="Número"
              type="number"
              min="1"
              {...register("number", { valueAsNumber: true })}
            />
            <div>
              <input
                placeholder="Complemento"
                type="text"
                autoComplete="off"
                {...register("complement")}
              />
              <span> Opcional </span>
            </div>
          </div>

          <div>
            <input
              placeholder="Bairro"
              type="text"
              autoComplete="off"
              {...register("neighborhood")}
            />
            <input
              placeholder="Cidade"
              type="text"
              autoComplete="off"
              {...register("city")}
            />
            <input
              placeholder="UF"
              type="text"
              autoComplete="off"
              maxLength={2}
              {...register("uf")}
            />
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
            isActive={paymentType === "Credit" && true}
          >
            <CreditCard size={18} />
            <span>Cartão de crédito</span>
          </PaymentButton>
          <PaymentButton
            onClick={(e) => handleSetPaymentType(e, "Debit")}
            isActive={paymentType === "Debit" && true}
          >
            <Bank size={18} />
            <span>Cartão de débito</span>
          </PaymentButton>
          <PaymentButton
            onClick={(e) => handleSetPaymentType(e, "Money")}
            isActive={paymentType === "Money" && true}
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
