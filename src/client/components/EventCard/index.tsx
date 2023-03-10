import { Avatar, Box, Button, Card, createStyles, Flex, Image, rem, Text, Tooltip } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { extdDayjs } from "@nelver/utils/dayjs-extended";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    overflow: "visible",
  },

  footer: {
    padding: `${theme.spacing.xs} ${theme.spacing.lg}`,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
  },
}));

interface EventCardProps {
  id: number;
  title: string;
  brand: {
    name: string;
    logo: string;
    banner: string;
  };
  startAt: string;
  going: number;
  labels: never[];
}

export function EventCard({ title, brand, startAt, going, labels }: EventCardProps) {
  const { classes } = useStyles();

  const { hovered, ref } = useHover<HTMLButtonElement>();

  return (
    <Card withBorder padding="sm" radius="md" className={classes.card}>
      <Card.Section mb="sm">
        <Image src={brand.banner} alt={title} radius="md" />
      </Card.Section>

      <Flex columnGap={8}>
        <Avatar src={brand.logo} radius="xl" />

        <Box>
          <Tooltip label={title}>
            <Text fw={700} lineClamp={2} h={50}>
              {title}
            </Text>
          </Tooltip>
          <Tooltip label={brand.name}>
            <Text fw={500} fz="sm" lineClamp={1} h={22}>
              {brand.name}
            </Text>
          </Tooltip>
          <Text fz="sm" c="dimmed">
            {Intl.NumberFormat().format(going)} going
          </Text>
        </Box>
      </Flex>

      <Card.Section className={classes.footer}>
        <Button variant="outline" fullWidth ref={ref}>
          <Text transform="capitalize">
            {hovered
              ? "Buy ticket now"
              : `${extdDayjs().to(extdDayjs(startAt))} at ${extdDayjs(startAt).format("h:mm A")}`}
          </Text>
        </Button>
      </Card.Section>
    </Card>
  );
}
