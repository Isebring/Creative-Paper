import {
  Button,
  Container,
  Group,
  SimpleGrid,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useContext, useState } from "react";
import HeroSlide from "../components/HeroSlide";
import { PageHero } from "../components/PageHero";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../contexts/ProductContext";

function Home() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const { products } = useContext(ProductContext);
  const [sortDirection, setSortDirection] = useState("");
  const [sortedProducts, setSortedProducts] = useState(products);
  const [activeButton, setActiveButton] = useState("");

  function sortProductsByLowestPrice() {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    setSortedProducts(sorted);
    setSortDirection("ascending");
    setActiveButton("lowest");
  }

  function sortProductsByHighestPrice() {
    const sorted = [...products].sort((a, b) => b.price - a.price);
    setSortedProducts(sorted);
    setSortDirection("descending");
    setActiveButton("highest");
  }

  return (
    <Container size="xl">
      <HeroSlide />
      <PageHero
        title="Creative Paper"
        line1="Unleash Your Creativity with Our Stationary,"
        line2="Where Ideas Take Flight on Pages Delight!"
      />
      <Title
        sx={{ marginBottom: "1rem", fontFamily: "Ovo, serif" }}
        ta="center"
      >
        Browse our collection
      </Title>
      <Group spacing={5} mb="md">
        <Button
          sx={{
            backgroundColor:
              activeButton === "lowest"
                ? colorScheme === "dark"
                  ? theme.colors.gray[6]
                  : theme.colors.gray[2]
                : "none",
            borderColor:
              colorScheme === "dark"
                ? theme.colors.gray[6]
                : theme.colors.gray[7],
            color:
              activeButton === "lowest"
                ? colorScheme === "dark"
                  ? theme.white
                  : theme.colors.gray[7]
                : colorScheme === "dark"
                ? theme.colors.gray[3]
                : theme.black,
            "&:hover": {
              backgroundColor:
                colorScheme === "dark"
                  ? theme.colors.gray[7]
                  : theme.colors.gray[1],
            },
          }}
          variant="outline"
          size="xs"
          radius="sm"
          onClick={sortProductsByLowestPrice}
        >
          Sort by lowest price
        </Button>

        <Button
          sx={{
            backgroundColor:
              activeButton === "highest"
                ? colorScheme === "dark"
                  ? theme.colors.gray[6]
                  : theme.colors.gray[2]
                : "none",
            borderColor:
              colorScheme === "dark"
                ? theme.colors.gray[6]
                : theme.colors.gray[7],
            color:
              activeButton === "highest"
                ? colorScheme === "dark"
                  ? theme.white
                  : theme.colors.gray[7]
                : colorScheme === "dark"
                ? theme.colors.gray[3]
                : theme.black,
            "&:hover": {
              backgroundColor:
                colorScheme === "dark"
                  ? theme.colors.gray[7]
                  : theme.colors.gray[1],
            },
          }}
          size="xs"
          variant="outline"
          radius="sm"
          onClick={sortProductsByHighestPrice}
        >
          Sort by highest price
        </Button>
      </Group>
      <SimpleGrid
        cols={3}
        spacing="xl"
        verticalSpacing="xl"
        breakpoints={[
          { maxWidth: "85rem", cols: 2, spacing: "md" },
          { maxWidth: "36rem", cols: 1, spacing: "sm" },
        ]}
      >
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            sortedProducts={sortedProducts}
            sortDirection={sortDirection === "ascending" ? "lowest" : "highest"}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Home;
