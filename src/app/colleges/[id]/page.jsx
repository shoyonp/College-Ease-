import React from "react";

const CollegeDetails = ({ params }) => {
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
  const id = params.id;
  const singleCollegeData = colleges.find((college) => college.id == id);
  return (
    <div>
      <h1>College Details</h1>
      <h2>ID - {singleCollegeData.id}</h2>
      <h2>Name - {singleCollegeData.name}</h2>
      <h2>Admission Dates - {singleCollegeData.admissionDates}</h2>
      <h2>Events - {singleCollegeData.events.join(", ")}</h2>
      <h2>Research Count - {singleCollegeData.researchCount}</h2>
      <h2>Sports - {singleCollegeData.sports.join(", ")}</h2>
      <h2>Rating - {singleCollegeData.rating}</h2>
    </div>
  );
};

export default CollegeDetails;
