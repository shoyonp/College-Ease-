import React from "react";
import Card from "../components/Card";

const Colleges = () => {
  const colleges = [
    {
      id: 1,
      name: "Greenfield International College",
      image: "https://via.placeholder.com/600x300?text=Greenfield+College",
      admissionDates: "July 10 – August 20",
      events: ["Tech Fest", "Alumni Meet", "Science Fair"],
      researchCount: 120,
      researchTopics: ["AI in Education", "Climate Change Impact"],
      sports: ["Football", "Basketball", "Badminton"],
      rating: 4.6,
    },
    {
      id: 2,
      name: "Skyline Institute of Technology",
      image: "https://via.placeholder.com/600x300?text=Skyline+Institute",
      admissionDates: "June 1 – July 15",
      events: ["Innovation Week", "Coding Marathon", "Hackathon"],
      researchCount: 95,
      researchTopics: ["Blockchain", "Renewable Energy Systems"],
      sports: ["Volleyball", "Table Tennis", "Cricket"],
      rating: 4.2,
    },
    {
      id: 3,
      name: "Riverdale Science & Arts University",
      image: "https://via.placeholder.com/600x300?text=Riverdale+University",
      admissionDates: "August 5 – September 10",
      events: ["Cultural Night", "Research Expo", "Sports Gala"],
      researchCount: 150,
      researchTopics: ["Genetics", "Art Therapy", "Social Behavior"],
      sports: ["Swimming", "Archery", "Football"],
      rating: 4.8,
    },
    {
      id: 4,
      name: "Horizon Engineering College",
      image: "https://via.placeholder.com/600x300?text=Horizon+Engineering",
      admissionDates: "May 20 – July 10",
      events: ["Robotics Week", "Engineer's Expo"],
      researchCount: 80,
      researchTopics: ["Renewable Energy", "Smart Materials"],
      sports: ["Cricket", "Table Tennis", "Chess"],
      rating: 4.1,
    },
    {
      id: 5,
      name: "Evergreen Medical Institute",
      image: "https://via.placeholder.com/600x300?text=Evergreen+Medical",
      admissionDates: "April 15 – June 30",
      events: ["Health Camp", "Medical Symposium"],
      researchCount: 105,
      researchTopics: ["Vaccine Development", "Public Health"],
      sports: ["Badminton", "Yoga", "Swimming"],
      rating: 4.7,
    },
    {
      id: 6,
      name: "Mount Valley Art & Design School",
      image: "https://via.placeholder.com/600x300?text=Mount+Valley+Art+School",
      admissionDates: "June 5 – August 1",
      events: ["Art Showcase", "Cultural Fest", "Photography Walk"],
      researchCount: 67,
      researchTopics: ["Visual Storytelling", "Art Therapy"],
      sports: ["Dance", "Archery", "Drama"],
      rating: 4.3,
    },
  ];

  return (
    <div className=" ">
      <h1 className="text-2xl font-bold mb-4">Colleges</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
        {colleges.map((college) => (
          <Card key={college.id} college={college} />
        ))}
      </div>
    </div>
  );
};

export default Colleges;
