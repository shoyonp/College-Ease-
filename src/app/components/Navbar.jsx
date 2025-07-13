"use client";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import useAuth from "../(hooks)/useAuth";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const pathname = usePathname();
console.log("user in navbar", user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`hover:text-blue-600 transition ${
            pathname === "/"
              ? "text-blue-600 font-semibold underline underline-offset-4"
              : "text-gray-700"
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/colleges"
          className={`hover:text-blue-600 transition ${
            pathname === "/colleges"
              ? "text-blue-600 font-semibold underline underline-offset-4"
              : "text-gray-700"
          }`}
        >
          Colleges
        </Link>
      </li>
      <li>
        <Link
          href="/admission"
          className={`hover:text-blue-600 transition ${
            pathname === "/admission"
              ? "text-blue-600 font-semibold underline underline-offset-4"
              : "text-gray-700"
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
              pathname === "/mycollege"
                ? "text-blue-600 font-semibold underline underline-offset-4"
                : "text-gray-700"
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
              pathname === "/login"
                ? "text-blue-600 font-semibold underline underline-offset-4"
                : "text-gray-700"
            }`}
          >
            Join us
          </Link>
        </li>
      )}
    </>
  );

  return (
    <>
      <nav className="w-full bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-gray-800 hover:text-blue-600 transition"
          >
            <span className="text-blue-600">C</span>ollege
          </Link>

          {/* Main links */}
          <ul className="hidden md:flex gap-6 text-sm font-medium items-center">
            {links}
          </ul>

          {/* User avatar dropdown */}
          <div className="relative">
            {user?.email ? (
              <div className="group relative cursor-pointer">
                <img
                  src={user?.photoURL || "/default-avatar.png"}
                  alt="User"
                  className="w-10 h-10 rounded-full border object-cover"
                />
                <div className="absolute right-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md w-48 p-3 z-50">
                  <p className="text-sm text-gray-800 mb-2">
                    {user?.displayName || "User"}
                  </p>
                  <ul className="md:hidden flex flex-col gap-2 text-sm">
                    {links}
                  </ul>
                  <button
                    onClick={handleLogOut}
                    className="w-full mt-3 py-1.5 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="group relative cursor-pointer">
                <FaUserAlt className="text-xl text-gray-700" />
                <div className="absolute right-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md w-48 p-3 z-50">
                  <ul className="md:hidden flex flex-col gap-2 text-sm">
                    {links}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
