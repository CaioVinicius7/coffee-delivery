import { Bag } from "phosphor-react";
import { useContext } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { Coffee } from "./components/Coffee";
import { AddressAndPaymentData } from "./components/AddressAndPaymentData";

import { CartContext } from "../../contexts/CartContext";

import {
  CartContainer,
  CoffeesAndConfirmPaymentCard,
  EmptyCart,
  TotalValue
} from "./styles";

interface CardForm {
  cep: string;
  street: string;
  number: number;
  complement: string;
  neighborhood: string;
  city: string;
  uf: string;
}

function Cart() {
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

  const deliveryForm = useForm<CardForm>();

  const { handleSubmit } = deliveryForm;

  function handleCompletePurchase(data: any) {
    console.log(data);
  }

  return (
    <CartContainer>
      <form onSubmit={handleSubmit(handleCompletePurchase)}>
        <FormProvider {...deliveryForm}>
          <AddressAndPaymentData />
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

              <button type="submit">Confirmar Pedido</button>
            </TotalValue>
          </CoffeesAndConfirmPaymentCard>
        </aside>
      </form>
    </CartContainer>
  );
}

export { Cart };
