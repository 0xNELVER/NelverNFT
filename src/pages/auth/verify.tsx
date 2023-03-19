import { Button, Container, Title, createStyles, rem } from "@mantine/core";
import { api } from "@nelver/utils/api";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    textAlign: "center",
  },

  title: {
    marginBottom: theme.spacing.md,
  },
}));

export default function Verify() {
  const router = useRouter();
  const { classes } = useStyles();
  const [verifyMsg, setVerifyMsg] = useState<string | null>(null);
  const [showSignIn, setShowSignIn] = useState<boolean>(false);

  const { mutate: verifyEmailMutation } = api.auth.verifyEmail.useMutation({
    onSettled(data, error) {
      if (error) {
        setVerifyMsg(error.message);
      } else if (data) {
        setShowSignIn(true);
        setVerifyMsg(data);
      }
    },

  });

  useEffect(() => {
    if (!router.query.id || !router.query.token) return;
    verifyEmailMutation({ token: router.query.token as string, userId: router.query.id as string });
  }, [router.query.id, router.query.token, verifyEmailMutation]);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>{verifyMsg}</Title>
      {showSignIn && (
        <Link href="/auth/signin">
          <Button size="xl">Sign In</Button>
        </Link>
      )}
    </Container>
  );
}
