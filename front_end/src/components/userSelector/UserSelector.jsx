import { Button, Container, Title } from "./styles";

export default function UserSelector({ activeUser, setActiveUser }) {
  return (
    <Container>
      <Title>Selecione o Usuário:</Title>

      <Button $active={activeUser === 'A'} onClick={() => setActiveUser("A")}>
        Usuário A
      </Button>

      <Button $active={activeUser === "B"} onClick={() => setActiveUser("B")}>
        Usuário B
      </Button>

    </Container>
  )
}