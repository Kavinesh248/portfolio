import ChatBot from "@/components/Chatbot";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Image from "next/image";

const Home = function () {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/cloud-img.avif"
        alt="cloud bg"
        width={1920}
        height={1080}
        priority
        className="block w-full absolute -z-1 top-0 left-0 h-full object-cover object-center"
      />
      <Image
        src="/images/bgoverlay.avif"
        alt="cloud bg"
        width={1920}
        height={1080}
        priority
        className="block w-full absolute -z-1 opacity-5 top-0 left-0 h-full object-cover object-center"
      />
      <Header />

      <main className="z-99">
        <MainContent />
      </main>
    </div>
  );
};

export default Home;
