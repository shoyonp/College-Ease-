import Link from "next/link";
import React from "react";

const Admission = () => {
  const collegeNames = [
    { id: "c101", name: "Greenfield International College" },
    { id: "c102", name: "Skyline Institute of Technology" },
    { id: "c103", name: "Riverdale Science & Arts University" },
    { id: "c104", name: "Horizon Engineering College" },
    { id: "c105", name: "Evergreen Medical Institute" },
    { id: "c106", name: "Mount Valley Art & Design School" },
    { id: "c107", name: "Brightwave Business Academy" },
    { id: "c108", name: "Oceanview Maritime College" },
    { id: "c109", name: "Silver Oak Law University" },
    { id: "c110", name: "Northbridge Agricultural College" },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Admission Information</h1>
      {collegeNames.map((college) => (
        <div key={college.id} className="mb-4">
          <Link href={`/admission/${college.id}`}>
            <h2 className="text-xl font-semibold">{college.name}</h2>
          </Link>
        </div>
      ))}
    </>
  );
};
export default Admission;
