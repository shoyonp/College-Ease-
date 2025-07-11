"use client";
import { useRouter } from "next/navigation";
import React, { use } from "react";

const Card = () => {
  const router = useRouter();
  const isLoggedIn = false;
  const handleDetailsClick = () => {
    if (isLoggedIn) {
      router.push("/details");
    } else {
      // router.push("/");
      alert("Please log in to view details.");
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
      {[1, 2, 3].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
        >
          <img
            src="https://via.placeholder.com/600x300?text=College+Image"
            alt="College"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Greenfield College
            </h2>
            <p className="text-sm text-gray-500 mb-1">
              <span className="font-semibold">Admission Dates:</span> July 10 –
              Aug 20
            </p>
            <p className="text-sm text-gray-500 mb-1">
              <span className="font-semibold">Events:</span> Tech Fest, Alumni
              Meet, Sports Day
            </p>
            <p className="text-sm text-gray-500 mb-1">
              <span className="font-semibold">Research History:</span> 120+
              Publications
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <span className="font-semibold">Sports:</span> Football, Cricket,
              Swimming
            </p>
            <button
              onClick={handleDetailsClick}
              className="mt-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
