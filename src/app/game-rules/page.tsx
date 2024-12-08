'use client';

export default function GameRules() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">Game Rules</h1>
      <div className="max-w-2xl text-center">
        <p className="mb-4">
          Welcome to Skylock! Here are the rules you need to follow:
        </p>
        <ul className="list-disc list-inside text-left">
          <li>Rule 1: Lockin.</li>
          <li>Rule 2: Win.</li>
        </ul>
      </div>
    </div>
  );
} 