import { Container, Item, List, Title } from "./styles";



export default function MessageList({ messages }) {
    return (
        <Container>
            <Title>Chat:</Title>

            <List>
                {messages.map((m) => (
                    <Item key={m.id}>
                        <strong>Você:</strong> {m.text}
                        <br />
                        <strong>4Blue:</strong> {m.response}
                    </Item>
                ))}
            </List>
        </Container>
    );
}