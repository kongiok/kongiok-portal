'use client';
import React, { useEffect } from "react";

const Model = ({
  isOpen,
  children,
  onClose
}: {
  isOpen: boolean,
  children: React.ReactNode,
  onClose: () => void
}) => {
  return (
    <main className={`w-dvw h-dvh bg-black/50 ${isOpen ? "flex" : "hidden"} justify-center items-center`}
      onClick={onClose}
    >
      <section className="min-w-80 aspect-auto flex flex-col justify-center items-center gap-5 relative">
        {children}
        <button className="absolute top-1 right-1 rounded-full bg-neutral"
          onClick={onClose}
        >
        </button>
      </section>
    </main>
  );
}

export { Model };
