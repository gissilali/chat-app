import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Text,
  Box,
  IconButton,
  AvatarGroup,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, User } from "../../data/Interfaces";
import { addCurrentUser } from "../../store/features/chatSlice";

export default function ChatHeader() {
  const dispatch = useDispatch();
  const { currentUser, users } = useSelector((store: RootState) => store.chat);
  return (
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
            <Box display={"flex"} alignItems={"center"}>
              <Avatar size="sm" name={currentUser.username}>
                <AvatarBadge boxSize="1.0em" bg="green.500" />{" "}
              </Avatar>
              <Text
                fontSize={"sm"}
                ml={"8px"}
                fontWeight={"bold"}
                color={"white"}
              >
                {currentUser.username}
              </Text>
            </Box>
          ) : null}
        </Box>
      </Box>
      <AvatarGroup size="sm" max={4} ml={"10px"}>
        {users.map((user) => (
          <Avatar key={user.id} name={user.username} />
        ))}
      </AvatarGroup>
    </Box>
  );
}
