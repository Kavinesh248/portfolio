"use client";
import { useState } from "react";
import MainContent from "@/components/MainContent";
import Header from "@/components/Header";
import Image from "next/image";

const Home = () => {
  return (
    <div className="relative bg-[#0D0907] h-screen w-full overflow-hidden">
      <>
        <Header />
        <main className="main-content">
          <MainContent />
        </main>
      </>

      <Image
        src="/images/bgoverlay.avif"
        alt="overlay bg"
        width={1920}
        height={1080}
        priority
        className="block w-full absolute z-10 opacity-5 top-0 left-0 h-full object-cover object-center"
      />
    </div>
  );
};

export default Home;
