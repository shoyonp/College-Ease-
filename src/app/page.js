"use client";
import Card from "./components/Card";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
    // Implement search logic here
  };
  return (
    <>
      <div className="w-full flex space-x-2 max-w-3xl mx-auto mt-6 px-4">
        <input
          type="text"
          placeholder="Search college by name..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <Card />
    </>
  );
}
