import {
  ArrowRightIcon,
  ChatIcon,
  ChevronLeftIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Box,
  Button,
  Fade,
  IconButton,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../data/Interfaces";
import { addMessage, addCurrentUser } from "../../store/features/chatSlice";
import { FormEvent, useState } from "react";
import useChatScroll from "../../hooks/useChatScroll";
import { lazy } from "react";
import ChatHeader from "./ChatHeader";
import ChatForm from "./ChatForm";
const ChatEmptyState = lazy(() => import("./ChatEmptyState"));
const Message = lazy(() => import("./Message"));

type Props = {};

export default function ChatBox({}: Props) {
  const { isOpen, onToggle } = useDisclosure({ isOpen: true });
  const { currentUser, messages } = useSelector(
    (store: RootState) => store.chat
  );

  const chatRef = useChatScroll([messages, currentUser]);

  return (
    <>
      <Fade in={isOpen}>
        <Box
          position={"fixed"}
          bottom={"100px"}
          right={"20px"}
          minH={"250px"}
          maxH={"100%"}
          display={"flex"}
          flexDir={"column"}
          w={"376px"}
          boxShadow="lg"
          rounded={"2xl"}
          overflow="hidden"
        >
          <ChatHeader />
          <Box
            ref={chatRef as React.LegacyRef<HTMLDivElement> | undefined}
            overflow={"hidden scroll"}
            minH="200px"
            maxH="480px"
          >
            {currentUser ? (
              <>
                {messages.length > 0 ? (
                  messages.map((message, index) => (
                    <Message
                      key={index}
                      isIncoming={currentUser.id !== message.userId}
                      message={message.text}
                    />
                  ))
                ) : (
                  <ChatEmptyState message="No messages in chat" />
                )}
              </>
            ) : (
              <Message message="Enter your username" isLoginPrompt={true} />
            )}
          </Box>
          {currentUser ? <ChatForm /> : null}
        </Box>
      </Fade>

      <Button
        onClick={onToggle}
        position={"fixed"}
        bottom={"20px"}
        right={"20px"}
        colorScheme="teal"
        w={"60px"}
        h={"60px"}
        rounded={"full"}
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </Button>
    </>
  );
}
