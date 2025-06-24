# Real-Time-Chat-App-With-SocketIO
# Real-Time Chat App with Socket.IO

A full-stack real-time chat application enabling instant messaging through public rooms and private chats. Built with *Node.js, **Express, **MongoDB, **Socket.IO, and a **React + Tailwind CSS* frontend.


## 🚀 Features

- 🔐 Secure JWT-based user authentication
- 📡 Real-time public and private messaging with Socket.IO
- 💾 Persistent chat history in MongoDB
- ✍️ Typing indicators and online status
- ⚡ Instant join/leave room functionality
- 🎨 Responsive UI built with Tailwind CSS


## 🧰 Tech Stack

- *Frontend:* React, Tailwind CSS
- *Backend:* Node.js, Express, JWT, Socket.IO
- *Database:* MongoDB + Mongoose
- *Others:* PostCSS, dotenv, bcrypt


## 📁 Project Structure
REALTIME_CHAT_APP/

├── client/

│ ├── public/

│ │ └── index.html

│ ├── src/

│ │ ├── components/

│ │ │ ├── Chat.js

│ │ │ └── Login.js

│ │ ├── App.js

│ │ ├── index.js

│ │ └── index.css

│ ├── tailwind.config.js

│ ├── postcss.config.js

│ ├── package.json

│ └── ...

│

├── server/

│ ├── middleware/

│ │ └── auth.js

│ ├── models/

│ │ ├── Message.js

│ │ └── User.js

│ ├── routes/

│ │ └── auth.js

│ ├── socket/

│ │ └── index.js ← Socket.IO configuration and event handling

│ ├── index.js ← Express server entry point

│ └── ...

│

├── .env

├── README.md

└── ...

---

## 📦 Getting Started

*1. Clone the Repository*

git clone 

cd realtime-chat-app

*2. Install Dependencies*

*Server*

cd server

npm install

*Client*

cd client

npm install

*3. Set Up Environment Variables*

In the server/ directory, create a .env file:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

*4. Run the App*

*Start Server:*

cd server

npm run dev

*Start Client:*

cd client

npm start

# 🌐 Usage

Register/Login with valid credentials.

Join the default room or initiate a private chat.

Messages are broadcast in real-time.

Typing indicators and online statuses are shown.

Chat history is stored and retrieved from MongoDB.

# 🧪 Future Enhancements

File and image sharing

Chat notifications

Emojis and reactions

Group chat creation

Dark mode UI
