"use client";
import { useState } from "react";
import PageRevealLoader from "@/components/PageRevealLoader";
import MainContent from "@/components/MainContent";
import Header from "@/components/Header";
import Image from "next/image";

const Home = () => {
  return (
    <div className="relative z-99 h-screen bg-[#0D0907] w-full overflow-hidden">
      <>
        <Header />
        <main className="z-99 main-content">
          <MainContent />
        </main>
      </>
    </div>
  );
};

export default Home;
