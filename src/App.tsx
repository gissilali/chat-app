import { Container } from "@chakra-ui/react";
import ChatBox from "./components/Chat/ChatBox";
function App() {
  return (
    <div
      className="App"
      style={{
        position: "relative",
      }}
    >
      <Container
        background={"gray.100"}
        position={"relative"}
        minW={["100%"]}
        minH={"100vh"}
      >
        <ChatBox />
      </Container>
    </div>
  );
}

export default App;
