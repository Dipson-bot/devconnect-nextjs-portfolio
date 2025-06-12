import React, { useState } from "react";

const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don't let yesterday take up too much of today.",
  "It's not whether you get knocked down, it's whether you get up.",
  "If you are working on something exciting, it will keep you motivated.",
  "Success is not in what you have, but who you are.",
];

export default function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col justify-center items-center text-white p-6">
      <div className="bg-white text-gray-900 rounded-lg shadow-lg p-8 max-w-xl text-center">
        <p className="text-xl mb-6">{quote}</p>
        <button
          onClick={getRandomQuote}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded transition"
        >
          New Quote
        </button>
      </div>
    </div>
  );
}
