"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

const ClientLayout = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Prevent hydration mismatch
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default ClientLayout;
