import { Box, Text } from "@chakra-ui/react";
import SpeechBubble from "./SpeechBubble";
export type MessageProps = {
  isIncoming?: Boolean;
  isLoginPrompt?: Boolean;
  message: string;
};
import { lazy } from "react";

const LoginForm = lazy(() => import("./LoginForm"));

export default function Message({
  isIncoming,
  message,
  isLoginPrompt = false,
}: MessageProps) {
  return (
    <Box
      py={"16px"}
      px={"16px"}
      className="Message"
      display={"flex"}
      justifyContent={`${isIncoming ? "flex-start" : "flex-end"}`}
    >
      <Box maxW={"75%"}>
        {isLoginPrompt ? (
          <LoginForm message={message} />
        ) : (
          <SpeechBubble message={message} isIncoming={isIncoming} />
        )}
      </Box>
    </Box>
  );
}
