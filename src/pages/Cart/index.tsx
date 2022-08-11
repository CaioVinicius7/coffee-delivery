import { Bag } from "phosphor-react";
import { useContext, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { Coffee } from "./components/Coffee";
import { AddressAndPaymentData } from "./components/AddressAndPaymentData";

import { CartContext } from "../../contexts/CartContext";

import {
  CartContainer,
  CoffeesAndConfirmPaymentCard,
  EmptyCart,
  TotalValue
} from "./styles";

const addressAndPaymentFormValidationSchema = zod.object({
  cep: zod.string().length(9, "Preencha o campo CEP corretamente."),
  street: zod
    .string()
    .min(5, "O campo rua precisa ter no mínimo 5 caracteres.")
    .max(80, "O campo rua pode ter no máximo 100 caracteres."),
  number: zod
    .number()
    .min(1, "O campo número precisa ter no mínimo 1 caractere."),
  complement: zod.string().optional(),
  neighborhood: zod
    .string()
    .min(5, "O campo bairro precisa ter no mínimo 5 caracteres.")
    .max(50, "O campo bairro pode ter no máximo 100 caracteres."),
  city: zod
    .string()
    .min(5, "O campo cidade precisa ter no mínimo 5 caracteres.")
    .max(50, "O campo pode ter no máximo 100 caracteres."),
  uf: zod.string().length(2, "O campo UF precisa ter 2 caracteres.")
});

type AddressAndPayment = zod.infer<
  typeof addressAndPaymentFormValidationSchema
>;

export type PaymentType = "Credit" | "Debit" | "Money";

function Cart() {
  const [paymentType, setPaymentType] = useState("");

  const { itemsQuantity, items, totalValue } = useContext(CartContext);

  const itemsValueFormatted = totalValue.itemsValue.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
  });

  const totalValueWithDeliveryFormatted =
    totalValue.withDelivery.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    });

  const deliveryForm = useForm<AddressAndPayment>({
    resolver: zodResolver(addressAndPaymentFormValidationSchema)
  });

  const { handleSubmit } = deliveryForm;

  function handleCompletePurchase(data: any) {
    const purchaseJson = JSON.stringify({
      ...data,
      paymentType
    });

    localStorage.setItem("@coffee-delivery: delivery-data-1.0.0", purchaseJson);
  }

  const isDisabled = !itemsQuantity || paymentType === "";

  return (
    <CartContainer>
      <form onSubmit={handleSubmit(handleCompletePurchase)}>
        <FormProvider {...deliveryForm}>
          <AddressAndPaymentData
            paymentType={paymentType}
            setPaymentType={setPaymentType}
          />
        </FormProvider>

        <aside>
          <h2> Cafés Selecionados </h2>
          <CoffeesAndConfirmPaymentCard>
            <div>
              {itemsQuantity ? (
                items.map((coffee) => {
                  return <Coffee key={coffee.name} name={coffee.name} />;
                })
              ) : (
                <EmptyCart>
                  <Bag size={80} />
                  <span>Parece que você ainda não escolheu nenhum café!</span>
                </EmptyCart>
              )}
            </div>

            <TotalValue>
              <div>
                <span> Total de itens </span>
                <span> {itemsValueFormatted} </span>
              </div>

              <div>
                <span> Entrega </span>
                <span> R$ 3,50 </span>
              </div>

              <div>
                <strong> Total </strong>
                <strong> {totalValueWithDeliveryFormatted} </strong>
              </div>

              <button type="submit" disabled={isDisabled}>
                Confirmar Pedido
              </button>
            </TotalValue>
          </CoffeesAndConfirmPaymentCard>
        </aside>
      </form>
    </CartContainer>
  );
}

export { Cart };
