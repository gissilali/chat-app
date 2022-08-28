import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  message: string;
};

export default function ChatEmptyState({ message }: Props) {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      minH="200px"
    >
      {message}
    </Box>
  );
}
