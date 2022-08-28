import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, IconButton, Input } from "@chakra-ui/react";
import React, { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../data/Interfaces";
import { addMessage } from "../../store/features/chatSlice";

type Props = {};

export default function ChatForm({}: Props) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const { currentUser } = useSelector((store: RootState) => store.chat);

  return (
    <form
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        dispatch(
          addMessage({
            text: message,
            dateSent: "now",
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
  );
}
