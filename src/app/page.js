"use client";
import Card from "./components/Card";
import { useState } from "react";
import CollegeImage from "./components/CollegeImage";
import ResearchPaper from "./components/ResearchPaper";
import Review from "./components/Review";
import { useAxiosPublic } from "./(hooks)/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
    // TODO: Implement search logic here
  };
  const axiosPublic = useAxiosPublic();
  const { refetch, data: colleges = [] } = useQuery({
    queryKey: ["colleges"],
    queryFn: async () => {
      const res = await axiosPublic.get("/colleges");
      return res.data;
    },
  });

  return (
    <>
      {/* search field */}
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
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
        {colleges.slice(0, 3).map((college) => (
          <Card key={college._id} college={college} />
        ))}
      </div>
      {/* college images */}
      <CollegeImage />
      {/* research papers */}
      <ResearchPaper />
      {/* reviews */}
      <Review />
    </>
  );
}
