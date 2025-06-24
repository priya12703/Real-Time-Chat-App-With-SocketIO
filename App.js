import React, { useState } from 'react';
import Login from './components/Login';
import Chat from './components/Chat';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
      {!user ? <Login onLogin={setUser} /> : <Chat user={user} />}
    </div>
  );
}

export default App;
