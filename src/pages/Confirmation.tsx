import {
  Card,
  Container,
  Divider,
  Image,
  List,
  Text,
  Title,
} from "@mantine/core";
import { useContext } from "react";
import { FormValues } from "../components/CheckoutForm";
import { ProductContext } from "../contexts/ProductContext";
import { useShoppingCart } from "../contexts/ShoppingCartContext";

function Confirmation() {
  const { products } = useContext(ProductContext);
  const { orders } = useShoppingCart();
  const lastOrder = orders[orders.length - 1];
  const formData = lastOrder.cartProducts.find(
    (item): item is { formData: FormValues } => "formData" in item
  )?.formData;
  function calculateLastOrderTotal() {
    return lastOrder.cartProducts.reduce((total, item) => {
      if ("id" in item) {
        const product = products.find((i) => i.id === item.id);
        return total + (product?.price || 0) * item.quantity;
      }
      return total;
    }, 0);
  }
  return (
    <Container size="md" mt="xl" mb="xl">
      {lastOrder && formData && (
        <Card shadow="md" sx={{ textAlign: "center" }}>
          <Title mb="md" order={1}>
            Thank you for your order!
          </Title>

          <Text>We have sent a confirmation to: {formData.email}</Text>
          <Text italic>Your order number: {lastOrder.id}</Text>
          <Divider mt="md" mb="sm" size="xs" />
          <Title mb="xs" order={2}>
            Order details:
          </Title>
          <Text>Name: {formData.fullName}</Text>
          <Text>Email: {formData.email}</Text>
          <Text>Address: {formData.adress}</Text>
          <Text>Zip Code: {formData.zipCode}</Text>
          <Text>Phone nr: {formData.mobileNr}</Text>
          <Text>City: {formData.city}</Text>
          <Divider mt="md" mb="sm" size="xs" />
          <Title mb="xs" order={2}>
            Ordered Products
          </Title>
          <List listStyleType="none">
            {lastOrder.cartProducts.map(
              (product, index) =>
                "id" in product && (
                  <div key={index}>
                    <List.Item>
                      {product.title} - ${product.price}
                      <Image
                        sx={{ backgroundColor: "#F3F8F9" }}
                        mt="sm"
                        mb="sm"
                        src={product.image}
                        height={150}
                        width={220}
                        fit="contain"
                      />
                      Quantity: {product.quantity}
                    </List.Item>
                    {index < lastOrder.cartProducts.length - 1 && (
                      <Divider mt="md" mb="md" size="xs" />
                    )}
                  </div>
                )
            )}
          </List>
          <h2>Total price: ${calculateLastOrderTotal()}</h2>
        </Card>
      )}
    </Container>
  );
}

export default Confirmation;
