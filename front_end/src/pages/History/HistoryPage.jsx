import { useState, useEffect } from "react";
import { buscarHistorico, limparHistorico } from "../../api/api";
import {
    PageContainer,
    Title,
    MessageList,
    MessageItem,
    Header,
    BottonGroup
} from "./styles";
import { useLocation, Link } from "react-router-dom";
import { Button } from "../../components/msgInput/styles";
import logo from "../../assets/4blue-Logo.png"


export default function HistoryPage() {
    const location = useLocation();
    const defaultUser = location.state?.user || "A";
    const [user, setUser] = useState(defaultUser);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);


    async function load() {
        setLoading(true);
        const data = await buscarHistorico(user);
        setMessages(Array.isArray(data) ? data : []);
        setLoading(false);
    }

    useEffect(() => {
        load();
    }, [user]);

    async function handleClearHistory() {
        const ok = confirm(`Apagar TODO o histórico do usuário ${user}?`);
        if (!ok) return;

        const res = await limparHistorico(user);
        await load();
    }


    return (
        <PageContainer>

            <Header>
                <img src={logo} alt="Logo-4Blue" />
            </Header>

            <Title>Histórico Completo - Usuário {user}</Title>

            <MessageList>
                {loading ? (
                    <p>Carregando...</p>
                ) : messages.length === 0 ? (
                    <p>Nenhuma mensagem encontrada.</p>
                ) : (
                    messages.map((m) => (
                        <MessageItem key={m.id}>
                            <strong>{m.user}</strong>: {m.text}
                            <br />
                            <em>{m.response}</em>
                        </MessageItem>
                    ))
                )}
            </MessageList>

            <BottonGroup>
                <Link to="/">
                    <Button style={{ marginBottom: "20px" }}>
                        Voltar
                    </Button>
                </Link>
                <Button $variant='danger' onClick={handleClearHistory}>
                    🗑️ Limpar Histórico
                </Button>
            </BottonGroup>

        </PageContainer>
    );
}