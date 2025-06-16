"use client";
import { useState } from "react";
import PageRevealLoader from "@/components/PageRevealLoader";
import MainContent from "@/components/MainContent";
import Header from "@/components/Header";
import Image from "next/image";

const Home = () => {
  return (
    <div className="relative h-screen bg-[#171717] w-full overflow-hidden">
      <Image
        src="/images/bgoverlay.avif"
        alt="overlay bg"
        width={1920}
        height={1080}
        priority
        className="block w-full absolute z-1 opacity-5 top-0 left-0 h-full object-cover object-center"
      />

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
