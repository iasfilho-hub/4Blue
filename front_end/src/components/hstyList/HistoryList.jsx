import { HistList, MessageItem, P } from "./styles"


export default function HistoryList({ messages, loading }) {

    if (loading) {
        return (
            <P>Carregando...</P>
        )
    }

    if (!messages || messages.length === 0) {
        return (
            <P>Nenhuma mensagem encontrada.</P>
        )
    }

    return (
        <HistList>
            {
                messages.map((m) => (
                    <MessageItem key={m.id}>
                        <strong>Usuário {m.user}</strong>: {m.text}
                        <br />
                        <em>{m.response}</em>
                    </MessageItem>
                ))
            }
        </HistList>
    )
}




