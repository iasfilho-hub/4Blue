import { useState, useEffect } from "react";
import { buscarHistorico, limparHistorico } from "../../api/api";
import {
    PageContainer,
    Title,
    Header,
    BottonGroup
} from "./styles";
import { useLocation, Link } from "react-router-dom";
import { Button } from "../../components/msgInput/styles";
import logo from "../../assets/4blue-Logo.png"
import HistoryList from "../../components/hstyList/HistoryList";


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

        await limparHistorico(user);
        await load();
    }


    return (
        <PageContainer>

            <Header>
                <img src={logo} alt="Logo-4Blue" />
            </Header>

            <Title>Histórico Completo - Usuário {user}</Title>

            <HistoryList messages={messages} loading={loading} />

            <BottonGroup>
                <Link to="/">
                    <Button>
                        Voltar
                    </Button>
                </Link>
                <Button $variant='danger' onClick={handleClearHistory}>
                    🗑️ Limpar
                </Button>
            </BottonGroup>

        </PageContainer>
    );
}