import React, { useState } from 'react';

function TrustGames() {
  const [view, setView] = useState('home'); // home, admin, chat

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#1a1a1a', color: 'white', minHeight: '100vh' }}>
      {/* Header */}
      <nav style={{ padding: '20px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between' }}>
        <h2 onClick={() => setView('home')}>Trust Games 👑</h2>
        <div>
          <button onClick={() => setView('home')}>Games</button>
          <button onClick={() => setView('admin')}>Admin Panel 🛠️</button>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ padding: '20px' }}>
        {view === 'home' && (
          <div>
            <h3>Featured Games</h3>
            <div style={{ width: '100%', height: '400px', backgroundColor: '#333', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <p>Game Embed Loading... (URL goes here)</p>
            </div>
          </div>
        )}

        {view === 'admin' && (
          <div style={{ backgroundColor: '#222', padding: '20px', borderRadius: '10px' }}>
            <h3>Admin Dashboard</h3>
            <p>Total Users: 1</p>
            <hr />
            <h4>Management</h4>
            <button style={{ backgroundColor: 'gold', color: 'black' }}>Give Credits to All</button>
            <button style={{ backgroundColor: 'red', color: 'white', marginLeft: '10px' }}>Ban User</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TrustGames;
