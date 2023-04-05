import { ActionIcon, AppShell, Button, Container, Group, Header, useMantineColorScheme } from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";
import { Logo } from "@nelver/client/components/MainLayout/_logo";
import { YourWalletModal } from "@nelver/client/components/YourWalletModal";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { type PropsWithChildren } from "react";

export function MainLayout({ children }: PropsWithChildren) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const pinned = useHeadroom({ fixedAt: 120 });

  const { status } = useSession();

  return (
    <Container size="xl" px={80}>
      <AppShell
        h="100%"
        padding="md"
        pt={120}
        fixed={false}
        header={
          <Header
            height={80}
            withBorder={false}
            pos="fixed"
            sx={(theme) => ({ boxShadow: pinned ? "initial" : `0px 2px 24px ${theme.colors.gray[5]}` })}
          >
            <Container size="xl" px={80} h="100%">
              <Group position="apart" h="100%">
                <Link href="/" passHref>
                  <Logo />
                </Link>

                <Group>
                  <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                    {colorScheme === "dark" ? <IconSun size="1rem" /> : <IconMoonStars size="1rem" />}
                  </ActionIcon>

                  <YourWalletModal />

                  {status === "unauthenticated" ? (
                    <Button onClick={() => void signIn()}>Login</Button>
                  ) : status === "authenticated" ? (
                    <Button onClick={() => void signOut()}>Logout</Button>
                  ) : null}
                </Group>
              </Group>
            </Container>
          </Header>
        }
      >
        <main>{children}</main>
      </AppShell>
    </Container>
  );
}
