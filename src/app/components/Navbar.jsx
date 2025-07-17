"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../(hooks)/useAuth";

const Navbar = () => {
  const pathname = usePathname();
  const { user, logOut } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogOut = () => {
    logOut().catch((err) => console.log(err));
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`hover:text-blue-600 transition ${
            pathname === "/" ? "text-blue-600 font-semibold underline underline-offset-4" : "text-gray-700"
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/colleges"
          className={`hover:text-blue-600 transition ${
            pathname === "/colleges" ? "text-blue-600 font-semibold underline underline-offset-4" : "text-gray-700"
          }`}
        >
          Colleges
        </Link>
      </li>
      <li>
        <Link
          href="/admission"
          className={`hover:text-blue-600 transition ${
            pathname === "/admission" ? "text-blue-600 font-semibold underline underline-offset-4" : "text-gray-700"
          }`}
        >
          Admission
        </Link>
      </li>
      {user && user.email && (
        <li>
          <Link
            href="/mycollege"
            className={`hover:text-blue-600 transition ${
              pathname === "/mycollege" ? "text-blue-600 font-semibold underline underline-offset-4" : "text-gray-700"
            }`}
          >
            My College
          </Link>
        </li>
      )}
      {!user?.email && (
        <li>
          <Link
            href="/login"
            className={`hover:text-blue-600 transition ${
              pathname === "/login" ? "text-blue-600 font-semibold underline underline-offset-4" : "text-gray-700"
            }`}
          >
            Join us
          </Link>
        </li>
      )}
    </>
  );

  return (
    <nav className="bg-white border-b shadow-sm w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600">
            <span className="text-blue-600">C</span>ollege
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-6 items-center text-sm font-medium">
            {links}
          </ul>

          {/* User Dropdown for md & above */}
          <div className="md:flex hidden items-center gap-3 relative">
            {user?.email ? (
              <div className="relative">
                <div
                  className="w-10 h-10 rounded-full border overflow-hidden cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <img src={user?.photoURL || "/default-avatar.png"} alt="User" />
                </div>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 flex flex-col bg-white border rounded-md shadow-md w-48 z-50 py-2">
                    <span className="px-4 py-1 text-gray-800 font-medium">{user?.displayName || "User"}</span>
                    <ul className="flex flex-col px-2 text-sm">{links}</ul>
                    <button
                      onClick={handleLogOut}
                      className="mx-2 mt-2 px-4 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <FaUserAlt className="text-xl text-gray-700" />
            )}
          </div>

          {/* Mobile Dropdown */}
          <div className="md:hidden flex items-center gap-3">
            <details className="dropdown dropdown-end">
              <summary className="btn btn-ghost btn-circle avatar">
                {user?.email ? (
                  <div className="w-9 rounded-full overflow-hidden border">
                    <img src={user?.photoURL || "/default-avatar.png"} alt="User" />
                  </div>
                ) : (
                  <FaUserAlt className="text-xl text-gray-600" />
                )}
              </summary>
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {user && (
                  <li className="text-gray-800 font-medium px-2 py-1">{user.displayName || "User"}</li>
                )}
                {links}
                {user?.email && (
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="w-full mt-1 text-left px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </details>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
