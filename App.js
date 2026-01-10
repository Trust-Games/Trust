import React, { useState } from 'react';

export default function TrustGames() {
  const [page, setPage] = useState('home');
  const [currentUser, setUser] = useState({ id: 1, role: 'owner', credits: 5000 });

  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* HEADER */}
      <nav style={{ display: 'flex', padding: '15px', borderBottom: '1px solid #222' }}>
        <h2 style={{ flex: 1 }}>Trust Games 👑</h2>
        <input placeholder="Search users/games..." style={{ background: '#222', border: 'none', color: '#fff', padding: '10px', borderRadius: '5px' }} />
        {currentUser.role === 'owner' && <button onClick={() => setPage('admin')}>🛠️ Admin</button>}
      </nav>

      {/* FRIENDS BAR */}
      <div style={{ display: 'flex', gap: '10px', padding: '10px', background: '#111' }}>
        <div style={{ border: '2px solid gold', borderRadius: '50%', padding: '5px' }}>Friend 1 (In-Game)</div>
      </div>

      {/* MAIN CONTENT */}
      <main style={{ padding: '20px' }}>
        {page === 'home' ? (
          <div>
             <h3>Verified Games</h3>
             <iframe src="https://example-game-url.com" width="100%" height="500px" title="Game" />
          </div>
        ) : (
          <div style={{ background: '#111', padding: '20px' }}>
            <h1>Admin Panel</h1>
            <button onClick={() => alert('Granting Credits...')}>Give Credits to All</button>
            <hr />
            <input placeholder="Enter Username to Ban" />
            <textarea placeholder="Ban Reason" />
          </div>
        )}
      </main>
    </div>
  );
}
