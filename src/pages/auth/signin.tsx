import { Container } from "@mantine/core";
import { AuthenticationForm } from "@nelver/client/components/AuthenticationForm";

export default function SignUp() {
  return (
    <Container h="100vh" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <AuthenticationForm />
    </Container>
  );
}
