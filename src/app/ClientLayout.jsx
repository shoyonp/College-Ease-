"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const ClientLayout = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Prevent hydration mismatch
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        {children}
      </QueryClientProvider>
    </>
  );
};

export default ClientLayout;
