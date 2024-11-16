import {
  Badge,
  Box,
  Button,
  Card,
  Group,
  Image,
  List,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { Product } from "../../data/index";
import { useShoppingCart } from "../contexts/ShoppingCartContext";

export interface Props {
  product: Product;
  sortDirection: "lowest" | "highest";
  sortedProducts: Product[];
}

function ProductCard({ product }: Props) {
  const { increaseCartQuantity } = useShoppingCart();
  const link = "/product/" + product.id;
  const { colorScheme } = useMantineColorScheme();

  return (
    <>
      <Card
        shadow="xl"
        withBorder
        data-cy="product"
        sx={{
          backgroundColor: "#F4EEE0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Card.Section>
          <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
            <Image
              src={product.image}
              height={230}
              fit="cover"
              sx={{ backgroundColor: "white" }}
            />
            <Box pl="md" pr="md">
              <Group
                mt="xl"
                mb="xl"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Title
                  style={{ fontFamily: "Ovo, serif" }}
                  sx={{
                    color: colorScheme === "dark" ? "#000" : "initial",
                  }}
                  order={2}
                  data-cy="product-title"
                >
                  {product.title}
                </Title>
                <Badge
                  style={{ borderColor: "black" }}
                  sx={{
                    color: colorScheme === "dark" ? "#000" : "initial",
                  }}
                  variant="outline"
                  size="lg"
                >
                  New!
                </Badge>
              </Group>
              <List
                style={{ fontFamily: "Poppins, sans-serif" }}
                sx={{
                  color: colorScheme === "dark" ? "#000" : "initial",
                }}
              >
                {Array.isArray(product.summary) &&
                  product.summary.map((item) => (
                    <List.Item key={item}>{item}</List.Item>
                  ))}
              </List>
            </Box>
          </Link>
        </Card.Section>
        <Group position="left" mt="md" mb="xs">
          <Link to={link}>
            <Button
              style={{ borderColor: "black" }}
              sx={{
                color: colorScheme === "dark" ? "#000" : "initial",
              }}
              variant="outline"
              mt="md"
              radius="md"
            >
              More Info
            </Button>
          </Link>
          <Button
            style={{
              backgroundColor: "black",
              color: "white",
            }}
            sx={{
              color: colorScheme === "dark" ? "#000" : "initial",
            }}
            variant="light"
            mt="md"
            radius="md"
            onClick={() => {
              increaseCartQuantity(product.id);
              notifications.show({
                icon: <IconShoppingCartPlus />,
                title: `${product.title}`,
                message: "has been added",
              });
            }}
            data-cy="product-buy-button"
          >
            Add to cart
          </Button>
          <Title
            sx={{
              color: colorScheme === "dark" ? "#000" : "initial",
            }}
            style={{
              marginLeft: "auto",
              marginTop: ".5rem",
              fontFamily: "Poppins, sans-serif",
            }}
            order={2}
            align="left"
            data-cy="product-price"
          >
            ${product.price}
          </Title>
        </Group>
      </Card>
    </>
  );
}

export default ProductCard;
