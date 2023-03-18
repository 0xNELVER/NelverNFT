import { Button, Title, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { modals } from "@mantine/modals";

export function NewEventModal() {
  const form = useForm({
    initialValues: {
      title: "",
    },
    
  });

  return (
    <Button
      onClick={() =>
        modals.open({
          centered: true,
          title: <Title order={2}>New Event</Title>,
          children: (
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
              <TextInput withAsterisk label="title" placeholder="Event Title" {...form.getInputProps("title")} />
            </form>
          ),
        })
      }
    >
      New Event
    </Button>
  );
}
