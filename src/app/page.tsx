'use client';
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

// Define the User type
type User = {
  name: string;
  score: number;
};

export default function Home() {
  const [leaderboard, setLeaderboard] = useState<User[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const response = await fetch('/api/score');
        const data = await response.json();
        if (!response.ok) throw new Error(data.error);
        
        // Transform data to match User type
        const formattedData = data.map((user: { username: string; score: number }) => ({
          name: user.username,
          score: user.score
        }));
        
        setLeaderboard(formattedData);
      } catch (error) {
        console.error('Failed to fetch leaderboard:', error);
        setLeaderboard([]); // Set empty leaderboard on error
      }
    }
    fetchLeaderboard();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center w-full max-w-2xl">
        <header className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 px-4 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center">Game Leaderboard</h1>
          <p className="text-center mt-2 text-sm sm:text-base">
            Compete with players worldwide and see who tops the chart!
          </p>
        </header>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md mt-4">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">
                Rank
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">
                Name
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">
                Score
              </th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                  {index + 1}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                  {user.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                  {user.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-500 text-white gap-2 hover:bg-blue-600 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            onClick={() => alert('Download the game!')}
          >
            Download Game
          </button>
          <button
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            onClick={() => router.push('/game-rules')}
          >
            Game Rules
          </button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <button
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          onClick={() => alert('Contact support')}
        >
          Contact Support
        </button>
        <button
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          onClick={() => window.open('https://x.com/i/communities/1829212924977570199', '_blank')}
        >
          Community
        </button>
        <button
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          onClick={() => window.open('https://medium.com/@lockincorporated', '_blank')}
        >
          Blog
        </button>
      </footer>
    </div>
  );
}
