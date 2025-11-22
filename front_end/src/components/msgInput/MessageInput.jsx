import { Button, Form, Input, } from "./styles";
import { useState } from "react";
import { sendMsg } from "../../api/api";



export default function MessageInput({ activeUser, onSend }) {
    const [text, setText] = useState("");

    async function handleSend(e) {
        e.preventDefault();

        if (!text.trim()) return;

        const msg = await sendMsg(activeUser, text);

        onSend(msg);
        setText("");
    }

    return (
        <Form onSubmit={handleSend}>
            <Input
                type="text"
                placeholder="Digite sua mensagem..."
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <Button type="submit">Enviar</Button>
        </Form>
    );
}