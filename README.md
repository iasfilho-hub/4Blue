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

 









