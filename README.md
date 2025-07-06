# 💬 Real-Time Chat Application

A real-time chat application built with **React.js** on the frontend and **Socket.IO (WebSockets)** on the backend.

## 🚀 Features

- ✅ Real-time 2-way messaging
- ✅ WebSocket communication via **Socket.IO**
- ✅ Responsive user interface
- ✅ Message history (in-memory)
- ✅ Clean and minimal UI using CSS

## 🛠 Tech Stack

| Part        | Technology            |
|-------------|------------------------|
| Frontend    | React.js               |
| Backend     | Node.js + Express      |
| WebSockets  | Socket.IO              |
| Styling     | CSS                    |

## 📁 Folder Structure

```
chat-app/
├── client/          # React frontend
│   └── src/
│       ├── App.js
│       └── App.css
├── server/          # Node backend
│   └── index.js
└── README.md
```

## 🔧 Installation & Setup

### ⚙️ 1. Clone the Repository
```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

### 🖥 2. Start Backend (Node + Socket.IO)
```bash
cd server
npm install
node index.js
```

### 🌐 3. Start Frontend (React.js)
```bash
cd ../client
npm install
npm start
```

## 💡 How It Works

1. Client connects to the backend server via WebSocket (Socket.IO).
2. On sending a message, it's emitted via the `send_message` event.
3. All connected clients receive the message via `receive_message` event.
4. Chat messages are displayed in real-time.

## 📸 Screenshots

<img width="1536" height="1024" alt="Image" src="https://github.com/user-attachments/assets/853a9d93-bfb0-4a9f-b0af-a7485d09cb0a" />

## 📚 Future Enhancements

- Add usernames/authentication
- Save messages to database
- Enhance UI/UX with timestamps, chat bubbles
- Deploy on Render/Heroku


## 🙋‍♂️ Author

** Manikandaprabhu **  
📧 [ prabhumani7112005@gmail.com] 

## 📜 License

MIT License
