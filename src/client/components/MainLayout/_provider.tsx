import { type ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useState, type PropsWithChildren } from "react";

export function MainProvider({ children }: PropsWithChildren) {
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
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
