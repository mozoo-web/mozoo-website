"use client";

import { useState, useEffect } from "react";
import { Navbar, Footer, FranchiseModal } from "@/components/shared";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [franchiseOpen, setFranchiseOpen] = useState(false);

  useEffect(() => {
    const handler = () => setFranchiseOpen(true);
    window.addEventListener("openFranchiseModal", handler);
    return () => window.removeEventListener("openFranchiseModal", handler);
  }, []);

  return (
    <>
      <Navbar onFranchiseClick={() => setFranchiseOpen(true)} />
      {children}
      <Footer />
      <FranchiseModal open={franchiseOpen} onClose={() => setFranchiseOpen(false)} />
    </>
  );
}
