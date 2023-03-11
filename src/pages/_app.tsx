import { NelverProvider } from "@nelver/client/components/MainLayout/_provider";
import { api } from "@nelver/utils/api";
import { type NextPage } from "next";
import { type AppProps, type AppType } from "next/app";
import Head from "next/head";
import { type ReactElement, type ReactNode } from "react";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: AppType<{ Layout: ReactNode }> = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <NelverProvider>{getLayout(<Component {...pageProps} />)}</NelverProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
