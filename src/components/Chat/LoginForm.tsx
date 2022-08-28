import { Button, FormLabel, Input, Stack } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentUser, addUserToList } from "../../store/features/chatSlice";
import { v4 as uuidv4 } from "uuid";
import { RootState, User } from "../../data/Interfaces";

type Props = {
  message: string;
};

export default function LoginForm({ message }: Props) {
  const dispatch = useDispatch();
  const { users } = useSelector((store: RootState) => store.chat);
  const [username, setUsername] = useState("");

  const checkForExistingUser = (user: User): User | undefined => {
    return users.find((existingUser) => existingUser.username == user.username);
  };

  const handleLogin = (user: User) => {
    const existingUser = checkForExistingUser(user);
    if (existingUser) {
      dispatch(addCurrentUser(existingUser));
    } else {
      dispatch(addUserToList(user));
    }
  };
  return (
    <form
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        handleLogin({
          username: username,
          id: uuidv4(),
        });
      }}
    >
      <Stack
        spacing={3}
        border={"1px"}
        borderColor={"gray.200"}
        borderTop={"2px"}
        borderTopColor={"blue.500"}
        boxShadow={"lg"}
        borderRadius={"lg"}
        p="16px"
      >
        <FormLabel fontSize={"sm"}>{message}</FormLabel>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder={message}
        />
        <Button type="submit" variant={"solid"} colorScheme={"blue"}>
          Login
        </Button>
      </Stack>
    </form>
  );
}
