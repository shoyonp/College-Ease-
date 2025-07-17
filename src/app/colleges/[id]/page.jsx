"use client";
import { useAxiosPublic } from "@/app/(hooks)/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const CollegeDetails = ({ params }) => {
  console.log("param is here", params?.id);

  return (
    <div>
      <h1>College Details</h1>
      {/* <h2>ID - {singleCollegeData.id}</h2>
      <h2>Name - {singleCollegeData.name}</h2>
      <h2>Admission Dates - {singleCollegeData.admissionDates}</h2>
      <h2>Events - {singleCollegeData.events.join(", ")}</h2>
      <h2>Research Count - {singleCollegeData.researchCount}</h2>
      <h2>Sports - {singleCollegeData.sports.join(", ")}</h2>
      <h2>Rating - {singleCollegeData.rating}</h2> */}
    </div>
  );
};

export default CollegeDetails;
