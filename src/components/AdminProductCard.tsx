import {
  Box,
  Button,
  Card,
  Group,
  Image,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../data/index";

interface Props {
  product: Product;
  onDelete?: () => void;
}

function AdminProductCard({ product, onDelete }: Props) {
  const edit = "/admin/product/" + product.id + "/edit";

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const { colorScheme } = useMantineColorScheme();

  const handleDelete = () => {
    if (showConfirmDelete) {
      onDelete?.();
    } else {
      setShowConfirmDelete(true);
    }
  };

  return (
    <>
      <Card
        shadow="xl"
        padding="md"
        radius="lg"
        withBorder
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        data-cy="product"
      >
        <Card.Section>
          <Image
            src={product.image}
            height={230}
            fit="contain"
            sx={{ backgroundColor: "#F3F8F9" }}
          />
          <Box pl="md" pr="md">
            <Group position="left" mt="sm" mb="sm">
              <Text
                style={{ fontFamily: "Ove, serif" }}
                weight={500}
                size={29}
                transform="uppercase"
                data-cy="product-title"
              >
                {product.title}
              </Text>
            </Group>
            <Group position="left" mt="sm" mb="md">
              <Text color="dimmed">Product id:</Text>
              <Text color="dimmed" data-cy="product-id">
                {product.id}
              </Text>
            </Group>
            <Text size="md" align="left">
              {product.description}
            </Text>
          </Box>
        </Card.Section>
        <Group position="left" mt="md" mb="xs">
          {showConfirmDelete ? (
            <Button
              sx={{ color: "white" }}
              variant="filled"
              color="red"
              mt="md"
              radius="md"
              onClick={handleDelete}
              data-cy="confirm-delete-button"
            >
              Are you sure?
            </Button>
          ) : (
            <Button
              sx={{ color: "white" }}
              variant="filled"
              color="red"
              mt="md"
              radius="md"
              onClick={handleDelete}
              data-cy="admin-remove-product"
            >
              Delete Product
            </Button>
          )}

          <Link to={edit} data-cy="admin-edit-product">
            <Button
              style={{
                borderColor: colorScheme === "dark" ? "#ADB5BD" : "#000",
                color: colorScheme === "dark" ? "#ADB5BD" : "#000",
              }}
              variant="outline"
              color="dark"
              mt="md"
              radius="md"
            >
              Edit product
            </Button>
          </Link>
          <Title
            order={2}
            sx={{ marginLeft: "1rem", marginTop: ".5rem" }}
            align="right"
            data-cy="product-price"
          >
            ${product.price}
          </Title>
        </Group>
      </Card>
    </>
  );
}

export default AdminProductCard;
