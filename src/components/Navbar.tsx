import {
  ActionIcon,
  Box,
  Burger,
  Button,
  Container,
  createStyles,
  Group,
  Header,
  Image,
  MediaQuery,
  Paper,
  rem,
  Transition,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconMoonStars,
  IconShoppingBag,
  IconSunHigh,
  IconUserShield,
} from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../contexts/ShoppingCartContext";

const HEADER_HEIGHT = rem(70);

const useStyles = createStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },

  dropdown: {
    position: "fixed",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 1000,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: "dark" }).color,
    },
  },
}));
export interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function HeaderResponsive({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const { cartQuantity } = useShoppingCart();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [logoType, setLogoType] = useState("dark");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const theme = useMantineTheme();

  const handleToggle = () => {
    toggleColorScheme();
    setLogoType(colorScheme === "dark" ? "dark" : "light");
  };

  const logoSize = windowWidth <= 400 ? "6.699rem" : "7.6rem";

  const logo =
    logoType === "dark" ? (
      <Image
        height="2.5rem"
        width={logoSize}
        src="../../assets/logoCreative.svg"
        alt="Creative Paper logo"
      />
    ) : (
      <Image
        height="2.5rem"
        width={logoSize}
        src="../../assets/logoCreativeLight.svg"
        alt="Creative Paper logo"
      />
    );

  const items = links.map((link, index) => (
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={() => {
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  const [isBurgerVisible, setIsBurgerVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsBurgerVisible(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.marginBottom = opened ? "0px" : "0";
    }
  }, [opened]);

  function ToggleDarkAndLightMode() {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";

    return (
      <ActionIcon
        variant="subtle"
        color={dark ? "initial" : "black"}
        onClick={handleToggle}
        title="Toggle color scheme"
        sx={{ marginRight: "0.6rem" }}
      >
        {dark ? (
          <IconSunHigh size="1.4rem" stroke="1.2" />
        ) : (
          <IconMoonStars size="1.4rem" stroke="1.2" />
        )}
      </ActionIcon>
    );
  }

  function handleLinkClick() {
    setActive(links[0].link);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Header
      height={HEADER_HEIGHT}
      mb={headerRef.current ? (isBurgerVisible ? 200 : 0) : 0}
      ref={headerRef}
      className={classes.root}
    >
      <Container size="xl" className={classes.header}>
        <MediaQuery
          query="(max-width: 460px)"
          styles={{
            img: {
              width: "6rem",
              height: "6rem",
            },
          }}
        >
          <Link to="./" onClick={handleLinkClick}>
            <>{logo}</>
          </Link>
        </MediaQuery>
        <Group className={classes.links}>{items}</Group>
        <Group spacing="0">
          <ToggleDarkAndLightMode />
          <Link to="/admin" data-cy="admin-link">
            <Button size="xs" variant="subtle" radius="xl">
              <IconUserShield size="1.4rem" stroke="1.2" />
            </Button>
          </Link>
          <Link to="/checkout">
            <Button
              onClick={handleLinkClick}
              size="xs"
              variant="subtle"
              data-cy="cart-link"
              radius="xl"
            >
              <IconShoppingBag size="1.4rem" stroke="1.2" />
              {cartQuantity > 0 && (
                <Box
                  sx={{
                    borderRadius: "10rem",
                    backgroundColor:
                      colorScheme === "dark" ? "#f5f5f5" : "#000",
                    color: colorScheme === "dark" ? "#000" : "#FFF",
                    width: "1.1rem",
                    height: "1.1rem",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    display: "flex",
                    transform: "translate(-30%, -95%)",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  data-cy="cart-items-count-badge"
                >
                  {cartQuantity}
                </Box>
              )}
            </Button>
          </Link>
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
