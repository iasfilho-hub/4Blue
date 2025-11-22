
export async function sendMsg(user, text) {
    const response = await fetch('http://127.0.0.1:8000/api/mensagem/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, text }),
    })
    const data = await response.json();
    return data;
}


export async function limparHistorico(user) {
    const response = await fetch(`http://127.0.0.1:8000/api/limpar/${user}/`, {
        method: "DELETE",
    })
    if (response.status === 204) return { message: "Histórico apagado." };
    try {
        return await response.json();
    } catch {
        return { message: "Histórico apagado." };
    }
}

export async function buscarHistorico(user) {
    const response = await fetch(`http://127.0.0.1:8000/api/historico/${user}/`);

    const data = await response.json();
    return data;
}

