import Link from "next/link";
import React from "react";

export default function NotFoundPage404() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <Link href="/" className="text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
}
