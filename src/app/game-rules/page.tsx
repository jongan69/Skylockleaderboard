'use client';

export default function GameRules() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">Game Rules</h1>
      <div className="max-w-2xl text-center">
        <p className="mb-4">
          Welcome to the game! Here are the rules you need to follow:
        </p>
        <ul className="list-disc list-inside text-left">
          <li>Rule 1: Description of the first rule.</li>
          <li>Rule 2: Description of the second rule.</li>
          <li>Rule 3: Description of the third rule.</li>
          <li>Rule 4: Description of the fourth rule.</li>
          <li>Rule 5: Description of the fifth rule.</li>
        </ul>
      </div>
    </div>
  );
} 