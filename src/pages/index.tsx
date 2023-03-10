import { Button, Container, createStyles } from "@mantine/core";
import { BrandName } from "@nelver/client/components/BrandName";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const useStyles = createStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "4rem",
    overflow: "hidden",
    height: "100vh",
  },
  bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Nelver</title>
        <meta name="description" content="Nelver Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={classes.root} size="100%">
        <video className={classes.bg} loop autoPlay muted>
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <BrandName />
        <Link href="/events/explore">
          <Button size="xl" variant="white">
            EXPLORE
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default Home;
