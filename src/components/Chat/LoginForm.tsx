import { Input, Stack } from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function LoginForm({}: Props) {
  return (
    <form>
      <Stack spacing={3}>
        <Input variant="outline" placeholder="Enter your username" />
      </Stack>
    </form>
  );
}
