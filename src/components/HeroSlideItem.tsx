import {
  Box,
  Button,
  MediaQuery,
  rem,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";

interface HeroSlideItemProps {
  imageSrc?: string;
}

function HeroSlideItem({ imageSrc }: HeroSlideItemProps) {
  const theme = useMantineTheme();
  return (
    <MediaQuery query="(max-width: 730px)" styles={{ flexDirection: "row" }}>
      <Box sx={{ display: "flex", height: "100%", width: "100%" }}>
        <MediaQuery query="(max-width: 640px)" styles={{ display: "none" }}>
          <Box
            sx={{
              width: "50%",
              height: "100%",
              backgroundColor: theme.colors.violet[1],
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
              padding: "2rem",
            }}
          >
            <MediaQuery
              query="(max-width: 640px)"
              styles={{ fontSize: rem(18) }}
            >
              <Title style={{ fontFamily: "Ova, serif" }}>
                Shop Winter & <br /> New Weekend <br /> Deals
              </Title>
            </MediaQuery>
            <MediaQuery
              query="(max-width: 640px)"
              styles={{ fontSize: rem(13), marginTop: ".5rem" }}
            >
              <Text
                mt="sm"
                fw={580}
                sx={{ textAlign: "center", width: "80%" }}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                We have everything you need to feel organized in your day to day
                life.
              </Text>
            </MediaQuery>
            <MediaQuery
              query="(max-width: 640px)"
              styles={{ width: "6.3rem", height: "2rem", fontSize: rem(12) }}
            >
              <Button
                variant="outline"
                color="dark"
                radius="md"
                sx={{
                  // background: "black",
                  // color: "white",
                  fontWeight: "bold",
                  marginTop: "1rem",
                  height: "2.4rem",
                  width: "8rem",
                  // borderRadius: ".5rem",
                  // borderStyle: "none",
                  cursor: "pointer",
                  // "&:hover": {
                  //   background: theme.colors.violet[4],
                  //   color: theme.colors.violet[0],
                  // },
                }}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Go to Deals
              </Button>
            </MediaQuery>
          </Box>
        </MediaQuery>
        <MediaQuery
          query="(max-width: 640px)"
          styles={{ height: "100%", width: "100%" }}
        >
          <Box sx={{ width: "50%", height: "100%" }}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                backgroundColor: "#F3F8F9",
              }}
              src={imageSrc}
              alt="product-image"
            />
          </Box>
        </MediaQuery>
      </Box>
    </MediaQuery>
  );
}

export default HeroSlideItem;
