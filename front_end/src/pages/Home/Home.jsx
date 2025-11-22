import { useState } from "react"
import UserSelector from "../../components/userSelector/UserSelector"
import MessageInput from "../../components/msgInput/MessageInput"
import MessageList from "../../components/msgList/MessageList"
import { Link } from "react-router-dom";
import { AppContainer, Header, Main } from "./styles"
import { Button } from "../../components/msgInput/styles";
import logo from "../../assets/4blue-Logo.png";

export default function Home() {
  const [activeUser, setActiveUser] = useState("A")
  const [messages, setMessages] = useState([])

  function handleNewMessage(msg) {
    setMessages(prev => [
      ...prev, msg
    ]);

  }

  return (

    <Main>
      <Header>
        <img src={logo} alt="Logo-4Blue" />
      </Header>
      <AppContainer>
        <UserSelector activeUser={activeUser} setActiveUser={setActiveUser} />

        <MessageList messages={messages} />

        <MessageInput activeUser={activeUser} onSend={handleNewMessage} />

        <Link to="/historico" state={{ user: activeUser }}>
          <Button style={{ marginBottom: "20px" }}>
            📜 Ver Histórico Completo
          </Button>
        </Link>
      </AppContainer>
    </Main>
  );
}