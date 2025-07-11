import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>Home</li>
        <li>Colleges</li>
        <li>Admission</li>
        <li>My College</li>
      </ul>
    </nav>
  );
};

export default Navbar;
