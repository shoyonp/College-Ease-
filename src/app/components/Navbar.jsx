import Link from "next/link";
import React from "react";

const Navbar = () => {
  const isLoggedIn = true; // Replace with actual authentication logic

  const links = (
    <>
      <Link href="/">
        <li>Home</li>
      </Link>
      <Link href="/colleges">
        <li>Colleges</li>
      </Link>
      <Link href="/admission">
        <li>Admission</li>
      </Link>
      {isLoggedIn ? (
        <Link href="/mycollege">
          <li>My College</li>
        </Link>
      ) : null}
    </>
  );

  return (
    <nav className="flex justify-center items-center bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">{links}</ul>
    </nav>
  );
};

export default Navbar;
