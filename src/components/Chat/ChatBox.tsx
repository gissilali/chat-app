import {
  ArrowRightIcon,
  ChatIcon,
  ChevronLeftIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Fade,
  IconButton,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../data/Interfaces";
import ChatEmptyState from "./ChatEmptyState";
import Message from "./Message";
import { addMessage, addCurrentUser } from "../../store/features/chatSlice";
import { FormEvent, useState } from "react";
import * as dayjs from "dayjs";
import useChatScroll from "../../hooks/useChatScroll";

type Props = {};

export default function ChatBox({}: Props) {
  const [message, setMessage] = useState("");
  const { isOpen, onToggle } = useDisclosure({ isOpen: true });
  const { currentUser, messages, users } = useSelector(
    (store: RootState) => store.chat
  );

  const chatRef = useChatScroll([messages, currentUser]);

  const dispatch = useDispatch();

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
          <Box
            py={"10px"}
            px={"10px"}
            background={"blue.500"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Box alignItems={"center"} display={"flex"}>
                <IconButton
                  onClick={() => dispatch(addCurrentUser(null))}
                  fontSize={"32px"}
                  background={"transparent"}
                  size="lg"
                  color={"blue.900"}
                  _hover={{ bg: "blue.600", color: "white" }}
                  aria-label="Search database"
                  icon={<ChevronLeftIcon />}
                ></IconButton>
                {currentUser ? (
                  <Avatar size="sm" name={currentUser.username} />
                ) : null}
              </Box>
            </Box>
            <AvatarGroup size="sm" max={4} ml={"10px"}>
              {users.map((user) => (
                <Avatar key={user.id} name={user.username} />
              ))}
            </AvatarGroup>
          </Box>

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
          {currentUser ? (
            <form
              onSubmit={(e: FormEvent) => {
                e.preventDefault();
                dispatch(
                  addMessage({
                    text: message,
                    dateSent: dayjs().format().toString(),
                    userId: currentUser?.id || "",
                  })
                );

                setMessage("");
              }}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                p="20px"
                borderTop={"1px"}
                borderColor={"gray.300"}
              >
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  flexGrow={"1"}
                  placeholder="Start a new message"
                />
                <IconButton
                  type="submit"
                  color={"gray.700"}
                  ml={"8px"}
                  aria-label=""
                  icon={<ArrowRightIcon />}
                ></IconButton>
              </Box>
            </form>
          ) : null}
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
