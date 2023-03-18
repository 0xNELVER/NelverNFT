import { Anchor, Button, Group, Paper, PasswordInput, Stack, Text, TextInput, type PaperProps } from "@mantine/core";
import { useForm } from "@mantine/form";
import { upperFirst, useToggle } from "@mantine/hooks";
import { api } from "@nelver/utils/api";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

type SubmitType = "signin" | "signup";

type SignInSchema = {
  email: string;
  password: string;
};

type SignUpSchema = {
  name: string;
  email: string;
  password: string;
};

const Title = {
  signin: "login",
  signup: "register",
};

export function AuthenticationForm(props: PaperProps) {
  const router = useRouter();
  const [type, toggle] = useToggle<SubmitType>(["signin", "signup"]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(val) ? (
          <Stack spacing={0}>
            <Text>Password must contain at least 1 upper case letter</Text>
            <Text>Password must contain at least 1 lower case letter</Text>
            <Text>Password must contain at least 1 number or special character</Text>
            <Text>Password must be at least 8 characters long</Text>
          </Stack>
        ) : null,
    },
  });

  const { mutateAsync: signUpMutate } = api.auth.signUp.useMutation({
    onSuccess: () => {
      toggle();
    },
  });

  const onSignIn = async (values: SignInSchema) => {
    await signIn("credentials", {
      ...values,
      callbackUrl: router.query?.callbackUrl?.toString(),
    });
  };

  const onSignUp = async (values: SignUpSchema) => {
    await signUpMutate(values);
  };

  const onSubmitMap: Record<
    SubmitType,
    SubmitType extends "signin" ? (values: SignInSchema) => Promise<void> : (values: SignUpSchema) => Promise<void>
  > = {
    signin: onSignIn,
    signup: onSignUp,
  };

  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" my="lg" weight={500}>
        Welcome to Nelver, {Title[type]} with
      </Text>

      <form
        onSubmit={form.onSubmit((values) => {
          void onSubmitMap[type](values);
        })}
      >
        <Stack>
          {type === "signup" && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) => form.setFieldValue("name", event.currentTarget.value)}
              radius="md"
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
            error={form.errors.email}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue("password", event.currentTarget.value)}
            error={form.errors.password}
            radius="md"
          />

          {type === "signup" && <Text size="xs">By clicking register you agree to Nelver terms and conditions</Text>}
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor component="button" type="button" color="dimmed" onClick={() => toggle()} size="xs">
            {type === "signup" ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
