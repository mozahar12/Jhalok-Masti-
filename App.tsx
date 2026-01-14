import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import Header from './components/Header';
import VideoFeed from './components/VideoFeed';
import UserProfile from './components/UserProfile';
import { useUserQuery } from './hooks/useQueries';

const queryClient = new QueryClient();

export default function App() {
  const [view, setView] = useState('feed');
  const { data: user, isLoading } = useUserQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-black text-white">
        <Header view={view} setView={setView} />
        <main className="container mx-auto pb-20">
          {view === 'feed' ? <VideoFeed /> : <UserProfile />}
        </main>
      </div>
    </QueryClientProvider>
  );
}
