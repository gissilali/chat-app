import { ChatIcon, InfoIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Flex } from "@chakra-ui/react";

export default function ChatHeader() {
  return (
    <Box w={"100%"}>
      <Flex justifyContent={"space-between"} py={"4"} alignItems={"center"}>
        <Avatar name="Gibson Silali" size={"sm"}></Avatar>
        <Button
          bg={"transparent"}
          color={"gray.700"}
          w={"40px"}
          h={"40px"}
          rounded={"full"}
        >
          <InfoIcon fill={"gray.700"}></InfoIcon>
        </Button>
      </Flex>
    </Box>
  );
}
