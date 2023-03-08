import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nelver</title>
        <meta name="description" content="Nelver Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello Nelver</h1>
      </main>
    </>
  );
};

export default Home;
