import { Box, Text } from "@chakra-ui/react";
import { MessageProps } from "./Message";

export default function SpeechBubble({ isIncoming, message }: MessageProps) {
  return (
    <>
      <Box
        backgroundColor={`${isIncoming ? "gray.300" : "blue.500"}`}
        color={`${isIncoming ? "" : "white"}`}
        padding={"10px"}
        rounded="xl"
        roundedBottomRight={`${isIncoming ? "xl" : "0"}`}
        roundedBottomLeft={`${isIncoming ? "0" : "xl"}`}
      >
        <Text fontSize={"sm"}>{message}</Text>
      </Box>
      <Text
        fontSize={"xs"}
        color={"gray.500"}
        textAlign={`${isIncoming ? "left" : "right"}`}
        mt={"4px"}
      >
        Yesterday, 20:23
      </Text>
    </>
  );
}
