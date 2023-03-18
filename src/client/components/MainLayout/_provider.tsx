import { type ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { useMemo, useState, type PropsWithChildren } from "react";

function NelverUIProvider({ children }: PropsWithChildren) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colors: {
            "brand-pink": [
              "#FEE7F3",
              "#FCBBDC",
              "#FA8FC6",
              "#F863AF",
              "#F63799",
              "#F40B83",
              "#C30969",
              "#93064E",
              "#620434",
              "#31021A",
            ],
            "brand-purple": [
              "#EEE6FE",
              "#CEBAFD",
              "#AF8EFB",
              "#9061FA",
              "#7035F8",
              "#5109F6",
              "#4107C5",
              "#310594",
              "#200363",
              "#100231",
            ],
          },
          colorScheme: colorScheme,
          primaryColor: colorScheme === "dark" ? "brand-pink" : "brand-purple",
          defaultGradient: { from: "brand-pink", to: "brand-purple", deg: 90 },
          fontFamily: "sans-serif",
          components: {
            Container: {
              defaultProps: {
                sizes: {
                  xs: 540,
                  sm: 720,
                  md: 960,
                  lg: 1240,
                  xl: 1720,
                },
              },
            },
          },
        }}
      >
        <ModalsProvider>{children}</ModalsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

function NelverBlockchainProvider({ children }: PropsWithChildren) {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        {children}
      </WalletProvider>
    </ConnectionProvider>
  );
}

export function NelverProvider({ session, children }: PropsWithChildren<{ session: Session | null }>) {
  return (
    <SessionProvider session={session}>
      <NelverBlockchainProvider>
        <NelverUIProvider>{children}</NelverUIProvider>
      </NelverBlockchainProvider>
    </SessionProvider>
  );
}
