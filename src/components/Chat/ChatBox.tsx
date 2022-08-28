import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChatIcon,
  ChevronLeftIcon,
  Icon,
} from "@chakra-ui/icons";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Fade,
  IconButton,
  Input,
  ScaleFade,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { User } from "../../data/Interfaces";
import LoginForm from "./LoginForm";
import Message from "./Message";

type Props = {};

export default function ChatBox({}: Props) {
  const { isOpen, onToggle } = useDisclosure();

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
            <Box display={"flex"}>
              <IconButton
                fontSize={"32px"}
                background={"transparent"}
                size="lg"
                color={"blue.900"}
                _hover={{ bg: "blue.600", color: "white" }}
                aria-label="Search database"
                icon={<ChevronLeftIcon />}
              ></IconButton>
              <AvatarGroup size="sm" max={2} ml={"10px"}>
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                <Avatar
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />
                <Avatar
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                />
              </AvatarGroup>
            </Box>
          </Box>

          <Box overflow={"hidden scroll"} maxH="480px">
            <Message isIncoming message="Hello" />
            <Message isIncoming message="Are you there?" />

            <Message message="It's funny how, lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae laboriosam labore magnam?" />
            <Message isIncoming message="Oh that's what you think?" />
            <Message message="Yeah, ho." />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            p="20px"
            borderTop={"1px"}
            borderColor={"gray.300"}
          >
            <Input flexGrow={"1"} placeholder="Start a new message" />
            <IconButton
              color={"gray.700"}
              ml={"8px"}
              aria-label=""
              icon={<ArrowRightIcon />}
            ></IconButton>
          </Box>
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
        <ChatIcon />
      </Button>
    </>
  );
}
