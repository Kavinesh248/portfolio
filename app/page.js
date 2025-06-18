"use client";
import { useState } from "react";
import MainContent from "@/components/MainContent";
import Header from "@/components/Header";

const Home = () => {
  return (
    <div className="relative z-999 bg-[#0D0907] h-screen w-full overflow-hidden">
      <>
        <Header />
        <main className="z-1 main-content">
          <MainContent />
        </main>
      </>
    </div>
  );
};

export default Home;
