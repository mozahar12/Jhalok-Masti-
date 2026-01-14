import React from 'react';

export default function Header({ view, setView }) {
  return (
    <header className="flex items-center justify-between p-4 bg-zinc-900 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold text-orange-500">Jhalok Masti</h1>
      </div>
      <nav className="flex gap-4">
        <button 
          onClick={() => setView('feed')}
          className={`px-3 py-1 rounded-lg ${view === 'feed' ? 'bg-white text-orange-500' : 'text-white hover:bg-zinc-800'}`}
        >
          Feed
        </button>
        <button 
          onClick={() => setView('profile')}
          className={`px-3 py-1 rounded-lg ${view === 'profile' ? 'bg-white text-orange-500' : 'text-white hover:bg-zinc-800'}`}
        >
          Profile
        </button>
      </nav>
    </header>
  );
}
  
