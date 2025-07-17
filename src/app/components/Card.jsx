"use client";
import { useRouter } from "next/navigation";
import useAuth from "../(hooks)/useAuth";

const Card = ({ college }) => {
  const router = useRouter();
  const {user} = useAuth()

  const handleDetailsClick = () => {
    if (user && user.email) {
      router.push(`/colleges/${college?._id}`);
    } else {
      alert("Please log in to view details.");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <img
        src={college.image}
        alt={college.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{college.name}</h2>
        <p className="text-sm text-gray-500 mb-1">
          <span className="font-semibold">Admission Dates:</span> {college.admissionDates}
        </p>
        <p className="text-sm text-gray-500 mb-1">
          <span className="font-semibold">Events:</span> {college.events.join(", ")}
        </p>
        <p className="text-sm text-gray-500 mb-1">
          <span className="font-semibold">Research History:</span> {college.researchCount}+ Publications
        </p>
        <p className="text-sm text-gray-500 mb-4">
          <span className="font-semibold">Sports:</span> {college.sports.join(", ")}
        </p>
        <button
          onClick={handleDetailsClick}
          className="mt-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Card;
