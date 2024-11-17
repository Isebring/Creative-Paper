import {
  Accordion,
  Box,
  Container,
  createStyles,
  rem,
  Title,
} from "@mantine/core";
import { IconMessages } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    fontSize: rem(220),
    fontWeight: 900,
    lineHeight: 1,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[7],
    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(120),
    },
  },

  secondTitle: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: rem(38),
    marginBottom: rem(30),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[9],

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(30),
    },
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function Faq() {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        FAQ
      </Title>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1.2rem",
        }}
      >
        <IconMessages size="5rem" stroke="0.04rem" />
      </Box>
      <Title className={classes.secondTitle}>Frequently Asked Questions</Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="best-pen">
          <Accordion.Control>
            What is the best type of pen for writing?
          </Accordion.Control>
          <Accordion.Panel>
            The best pen for writing depends on personal preference and usage.
            Ballpoint pens are versatile and long-lasting, gel pens offer smooth
            writing, and fountain pens are ideal for an elegant, calligraphic
            feel. Consider factors like ink type, grip, and nib size when
            choosing.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="notebook-paper">
          <Accordion.Control>
            What type of paper is best for note-taking?
          </Accordion.Control>
          <Accordion.Panel>
            For note-taking, opt for paper that is smooth and ink-friendly,
            ideally with a weight of 70-90 GSM. If you’re using fountain pens or
            markers, consider thicker, bleed-resistant paper such as 100 GSM or
            higher.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="highlighter-bleed">
          <Accordion.Control>
            Do highlighters bleed through paper?
          </Accordion.Control>
          <Accordion.Panel>
            Highlighters can bleed through thinner paper, especially if pressed
            hard or used repeatedly over the same area. To avoid this, use
            highlighters labeled as "no bleed" or use paper with a higher GSM
            rating.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="erasable-pens">
          <Accordion.Control>Are erasable pens reliable?</Accordion.Control>
          <Accordion.Panel>
            Erasable pens are convenient for making corrections, but their ink
            may fade over time and is less permanent than regular pens. They are
            best suited for temporary notes or drafts rather than official
            documents.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="organizer-choice">
          <Accordion.Control>
            What’s the best organizer for managing tasks?
          </Accordion.Control>
          <Accordion.Panel>
            The best organizer depends on your needs. For detailed planning,
            consider a planner with daily, weekly, and monthly layouts. Bullet
            journals are great for customization, while desk organizers are
            ideal for a visual overview of tasks and deadlines.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
