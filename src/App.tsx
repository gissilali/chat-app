import {
  Avatar,
  Box,
  Center,
  Container,
  Flex,
  Icon,
  Spacer,
  Square,
  Text,
} from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Container maxW={["100%", "80%"]} centerContent>
        <Flex width={"100%"} color="white">
          <Box w={["100%", "30%"]}>
            <Flex justifyContent={"space-between"}>
              <Avatar name="Gibson Silali"></Avatar>
            </Flex>
          </Box>

          <Box flex="1" bg="tomato">
            <Text>Box 3</Text>
          </Box>
        </Flex>
      </Container>
    </div>
  );
}

export default App;
