# 💬 4Blue Chat

Um chat simples desenvolvido com **Django (backend)** e **React (frontend)**.  
O objetivo do projeto é simular um sistema de mensagens entre dois usuários (“Usuário A” e “Usuário B”) com respostas automáticas mockadas, salvando o histórico no banco de dados.

---

## 🚀 Tecnologias Utilizadas

### Backend
- 🐍 **Python 3.13**
- ⚙️ **Django 5.2**
- 🧩 **Django REST Framework**
- 🔒 **django-cors-headers**
- 💾 **SQLite**

### Frontend
- ⚛️ **React 18** com **Vite**
- 💅 **Styled Components**
- 🔄 **React Router DOM**

---

## ⚙️ Como Rodar o Projeto

### 🔧 Backend (Django)

1. Crie e ative o ambiente virtual:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # Linux/macOS
   .venv\Scripts\activate     # Windows
   
2. Instale as dependências:
   ```bash
   pip install -r requirements.txt 
     
  
3. Rode as migrações:
   ```bash
    python manage.py migrate

4. Inicie o Servidor:
    ```bash
    python manage.py runserver

O backend ficará disponível em:
👉 http://127.0.0.1:8000

---

### 💻 Frontend (React)

1. Acesse a pasta frontend:
    ```bash
    cd frontend


2. Instale as dependências:
    ```bash
    npm install


3. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev


O frontend ficará disponível em:
👉 http://localhost:5173

---

## 🧠 Decisões Técnicas

### 🎯 Backend (Django)

#### 1. Estrutura dos Models:
   Foi criado um único model chamado Message, representando cada mensagem enviada no chat.
   Ele contém os campos user, text, response e timestamp.
   Essa abordagem simples permite armazenar o histórico completo e filtrar mensagens por usuário de forma eficiente.

#### 2. API REST:
A API foi construída com o Django REST Framework, permitindo endpoints para envio e listagem de mensagens.
As respostas mockadas (“Obrigado pelo contato...”) são geradas diretamente na view, simulando um comportamento de IA.

#### 3. Separação de Responsabilidades:
O backend se limita à persistência e lógica da API, deixando toda a interface e experiência do usuário sob responsabilidade do React.

### ⚛️ Frontend (React)

#### 1. Gerenciamento de Estado:
O estado do chat é controlado com useState e useEffect.
Cada usuário (A ou B) mantém seu histórico separado, e o React atualiza a interface dinamicamente conforme o backend responde.

#### 2. Componentização:
O projeto foi dividido em componentes reutilizáveis (UserSelector, MessageInput, MessageList, HistoryList) para facilitar manutenção e escalabilidade.

#### 3. Estilização:
Foi adotado o Styled Components para manter o CSS encapsulado em cada componente, garantindo consistência visual e permitindo temas dinâmicos no futuro.

#### 4. Integração com o Backend:
O frontend se comunica com o backend Django via fetch API (em api.js), mantendo a base de código limpa e desacoplada.

---

### 🧠 Funcionalidades

✅ Envio de mensagens entre “Usuário A” e “Usuário B” <br>
✅ Respostas automáticas simuladas <br>
✅ Histórico de mensagens separado por usuário <br>
✅ Limpeza total do histórico <br>
✅ Interface moderna com Styled Components <br>
✅ Integração total entre Django REST e React 

---

### 🧩 Futuras Melhorias

🔐 Login com autenticação real (JWT) <br>
☁️ Deploy (Render / Vercel) <br>
🧠 Respostas com IA <br>
🌙 Modo Escuro

---

### 👨‍💻 Autor

Ivan Alves dos Santos Filho

 









