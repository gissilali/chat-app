import { Box, Text } from "@chakra-ui/react";
type Props = {
  isIncoming?: Boolean;
};

export default function Message({ isIncoming }: Props) {
  return (
    <Box
      py={"16px"}
      px={"16px"}
      className="Message"
      display={"flex"}
      justifyContent={`${isIncoming ? "flex-start" : "flex-end"}`}
    >
      <Box maxW={"75%"}>
        <Box
          backgroundColor={`${isIncoming ? "gray.300" : "blue.500"}`}
          color={`${isIncoming ? "" : "white"}`}
          padding={"10px"}
          rounded="xl"
          roundedBottomRight={`${isIncoming ? "xl" : "0"}`}
          roundedBottomLeft={`${isIncoming ? "0" : "xl"}`}
        >
          <Text fontSize={"sm"}>
            But naona kwa comments kuna watu wako na sense{" "}
          </Text>
        </Box>
        <Text
          fontSize={"xs"}
          color={"gray.500"}
          textAlign={`${isIncoming ? "left" : "right"}`}
          mt={"4px"}
        >
          Yesterday, 20:23
        </Text>
      </Box>
    </Box>
  );
}
